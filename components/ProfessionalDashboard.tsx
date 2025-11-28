
import React, { useState, useEffect } from 'react';
import { Professional, Client, Questionnaire } from '../types';
import ProfessionalResultView from './ProfessionalResultView';
import { allTests } from '../services/allTests';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { XCircleIcon } from './icons/XCircleIcon';
import { NewspaperIcon } from './icons/NewspaperIcon';
import { ShareIcon } from './icons/ShareIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { ClockIcon } from './icons/ClockIcon';
import { CalendarIcon } from './icons/CalendarIcon';
import { ChatBubbleLeftEllipsisIcon } from './icons/ChatBubbleLeftEllipsisIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { InformationCircleIcon } from './icons/InformationCircleIcon';
import ShareModal from './ShareModal';
import { UserCircleIcon } from './icons/UserCircleIcon';
import { PencilIcon } from './icons/PencilIcon';
import { EyeIcon } from './icons/EyeIcon';
import { updateTestResult } from '../services/firebase';

interface ProfessionalDashboardProps {
  user: Professional;
  onSimulateTest: (test: Questionnaire) => void;
}

type DashboardTab = 'me' | 'clients' | 'tests' | 'news' | 'personalize';

const ProfessionalDashboard: React.FC<ProfessionalDashboardProps> = ({ user, onSimulateTest }) => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [activeTab, setActiveTab] = useState<DashboardTab>('me');
  const [shareModalInfo, setShareModalInfo] = useState<{ open: boolean; link: string; title: string; description: string }>({
    open: false,
    link: '',
    title: '',
    description: '',
  });

  // Notification State
  const [hasUnreadNews, setHasUnreadNews] = useState(true);

  // State for editable profile
  const [currentProfessional, setCurrentProfessional] = useState<Professional>(user);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
      name: currentProfessional.name,
      profession: currentProfessional.profession || ''
  });

  const handleProfileDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileSave = () => {
      setCurrentProfessional(prev => ({ ...prev, name: profileData.name, profession: profileData.profession }));
      setIsEditingProfile(false);
      // In a real app, you would also call an API to save this data.
  };

  const handleShareInvite = () => {
    setShareModalInfo({
      open: true,
      link: `https://psicotestpro.com/invite?prof=${user.id}`,
      title: 'Convidar Paciente',
      description: 'Envie este link para um novo paciente se cadastrar. O perfil dele será automaticamente vinculado a você.',
    });
  };

  const handleShareTestLink = (testId: string, testTitle: string) => {
    setShareModalInfo({
        open: true,
        link: `https://psicotestpro.com/test/${testId}?prof=${user.id}`,
        title: `Convidar para: ${testTitle}`,
        description: 'Envie este link diretamente para o paciente. Ele poderá realizar o teste e o resultado será associado a você.',
    });
  };
  
  const handleShareResultLink = (resultId: string, clientName: string) => {
      setShareModalInfo({
          open: true,
          link: `https://psicotestpro.com/result/${resultId}?prof=${user.id}`,
          title: `Compartilhar Resultado de ${clientName}`,
          description: 'Envie este link seguro para que o paciente possa visualizar seu resultado. Você pode adicionar sua análise personalizada antes de compartilhar.',
      });
  };

  const handleSavePersonalization = async (resultId: string, newAnalysis: string, newSummary: string) => {
      try {
          await updateTestResult(resultId, newAnalysis, newSummary);
          
          // Atualizar estado local para refletir a mudança imediatamente na UI
          if (selectedClient && selectedClient.testResult) {
             const updatedResult = { ...selectedClient.testResult, analysis: newAnalysis, summary: newSummary };
             setSelectedClient({ ...selectedClient, testResult: updatedResult });
          }
          alert('Devolutiva personalizada salva na nuvem com sucesso!');
      } catch (error) {
          console.error("Erro ao salvar:", error);
          alert('Erro ao salvar. Verifique sua conexão.');
      }
  };

  const handleTabChange = (tab: DashboardTab) => {
      setActiveTab(tab);
      if (tab === 'news') {
          setHasUnreadNews(false);
      }
  };

  const formatDuration = (seconds?: number) => {
    if (seconds === undefined) return 'N/A';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString('pt-BR', { 
      day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  const getTestTitle = (questionnaireId: string) => {
    return allTests.find(t => t.id === questionnaireId)?.title || 'Teste Desconhecido';
  }

  if (selectedClient && selectedClient.testResult) {
    const questionnaire = allTests.find(t => t.id === selectedClient.testResult?.questionnaireId);
    if (!questionnaire) return <div>Erro: Questionário do cliente não encontrado.</div>;
    
    return (
      <ProfessionalResultView
        client={selectedClient}
        result={selectedClient.testResult}
        questionnaire={questionnaire}
        onBack={() => setSelectedClient(null)}
        onSavePersonalization={(clientId, analysis, summary) => handleSavePersonalization(selectedClient.testResult!.id, analysis, summary)}
      />
    );
  }

  const clientsToPersonalize = user.clients.filter(c => c.testResult);
  const newsItems = [
    { id: 1, title: 'Nova funcionalidade: Personalização LIW', date: 'Hoje', summary: 'Agora você pode personalizar as devolutivas com a sua metodologia LIW diretamente no painel.' },
    { id: 2, title: 'Workshop: Interpretando o Teste de Ansiedade Integrado', date: 'Ontem', summary: 'Aprenda a extrair o máximo do novo teste com especialistas.' },
    { id: 3, title: 'Atualização na IA Generativa', date: '2 dias atrás', summary: 'Nossa IA agora gera feedbacks ainda mais empáticos e detalhados.' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4 md:mb-0">
          <UserGroupIcon className="w-8 h-8 mr-3 text-blue-600" />
          <div>
              <h1 className="text-2xl font-bold text-gray-800">Dashboard do Profissional</h1>
              <p className="text-gray-600">Bem-vindo(a), <span className="font-semibold">{currentProfessional.name}</span>.</p>
          </div>
        </div>
        <div className="flex space-x-3">
            <button onClick={handleShareInvite} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                <ShareIcon className="w-5 h-5 mr-2" />
                Convidar Paciente
            </button>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-6 sm:space-x-8 overflow-x-auto">
          <button
            onClick={() => handleTabChange('me')}
            className={`py-4 px-1 flex items-center border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
              activeTab === 'me'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <UserCircleIcon className="w-5 h-5 mr-2" /> Eu
          </button>
          <button
            onClick={() => handleTabChange('clients')}
            className={`py-4 px-1 flex items-center border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
              activeTab === 'clients'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <UserGroupIcon className="w-5 h-5 mr-2" /> Meus Pacientes
          </button>
          <button
            onClick={() => handleTabChange('tests')}
            className={`py-4 px-1 flex items-center border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
              activeTab === 'tests'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <BookOpenIcon className="w-5 h-5 mr-2" /> Biblioteca de Testes
          </button>
          <button
            onClick={() => handleTabChange('news')}
            className={`py-4 px-1 flex items-center border-b-2 font-medium text-sm transition-colors whitespace-nowrap relative ${
              activeTab === 'news'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <NewspaperIcon className="w-5 h-5 mr-2" /> 
            LIW News
            {hasUnreadNews && (
                <span className="absolute top-0 right-0 md:top-2 md:right-[-6px] block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-red-600 animate-pulse" />
            )}
          </button>
           <button
            onClick={() => handleTabChange('personalize')}
            className={`py-4 px-1 flex items-center border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
              activeTab === 'personalize'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <SparklesIcon className="w-5 h-5 mr-2" /> Personalize com o LIW
          </button>
        </nav>
      </div>

      {activeTab === 'me' && (
        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
            <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Meu Perfil</h2>
                {!isEditingProfile && (
                    <button onClick={() => setIsEditingProfile(true)} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                        <PencilIcon className="w-4 h-4 mr-1" />
                        Editar Perfil
                    </button>
                )}
            </div>

            {!isEditingProfile ? (
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-500">Nome Completo</label>
                        <p className="text-lg text-gray-800">{currentProfessional.name}</p>
                    </div>
                     <div>
                        <label className="text-sm font-medium text-gray-500">E-mail</label>
                        <p className="text-lg text-gray-800">{currentProfessional.email}</p>
                    </div>
                     <div>
                        <label className="text-sm font-medium text-gray-500">Especialidade Profissional</label>
                        <p className="text-lg text-gray-800">{currentProfessional.profession || 'Não especificada'}</p>
                    </div>
                     <div className="pt-4 border-t mt-4">
                        <h3 className="text-md font-semibold text-gray-700">Estatísticas</h3>
                        <p className="text-gray-600">Total de Pacientes: {currentProfessional.clients.length}</p>
                        <p className="text-gray-600">Testes Concluídos pelos Pacientes: {currentProfessional.clients.filter(c => c.testResult).length}</p>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={profileData.name}
                            onChange={handleProfileDataChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="profession" className="block text-sm font-medium text-gray-700">Especialidade Profissional</label>
                        <input
                            type="text"
                            id="profession"
                            name="profession"
                            value={profileData.profession}
                            onChange={handleProfileDataChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Ex: Psicólogo Clínico, Coach de Carreira"
                        />
                    </div>
                    <div className="flex justify-end space-x-3 pt-4">
                        <button onClick={() => setIsEditingProfile(false)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                            Cancelar
                        </button>
                        <button onClick={handleProfileSave} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Salvar Alterações
                        </button>
                    </div>
                </div>
            )}
        </div>
      )}
      
      {activeTab === 'clients' && (
        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paciente</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center"><CalendarIcon className="w-4 h-4 mr-1"/> Realizado em</div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center"><ClockIcon className="w-4 h-4 mr-1"/> Duração</div>
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center justify-center"><ChatBubbleLeftEllipsisIcon className="w-4 h-4 mr-1"/> Feedback</div>
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {user.clients.map(client => (
                <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{client.name}</div>
                    <div className="text-sm text-gray-500">{client.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {client.testResult ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircleIcon className="w-4 h-4 mr-1" />
                        Concluído
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <XCircleIcon className="w-4 h-4 mr-1" />
                        Pendente
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {client.testResult ? formatDate(client.testResult.completedAt) : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {client.testResult ? formatDuration(client.testResult.durationSeconds) : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                    {client.testResult?.clientFeedback ? (
                       <div className="group relative inline-block">
                         <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-blue-500 mx-auto cursor-pointer" />
                         <div className="hidden group-hover:block absolute z-10 w-64 p-2 mt-1 text-sm leading-tight text-white bg-gray-800 rounded-lg -left-28 shadow-lg">
                           {client.testResult.clientFeedback}
                         </div>
                       </div>
                    ) : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2 flex justify-end">
                    {client.testResult ? (
                      <>
                      <button
                        onClick={() => setSelectedClient(client)}
                        className="text-blue-600 hover:text-blue-900 inline-flex items-center transition-colors"
                        title="Ver e Personalizar Resultado"
                      >
                        <NewspaperIcon className="w-5 h-5" />
                        <span className="ml-1 hidden sm:inline">Ver</span>
                      </button>
                       <button
                        onClick={() => handleShareResultLink(client.testResult!.id, client.name)}
                        className="text-green-600 hover:text-green-900 inline-flex items-center ml-2 transition-colors"
                        title="Compartilhar Resultado"
                      >
                        <ShareIcon className="w-5 h-5" />
                      </button>
                      </>
                    ) : (
                      <button
                        onClick={handleShareInvite}
                        className="text-gray-400 hover:text-gray-600 inline-flex items-center transition-colors"
                        title="Reenviar Convite"
                      >
                        <ShareIcon className="w-5 h-5 mr-1" />
                        Convidar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {activeTab === 'tests' && (
        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 mr-2">Testes Disponíveis na Plataforma</h2>
            <div className="group relative">
                <InformationCircleIcon className="w-5 h-5 text-gray-400 cursor-pointer"/>
                <div className="hidden group-hover:block absolute z-10 w-72 p-2 mt-1 text-sm text-white bg-gray-800 rounded-lg shadow-lg -left-1/2 transform">
                    A edição dos testes é exclusiva para administradores. Como profissional, você pode personalizar a devolutiva para cada paciente após a conclusão do teste na aba "Personalize com o LIW".
                </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTests.map(test => (
              <div key={test.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                    <div className="flex items-center mb-3">
                        <BookOpenIcon className="w-6 h-6 text-blue-600 mr-2" />
                        <h3 className="font-semibold text-gray-800 truncate" title={test.title}>{test.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{test.description}</p>
                </div>
                <div className="space-y-2">
                    <button
                        onClick={() => onSimulateTest(test)}
                        className="w-full flex justify-center items-center px-3 py-2 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition"
                    >
                        <EyeIcon className="w-4 h-4 mr-2" />
                        Visualizar/Testar
                    </button>
                    <button
                        onClick={() => handleShareTestLink(test.id, test.title)}
                        className="w-full flex justify-center items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                        <ShareIcon className="w-4 h-4 mr-2" />
                        Convidar para este Teste
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'news' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">LIW News</h2>
            </div>
            <div className="space-y-4">
              {newsItems.map(item => (
                <div key={item.id} className="border-b pb-4 last:border-0 last:pb-0">
                  <p className="text-xs text-gray-500 mb-1">{item.date}</p>
                  <h3 className="font-semibold text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-snug">{item.summary}</p>
                </div>
              ))}
            </div>
             <button className="w-full mt-6 py-2 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
              Ver todas as novidades
            </button>
          </div>
      )}

      {activeTab === 'personalize' && (
          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 overflow-x-auto">
             <h2 className="text-xl font-bold text-gray-800 mb-4">Devolutivas para Personalizar</h2>
              {clientsToPersonalize.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paciente</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teste Realizado</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ação</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {clientsToPersonalize.map(client => (
                            <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{client.name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {getTestTitle(client.testResult!.questionnaireId)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {formatDate(client.testResult!.completedAt)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => setSelectedClient(client)}
                                        className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                                    >
                                        <SparklesIcon className="w-5 h-5 mr-2" />
                                        Personalizar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
              ) : (
                <p className="text-center text-gray-500 py-8">
                    Nenhum paciente concluiu um teste ainda. Os resultados aparecerão aqui quando estiverem prontos para personalização.
                </p>
              )}
          </div>
      )}

      {shareModalInfo.open && (
        <ShareModal 
            link={shareModalInfo.link}
            title={shareModalInfo.title}
            description={shareModalInfo.description}
            onClose={() => setShareModalInfo({ ...shareModalInfo, open: false })}
        />
      )}
    </div>
  );
};

export default ProfessionalDashboard;
