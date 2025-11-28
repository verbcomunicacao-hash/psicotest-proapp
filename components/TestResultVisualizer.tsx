
import React from 'react';
import { FeedbackType, Questionnaire, TestResult } from '../types';
import CategoryBarChart from './CategoryBarChart';
import PieChartComponent from './PieChartComponent';
import ResultChart from './ResultChart'; // DISC chart

const TestResultVisualizer: React.FC<{ result: TestResult; questionnaire: Questionnaire }> = ({ result, questionnaire }) => {
  const { scores } = result;
  const { feedback, id } = questionnaire;

  const hasMultipleScores = Object.keys(scores).length > 1;

  if (!hasMultipleScores && feedback.type === FeedbackType.Sum) {
    return <p className="text-gray-500">Este resultado é baseado em uma pontuação total e não possui um gráfico detalhado.</p>;
  }
  
  // Handle specific chart for all DISC-based tests
  if (id.includes('disc')) {
    return (
      <div>
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Perfil Comportamental</h4>
        <ResultChart scores={scores} />
      </div>
    );
  }

  const labels = Object.fromEntries(
    // Fix: Cast value to ensure it has a name property
    Object.entries(feedback.categoryConfig || {}).map(([key, value]) => [key, (value as { name: string }).name])
  );
  
  const renderChart = () => {
    switch(feedback.type) {
      case FeedbackType.MultiCategoryAverage:
      case FeedbackType.MultiCategorySum:
      case FeedbackType.PairedStatementPointDistribution: {
        const maxValue = id.includes('career-anchors') ? 10 : id.includes('social-skills') ? 5 : undefined;
        return <CategoryBarChart scores={scores} labels={labels} maxValue={maxValue} />;
      }
      case FeedbackType.DominantCategory:
      case FeedbackType.DominantCategorySum:
      case FeedbackType.ForcedChoiceDisc: // Although DISC has its own chart, this is a fallback
        return <PieChartComponent scores={scores} labels={labels} />;
      
      default:
        // Fallback for other multi-score types or if logic is missing. A bar chart is a safe default.
        if (hasMultipleScores) {
            return <CategoryBarChart scores={scores} labels={labels} />;
        }
        return <p className="text-gray-500">Nenhuma visualização disponível para este tipo de teste.</p>;
    }
  };

  return (
    <div className="space-y-10">
      <div>
        <h4 className="text-xl font-semibold text-gray-700 mb-1">Análise Gráfica</h4>
        <p className="text-gray-500 mb-4">O gráfico abaixo ilustra suas pontuações nas diferentes categorias do teste.</p>
        {renderChart()}
      </div>
    </div>
  );
};

export default TestResultVisualizer;