
import React from 'react';
import { LoggedInUser, Questionnaire, TestResult } from '../types';
import TestResultVisualizer from './TestResultVisualizer';
import { SparklesIcon } from './icons/SparklesIcon';
import { DocumentDuplicateIcon } from './icons/DocumentDuplicateIcon'; // Usando ícone existente como exemplo de print/documento

interface UserResultPageProps {
  user: LoggedInUser;
  result: TestResult;
  questionnaire: Questionnaire;
  onBack?: () => void;
}

const UserResultPage: React.FC<UserResultPageProps> = ({ user, result, questionnaire, onBack }) => {
  
  const handlePrint = () => {
      window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
       <div className="flex justify-between items-center no-print">
           {onBack && (
            <button onClick={onBack} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 flex items-center transition-colors text-sm">
              &larr; Voltar para o Dashboard
            </button>
          )}
          <button onClick={handlePrint} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center transition-colors text-sm font-bold shadow-md">
              <DocumentDuplicateIcon className="w-5 h-5 mr-2" />
              Imprimir Relatório
          </button>
       </div>

      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Seu Resultado do Teste</h1>
        <h2 className="text-xl text-blue-600 font-semibold mt-1">{questionnaire.title}</h2>
        <p className="text-gray-500 mt-2">
          Finalizado em: {new Date(result.completedAt).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-gray-400 text-sm mt-1">Participante: {user.name}</p>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
        <h3 className="flex items-center text-2xl font-bold text-gray-800 mb-4">
          <SparklesIcon className="w-6 h-6 mr-2 text-yellow-500" />
          Análise Comportamental (IA)
        </h3>
        <p className="text-lg font-semibold text-gray-600 mb-4">{result.summary}</p>
        <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
          <p>{result.analysis}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Visualização dos Resultados</h3>
        <TestResultVisualizer result={result} questionnaire={questionnaire} />
      </div>
      
      <div className="text-center text-gray-400 text-xs mt-8 print-only">
          Relatório gerado pela plataforma PsicoTest Pro.
      </div>
    </div>
  );
};

export default UserResultPage;
