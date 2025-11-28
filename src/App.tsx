import React, { useState, useEffect } from 'react';
import { LoggedInUser, UserRole, TestResult, Client, Questionnaire } from '../types';
import LoginPage from '../components/LoginPage';
import AdminDashboard from '../components/AdminDashboard';
import ProfessionalDashboard from '../components/ProfessionalDashboard';
import UserDashboard from '../components/UserDashboard';
import UserTestPage from '../components/UserTestPage';
import UserResultPage from '../components/UserResultPage';
import Header from '../components/Header';
import { professionalUsers } from '../services/mockData';
import { allTests } from '../services/allTests';
import { EyeIcon } from '../components/icons/EyeIcon';
import { subscribeToAuth, logoutUser, saveTestResultToFirebase, getUserResultsFromFirebase, isFirebaseReady } from '../services/firebase';

// Force UI refresh
const TestSelectionPage: React.FC<{ onSelectTest: (test: Questionnaire) => void; onBack: () => void; }> = ({ onSelectTest, onBack }) => (
    <div className="max-w-3xl mx-auto">
         <button onClick={onBack} className="mb-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 flex items-center transition-colors text-sm">
            &larr; Voltar para o Dashboard
        </button>
        <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Biblioteca de Testes</h1>
            <p className="text-gray-600 mb-8">Selecione um dos testes abaixo para começar sua autoavaliação.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {allTests.map(test => (
                    <div key={test.id} className="border rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
                        <div>
                            <h2 className="text-xl font-bold text-blue-700 mb-2">{test.title}</h2>
                            {test.introduction && <p className="text-gray-600 text-sm mb-4">{test.introduction.substring(0, 150)}...</p>}
                        </div>
                        <button 
                            onClick={() => onSelectTest(test)}
                            className="w-full mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                        >
                            Iniciar Teste
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<LoggedInUser | null>(null);
  const [currentTest, setCurrentTest] = useState<Questionnaire | null>(null);
  const [userView, setUserView] = useState<'dashboard' | 'test_selection' | 'test_taking' | 'result'>('dashboard');
  const [simulationMode, setSimulationMode] = useState<boolean>(false);
  const [simulationResult, setSimulationResult] = useState<TestResult | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  // Listener de Autenticação do Firebase
  useEffect(() => {
      const unsubscribe = subscribeToAuth(async (user) => {
          if (user) {
              // Se o usuário existe no Firebase
              // Se for um paciente, tentamos carregar os resultados dele
              if (user.role === UserRole.USER) {
                  const results = await getUserResultsFromFirebase(user.id);
                  // Se houver resultados, anexamos o mais recente (mock behavior upgrade)
                  // Em um app real, user.testResult seria um array ou buscado sob demanda
                  if (results.length > 0) {
                      (user as Client).testResult = results[0]; 
                  }
              }
              setCurrentUser(user);
              if (user.role === UserRole.USER && (user as Client).testResult) {
                  setUserView('result');
              } else {
                  setUserView('dashboard');
              }
          } else {
              // Usuário não logado (ou logout)
              // Não limpamos imediatamente se estivermos em modo DEMO manual, 
              // mas aqui assumimos que o Auth listener é a fonte da verdade se ativado.
              // Se isFirebaseReady for false, esse listener nem roda direito (retorna null logo de cara ou nem roda).
              if(isFirebaseReady) {
                  setCurrentUser(null);
              }
          }
          setIsAuthLoading(false);
      });

      // Se firebase não estiver pronto, paramos o loading manual
      if (!isFirebaseReady) setIsAuthLoading(false);

      return () => unsubscribe();
  }, []);

  const handleLogin = (user: LoggedInUser) => {
    // Este handler é usado principalmente pelo Login Demo
    setCurrentUser(user);
    setCurrentTest(null);
    setSimulationMode(false);
    setSimulationResult(null);
    
    if (user.role === UserRole.USER && user.testResult) {
      setUserView('result');
    } else {
      setUserView('dashboard');
    }
  };

  const handleLogout = async () => {
    if (isFirebaseReady) {
        await logoutUser();
    }
    setCurrentUser(null);
    setCurrentTest(null);
    setUserView('dashboard');
    setSimulationMode(false);
    setSimulationResult(null);
  };

  const handleTestComplete = async (result: TestResult) => {
    if (currentUser && currentUser.role === UserRole.USER) {
        
        // Salvar no Firebase se disponível
        if (isFirebaseReady) {
            try {
                await saveTestResultToFirebase(result);
            } catch (e) {
                alert("Erro ao salvar na nuvem. Salvando localmente.");
            }
        }

        const updatedUser = { ...currentUser, testResult: result } as Client;
        setCurrentUser(updatedUser);
        
        // Update mock data for professional view to see the change (Legacy Demo Support)
        const professional = professionalUsers.find(p => p.id === updatedUser.professionalId);
        if (professional) {
            const clientIndex = professional.clients.findIndex(c => c.id === currentUser.id);
            if (clientIndex > -1) {
            professional.clients[clientIndex].testResult = result;
            }
        }
        setCurrentTest(null);
        setUserView('result');
    } else {
        // Simulation Mode (Admin/Professional)
        setSimulationResult(result);
    }
  };

  const handleSimulateTest = (test: Questionnaire) => {
      setCurrentTest(test);
      setSimulationMode(true);
      setSimulationResult(null);
  };

  const exitSimulation = () => {
      setSimulationMode(false);
      setCurrentTest(null);
      setSimulationResult(null);
  };

  const renderContent = () => {
    if (isAuthLoading) {
        return <div className="flex justify-center items-center h-screen text-gray-500">Carregando sistema...</div>;
    }

    if (!currentUser) {
      return <LoginPage onLogin={handleLogin} />;
    }

    // Handle Simulation Mode for Admins/Professionals
    if (simulationMode && (currentUser.role === UserRole.ADMIN || currentUser.role === UserRole.PROFESSIONAL)) {
        return (
            <div className="bg-gray-50 min-h-screen pb-12">
                {/* Simulation Banner */}
                <div className="bg-yellow-400 text-yellow-900 px-4 py-3 shadow-md sticky top-0 z-30 flex justify-between items-center">
                    <div className="flex items-center font-bold">
                        <EyeIcon className="w-5 h-5 mr-2" />
                        MODO SIMULAÇÃO: Você está vendo como um Paciente
                    </div>
                    <button 
                        onClick={exitSimulation} 
                        className="px-4 py-1 bg-white text-yellow-900 rounded font-semibold hover:bg-yellow-50 border border-yellow-600 text-sm"
                    >
                        Sair da Simulação
                    </button>
                </div>

                <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                    {simulationResult && currentTest ? (
                        <UserResultPage 
                            result={simulationResult} 
                            user={currentUser} 
                            questionnaire={currentTest} 
                        />
                    ) : currentTest ? (
                        <UserTestPage
                            user={currentUser}
                            onTestComplete={handleTestComplete}
                            questionnaire={currentTest}
                            onBack={exitSimulation}
                        />
                    ) : (
                        <div>Erro no modo simulação.</div>
                    )}
                </div>
            </div>
        );
    }

    switch (currentUser.role) {
      case UserRole.ADMIN:
        return <AdminDashboard user={currentUser} onSimulateTest={handleSimulateTest} />;
      case UserRole.PROFESSIONAL:
        return <ProfessionalDashboard user={currentUser} onSimulateTest={handleSimulateTest} />;
      case UserRole.USER:
        switch (userView) {
            case 'dashboard':
                return (
                    <UserDashboard
                        user={currentUser}
                        onSelectTest={() => setUserView('test_selection')}
                        onViewResult={() => {
                            if (currentUser.testResult) {
                                setUserView('result');
                            }
                        }}
                    />
                );
            case 'result': {
                const result = currentUser.testResult;
                if (!result) {
                    setUserView('dashboard');
                    return null;
                }
                const questionnaire = allTests.find(t => t.id === result.questionnaireId);
                if (!questionnaire) return <div>Erro: Questionário não encontrado.</div>;
                return (
                    <UserResultPage
                        result={result}
                        user={currentUser}
                        questionnaire={questionnaire}
                        onBack={() => setUserView('dashboard')}
                    />
                );
            }
            case 'test_selection':
                return (
                    <TestSelectionPage
                        onSelectTest={(test) => {
                        setCurrentTest(test);
                        setUserView('test_taking');
                        }}
                        onBack={() => setUserView('dashboard')}
                    />
                );
            case 'test_taking':
                if (currentTest) {
                    return (
                        <UserTestPage
                            user={currentUser}
                            onTestComplete={handleTestComplete}
                            questionnaire={currentTest}
                            onBack={() => setUserView('test_selection')}
                        />
                    );
                }
                // Fallback if currentTest is somehow null
                setUserView('dashboard');
                return null;
            default:
                setUserView('dashboard');
                return null;
        }
      default:
        return <LoginPage onLogin={handleLogin} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {currentUser && !simulationMode && <Header user={currentUser} onLogout={handleLogout} />}
      <main className={currentUser && !simulationMode ? "container mx-auto p-4 sm:p-6 lg:p-8" : ""}>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;