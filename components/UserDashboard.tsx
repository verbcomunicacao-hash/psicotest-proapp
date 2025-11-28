import React from 'react';
import { Client } from '../types';
import { allTests } from '../services/allTests';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { DocumentTextIcon } from './icons/DocumentTextIcon';
import { UserCircleIcon } from './icons/UserCircleIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';
import { ClockIcon } from './icons/ClockIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

interface UserDashboardProps {
  user: Client;
  onViewResult: () => void;
  onSelectTest: () => void;
}

const getTestTitle = (questionnaireId: string) => {
    return allTests.find(t => t.id === questionnaireId)?.title || 'Teste Desconhecido';
}

const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('pt-BR', { 
      day: '2-digit', month: 'long', year: 'numeric'
    });
};

const UserDashboard: React.FC<UserDashboardProps> = ({ user, onViewResult, onSelectTest }) => {
  const { name, email, testResult, demographics } = user;
  
  const translationMap: Record<string, string> = {
    age: 'Idade',
    gender: 'Gênero',
    education: 'Escolaridade',
  };

  const translateKey = (key: string) => {
    const translated = translationMap[key];
    if (translated) {
      return translated;
    }
    // Fallback for untranslated keys
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  const totalTests = allTests.length;
  const completedTests = testResult ? 1 : 0;
  const progressPercentage = totalTests > 0 ? (completedTests / totalTests) * 100 : 0;


  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
        <div className="flex items-center">
            <UserCircleIcon className="w-12 h-12 text-blue-600 mr-4"/>
            <div>
                <h1 className="text-3xl font-bold text-gray-800">Dashboard do Paciente</h1>
                <p className="text-gray-600">Bem-vindo(a), <span className="font-semibold">{name}</span>.</p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {testResult ? (
            <div className="bg-white rounded-lg shadow-xl p-6">
              <div className="flex items-center mb-4">
                <DocumentTextIcon className="w-8 h-8 text-green-500 mr-3"/>
                <h2 className="text-2xl font-bold text-gray-800">Último Resultado</h2>
              </div>
              <div className="border-t border-gray-200 pt-4 space-y-2 text-gray-700">
                <p><strong>Teste:</strong> {getTestTitle(testResult.questionnaireId)}</p>
                <p className="italic">"{testResult.summary}"</p>
                <p className="text-sm text-gray-500"><strong>Data de Conclusão:</strong> {formatDate(testResult.completedAt)}</p>
                <div className="pt-4">
                  <button 
                    onClick={onViewResult}
                    className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-transform transform hover:scale-105"
                  >
                    Ver Resultado Completo
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-xl p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Nenhum teste realizado</h2>
                <p className="text-gray-600 mb-4">Você ainda não completou nenhum teste. Comece agora para descobrir mais sobre seu perfil.</p>
            </div>
          )}
          
          <div className="bg-white rounded-lg shadow-xl p-6">
            <div className="flex items-center mb-4">
                <BookOpenIcon className="w-8 h-8 text-blue-500 mr-3"/>
                <h2 className="text-2xl font-bold text-gray-800">Iniciar um Novo Teste</h2>
            </div>
            <p className="text-gray-600 mb-4">Explore nossa biblioteca de testes para autoconhecimento e desenvolvimento pessoal e profissional.</p>
            <button 
                onClick={onSelectTest}
                className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
                Ver Testes Disponíveis
            </button>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-xl p-6">
                <div className="flex items-center mb-3">
                    <ChartBarIcon className="w-6 h-6 text-indigo-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">Meu Progresso</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                    Você completou {completedTests} de {totalTests} testes disponíveis.
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-6">
                <div className="flex items-center mb-3">
                    <ClockIcon className="w-6 h-6 text-indigo-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">Atividade Recente</h3>
                </div>
                 <ul className="space-y-3 border-t pt-3 mt-3">
                    {testResult ? (
                    <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                        <p className="text-sm font-semibold text-gray-800">
                            Teste '{getTestTitle(testResult.questionnaireId)}' concluído
                        </p>
                        <p className="text-xs text-gray-500">{formatDate(testResult.completedAt)}</p>
                        </div>
                    </li>
                    ) : (
                    <li className="text-sm text-gray-500">Nenhuma atividade recente.</li>
                    )}
                </ul>
            </div>

           <div className="bg-white rounded-lg shadow-xl p-6">
               <div className="flex items-center mb-3">
                    <UserCircleIcon className="w-6 h-6 text-indigo-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">Meu Perfil</h3>
                </div>
              <div className="space-y-2 text-sm text-gray-700 border-t pt-3 mt-3">
                 <p><strong>Nome:</strong> {name}</p>
                 <p><strong>Email:</strong> {email}</p>
                 {demographics && Object.entries(demographics).map(([key, value]) => (
                    <p key={key}><strong>{translateKey(key)}:</strong> {value as string}</p>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;