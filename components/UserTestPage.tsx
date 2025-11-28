import React, { useState, useEffect } from 'react';
import { LoggedInUser, Questionnaire, TestResult, TestScores } from '../types';
import { generateTestAnalysis } from '../services/geminiService';

interface UserTestPageProps {
  user: LoggedInUser;
  questionnaire: Questionnaire;
  onTestComplete: (result: TestResult) => void;
  onBack: () => void;
}

const UserTestPage: React.FC<UserTestPageProps> = ({ user, questionnaire, onTestComplete, onBack }) => {
  const [answers, setAnswers] = useState<Record<string, number | Record<string, number>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [startedAt, setStartedAt] = useState<string | null>(null);
  const [clientFeedback, setClientFeedback] = useState('');

  useEffect(() => {
    setStartedAt(new Date().toISOString());
  }, []);
  
  const handleBack = () => {
    if (Object.keys(answers).length > 0) {
      if (window.confirm('Você tem certeza que deseja voltar? Todo o seu progresso será perdido.')) {
        onBack();
      }
    } else {
      onBack();
    }
  };


  const handleOptionChange = (questionId: string, value: number | Record<string, number>) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };
  
  const generateFeedbackText = (scores: TestScores): string => {
        if (typeof questionnaire.feedback.devolutiva === 'string') {
            return questionnaire.feedback.devolutiva;
        }

        if (questionnaire.feedback.feedbackTextGenerator) {
            return questionnaire.feedback.feedbackTextGenerator(scores);
        }

        // Find dominant category safely
        const dominantCategory = Object.keys(scores).reduce((a, b) => (scores[a] || 0) > (scores[b] || 0) ? a : b, Object.keys(scores)[0]);
        const devolutivaProfiles = questionnaire.feedback.devolutiva as Record<string, { name: string; description: string; interpretation: string; }>;
        
        if (devolutivaProfiles && devolutivaProfiles[dominantCategory]) {
            const profile = devolutivaProfiles[dominantCategory];
            return `**${profile.name}**\n${profile.description}\n\n${profile.interpretation || ''}`;
        }

        return "Análise detalhada não disponível para este perfil.";
    };

  const calculateScores = (): TestScores => {
    const scores: TestScores = {};
    const questionCount: Record<string, number> = {};

    // Initialize scores and counts
    if (questionnaire.feedback.categoryConfig) {
      Object.keys(questionnaire.feedback.categoryConfig).forEach(cat => {
        scores[cat] = 0;
        questionCount[cat] = 0;
      });
    }

    switch (questionnaire.feedback.type) {
      case 'forced-choice-disc':
        scores['D'] = 0; scores['I'] = 0; scores['S'] = 0; scores['C'] = 0;
        questionnaire.questions.forEach(q => {
          const answerValue = answers[q.id] as number;
          if(answerValue !== undefined){
            if (answerValue === 1) scores['D']++;
            else if (answerValue === 2) scores['I']++;
            else if (answerValue === 3) scores['S']++;
            else if (answerValue === 4) scores['C']++;
          }
        });
        break;

      case 'paired-statement-point-distribution':
         questionnaire.questions.forEach(q => {
          const answerValue = answers[q.id] as Record<string, number>;
          if (answerValue && typeof answerValue === 'object') {
            for (const [category, points] of Object.entries(answerValue)) {
              if (scores[category] !== undefined) {
                scores[category] += points;
              } else {
                scores[category] = points;
              }
            }
          }
        });
        break;

      case 'multi-category-average':
        questionnaire.questions.forEach(q => {
          const answerValue = answers[q.id] as number;
          const category = q.options[0]?.category || q.category; // Legacy support for category on question
          if (answerValue !== undefined && category && scores[category] !== undefined) {
            scores[category] += answerValue;
            questionCount[category]++;
          }
        });
        Object.keys(scores).forEach(cat => {
          if (questionCount[cat] > 0) {
            scores[cat] = scores[cat] / questionCount[cat];
          }
        });
        break;

      case 'dominant-category':
         // Updated Logic: Iterate over entries to ensure we match the specific question's options
         // This is crucial for tests like Enneagram where option values (1,2,3...) repeat across questions
         Object.entries(answers).forEach(([questionId, value]) => {
            const question = questionnaire.questions.find(q => q.id === questionId);
            if (question) {
                const selectedOption = question.options.find(opt => opt.value === value);
                if (selectedOption?.category) {
                    scores[selectedOption.category] = (scores[selectedOption.category] || 0) + 1;
                }
            }
        });
        break;
      
      case 'sum':
      case 'dominant-category-sum':
      case 'multi-category-sum':
      default:
        let totalSum = 0;
        questionnaire.questions.forEach(q => {
            const answerValue = answers[q.id] as number;
             if (answerValue !== undefined) {
                if(questionnaire.feedback.type === 'sum'){
                   totalSum += answerValue;
                } else {
                    const category = q.options[0]?.category || q.category;
                    if(category && scores[category] !== undefined){
                        scores[category] += answerValue;
                    }
                }
             }
        });
        if(questionnaire.feedback.type === 'sum'){
            scores['total'] = totalSum;
        }
        break;
    }

    return scores;
  };

  const isComplete = Object.keys(answers).length === questionnaire.questions.length;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isComplete) {
      alert('Por favor, responda todas as perguntas.');
      return;
    }
    setIsSubmitting(true);

    const scores = calculateScores();
    
    let analysis = generateFeedbackText(scores);
    let summary = "Resultado Concluído";

    // Use Gemini for AI-powered tests
    if (questionnaire.analysisPrompt) {
        // Fix: Cast answers to Record<string, number> to match generateTestAnalysis signature
        // Note: For complex types like paired distribution, the answers object structure is different
        // generateTestAnalysis currently expects number values. We might need to adapt it later for complex types.
        // For now, we pass it as is, but types might mismatch if not handled in geminiService.
        // A simple cast to any avoids the TS error for now, assuming Gemini prompt handles text description.
        const aiResponse = await generateTestAnalysis(questionnaire, answers as any, scores);
        analysis = aiResponse.analysis;
        summary = aiResponse.summary;
    } else {
        const dominantCategoryKey = Object.keys(scores).reduce((a, b) => (scores[a] || 0) > (scores[b] || 0) ? a : b, Object.keys(scores)[0]);
        if (questionnaire.feedback.devolutiva && typeof questionnaire.feedback.devolutiva !== 'string' && questionnaire.feedback.devolutiva[dominantCategoryKey]) {
           const profile = (questionnaire.feedback.devolutiva as Record<string, {name:string}>)[dominantCategoryKey];
           summary = `Perfil Principal: ${profile ? profile.name : dominantCategoryKey}`;
        }
    }
    
    const endTime = new Date();
    const startTime = startedAt ? new Date(startedAt) : endTime;
    const durationSeconds = Math.round((endTime.getTime() - startTime.getTime()) / 1000);

    const result: TestResult = {
      id: `result_${user.id}_${Date.now()}`,
      userId: user.id,
      questionnaireId: questionnaire.id,
      scores,
      analysis,
      summary,
      completedAt: endTime.toISOString(),
      startedAt: startedAt || endTime.toISOString(),
      durationSeconds,
      clientFeedback: clientFeedback || undefined,
      answers: answers,
    };

    onTestComplete(result);
    setIsSubmitting(false);
  };

  const renderQuestionInput = (q: any) => {
      if (questionnaire.feedback.type === 'paired-statement-point-distribution') {
          const optA = q.options[0];
          const optB = q.options[1];
          const currentAnswer = answers[q.id] as Record<string, number> | undefined;
          
          // Helper to check if a specific distribution is selected
          const isSelected = (valA: number, valB: number) => {
              return currentAnswer && currentAnswer[optA.category] === valA && currentAnswer[optB.category] === valB;
          };

          return (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
               <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                   {/* Option A Text */}
                   <div className="md:col-span-5 text-sm text-gray-800 font-medium leading-snug">
                       {optA.text}
                   </div>
                   
                   {/* Distribution Buttons */}
                   <div className="md:col-span-2 flex flex-row md:flex-col justify-center space-x-2 md:space-x-0 md:space-y-2">
                        <div className="flex justify-center space-x-1">
                            <button
                                type="button"
                                onClick={() => handleOptionChange(q.id, { [optA.category]: 3, [optB.category]: 0 })}
                                className={`px-3 py-1 text-xs font-bold rounded border ${isSelected(3, 0) ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}
                                title="3 pontos para a primeira, 0 para a segunda"
                            >
                                3 - 0
                            </button>
                            <button
                                type="button"
                                onClick={() => handleOptionChange(q.id, { [optA.category]: 2, [optB.category]: 1 })}
                                className={`px-3 py-1 text-xs font-bold rounded border ${isSelected(2, 1) ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}
                                title="2 pontos para a primeira, 1 para a segunda"
                            >
                                2 - 1
                            </button>
                        </div>
                        <div className="flex justify-center space-x-1">
                            <button
                                type="button"
                                onClick={() => handleOptionChange(q.id, { [optA.category]: 1, [optB.category]: 2 })}
                                className={`px-3 py-1 text-xs font-bold rounded border ${isSelected(1, 2) ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}
                                title="1 ponto para a primeira, 2 para a segunda"
                            >
                                1 - 2
                            </button>
                            <button
                                type="button"
                                onClick={() => handleOptionChange(q.id, { [optA.category]: 0, [optB.category]: 3 })}
                                className={`px-3 py-1 text-xs font-bold rounded border ${isSelected(0, 3) ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}
                                title="0 pontos para a primeira, 3 para a segunda"
                            >
                                0 - 3
                            </button>
                        </div>
                   </div>

                   {/* Option B Text */}
                   <div className="md:col-span-5 text-sm text-gray-800 font-medium leading-snug text-right md:text-left">
                       {optB.text}
                   </div>
               </div>
               <p className="text-center text-xs text-gray-400 mt-2">Distribua 3 pontos entre as opções</p>
            </div>
          );
      }

      // Default rendering (Radio buttons)
      return (
        <div className="space-y-2">
            {q.options.map((opt: any) => (
                <label key={`${q.id}-${opt.text}`} className={`flex items-center p-3 rounded-md border cursor-pointer transition-colors ${answers[q.id] === opt.value ? 'bg-blue-50 border-blue-300' : 'hover:bg-gray-50 border-gray-200'}`}>
                <input
                    type="radio"
                    name={q.id}
                    required
                    checked={answers[q.id] === opt.value}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    onChange={() => handleOptionChange(q.id, opt.value)}
                />
                <span className="ml-3 text-gray-700">{opt.text}</span>
                </label>
            ))}
        </div>
      );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 sm:p-8">
       <button onClick={handleBack} className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 flex items-center transition-colors text-sm">
          &larr; Voltar para a Seleção de Testes
        </button>
      <h1 className="text-3xl font-bold text-gray-800">{questionnaire.title}</h1>
      {questionnaire.introduction && <p className="text-gray-600 mt-2 mb-6 whitespace-pre-line">{questionnaire.introduction}</p>}
      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          {questionnaire.questions.map((q, index) => (
            <div key={q.id} className="border-t pt-6 first:border-t-0 first:pt-0">
              <p className="font-semibold text-lg text-gray-800 mb-3">{`${index + 1}. ${q.text}`}</p>
              {renderQuestionInput(q)}
            </div>
          ))}
        </div>

        {/* Campo de Feedback Opcional do Usuário */}
        <div className="mt-8 pt-6 border-t">
          <label htmlFor="clientFeedback" className="block text-lg font-semibold text-gray-800 mb-2">
            Gostaria de deixar algum comentário sobre como se sentiu ao fazer o teste? (Opcional)
          </label>
          <textarea
            id="clientFeedback"
            rows={3}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Digite seus comentários aqui..."
            value={clientFeedback}
            onChange={(e) => setClientFeedback(e.target.value)}
          />
        </div>

        <div className="mt-8 pt-6 border-t text-center">
          <button
            type="submit"
            disabled={!isComplete || isSubmitting}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isSubmitting ? 'A processar...' : 'Finalizar e Ver Resultado'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserTestPage;