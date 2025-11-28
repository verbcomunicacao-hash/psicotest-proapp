import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { Questionnaire, TestScores } from '../types';

// Fix: Initialize GoogleGenAI as per guidelines. Assumes process.env.API_KEY is available.
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '');


interface AnalysisResponse {
  analysis: string;
  summary: string;
}

const analysisSchema: any = {
  type: SchemaType.OBJECT,
  properties: {
    analysis: {
      type: SchemaType.STRING,
      description: "Análise psicológica detalhada do perfil do respondente, com no mínimo 200 palavras. Deve ser escrita em português do Brasil.",
    },
    summary: {
      type: SchemaType.STRING,
      description: "Um resumo conciso da análise, com no máximo 30 palavras. Deve ser escrito em português do Brasil.",
    },
  },
  required: ['analysis', 'summary'],
};


export const generateTestAnalysis = async (
  questionnaire: Questionnaire,
  answers: Record<string, number>, // questionId -> optionValue
  scores: TestScores
): Promise<AnalysisResponse> => {
  
  const answersText = questionnaire.questions.map(q => {
    const answerValue = answers[q.id];
    const selectedOption = q.options.find(opt => opt.value === answerValue);
    return `- Pergunta: "${q.text}" -> Resposta: "${selectedOption?.text || 'Não respondida'}"`;
  }).join('\n');

  const scoresText = Object.entries(scores)
    // Fix: Property 'scoring' does not exist on type 'Questionnaire'. Use feedback.categoryConfig instead.
    .map(([key, value]) => `- ${questionnaire.feedback.categoryConfig?.[key]?.name || key}: ${value}`)
    .join('\n');

  const fullPrompt = `${questionnaire.analysisPrompt}

### Detalhes do Teste
**Nome do Teste:** ${questionnaire.title}
**Descrição:** ${questionnaire.description}

### Pontuações Obtidas
${scoresText}

### Respostas do Utilizador
${answersText}

Com base em TODAS as informações acima (pontuações e respostas individuais), gere a análise e o resumo no formato JSON solicitado.
`;

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: analysisSchema,
        temperature: 0.5,
      },
    });

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text().trim();
    // Sometimes the model wraps the JSON in markdown backticks
    const cleanJson = text.replace(/^```json\n?/, '').replace(/\n?```$/, '');
    const parsedResponse: AnalysisResponse = JSON.parse(cleanJson);
    return parsedResponse;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Fallback in case of API error
    return {
      analysis: `Ocorreu um erro ao gerar a análise com a IA. Por favor, tente novamente mais tarde. Detalhes do erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}.`,
      summary: "Erro na geração da análise.",
    };
  }
};