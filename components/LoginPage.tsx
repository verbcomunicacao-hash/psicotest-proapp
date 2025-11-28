
import React, { useState, useEffect } from 'react';
import { adminUser, professionalUsers } from '../services/mockData';
import { LoggedInUser, UserRole } from '../types';
import { SparklesIcon } from './icons/SparklesIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { GlobeAltIcon } from './icons/GlobeAltIcon';
import { loginUser, registerUser, isFirebaseReady } from '../services/firebase';

interface LoginPageProps {
  onLogin: (user: LoggedInUser) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [view, setView] = useState<'login' | 'register' | 'demo'>('login');
  
  // Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Client 1 (Ana) has results. Client 2 (Bruno) does not.
  const clientWithResult = professionalUsers[0]?.clients[0];
  const clientWithoutResult = professionalUsers[0]?.clients[1];

  useEffect(() => {
      if (isLoginModalOpen) {
          // Se firebase estiver pronto, vai para login real, senão demo
          setView(isFirebaseReady ? 'login' : 'demo');
          setError('');
      }
  }, [isLoginModalOpen]);

  const handleOpenLogin = () => setIsLoginModalOpen(true);
  const handleCloseLogin = () => setIsLoginModalOpen(false);

  const getFriendlyErrorMessage = (error: any) => {
      const code = error.code || '';
      const message = error.message || '';

      if (code === 'auth/email-already-in-use') return 'Este e-mail já possui uma conta. Tente fazer login.';
      if (code === 'auth/invalid-email') return 'Por favor, digite um e-mail válido.';
      if (code === 'auth/weak-password') return 'A senha precisa ter pelo menos 6 caracteres.';
      if (code === 'auth/user-not-found' || code === 'auth/wrong-password' || code === 'auth/invalid-credential') return 'E-mail ou senha incorretos. Verifique e tente novamente.';
      if (code === 'auth/network-request-failed') return 'Sem conexão com a internet. Verifique sua rede.';
      // Mensagem específica para o dono do site (você), caso esqueça de ativar no painel
      if (code === 'auth/configuration-not-found' || code === 'auth/operation-not-allowed') return 'Sistema em manutenção (Erro de Configuração no Servidor). Contate o suporte.';
      
      return 'Ocorreu um erro inesperado. Tente novamente.';
  };

  const handleRealLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setError('');
      try {
          await loginUser(email, password);
          handleCloseLogin();
      } catch (err: any) {
          console.error("Login Error:", err);
          setError(getFriendlyErrorMessage(err));
      } finally {
          setIsLoading(false);
      }
  };

  const handleRegister = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setError('');

      if (password.length < 6) {
          setError('Sua senha deve ter no mínimo 6 caracteres.');
          setIsLoading(false);
          return;
      }

      try {
          await registerUser(email, password, name, UserRole.USER);
          handleCloseLogin();
      } catch (err: any) {
          console.error("Register Error:", err);
          setError(getFriendlyErrorMessage(err));
      } finally {
          setIsLoading(false);
      }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md fixed w-full z-20 top-0 left-0 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.reload()}>
              <span className="text-2xl font-bold text-gray-800">
                Psico<span className="text-blue-600">Test</span> Pro
              </span>
            </div>
            <div>
              <button
                onClick={handleOpenLogin}
                className="text-gray-600 hover:text-blue-600 font-medium px-4 py-2 transition-colors"
              >
                Entrar
              </button>
              <button
                onClick={handleOpenLogin}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 ml-3 transition-all shadow-md hover:shadow-lg"
              >
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            A Evolução da Avaliação <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Psicológica e Comportamental
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 mb-10">
            Aplique testes validados, obtenha análises profundas com IA Generativa e gerencie seus pacientes em uma única plataforma intuitiva.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleOpenLogin}
              className="px-8 py-4 text-lg font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl"
            >
              Acessar Plataforma
            </button>
          </div>
          
          <div className="mt-12 flex justify-center space-x-8 text-gray-400 animate-fade-in-up">
             <div className="flex items-center"><GlobeAltIcon className="w-5 h-5 mr-2"/> Acessível de qualquer lugar</div>
             <div className="flex items-center"><CheckCircleIcon className="w-5 h-5 mr-2"/> Resultados em tempo real</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Diferenciais</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tudo o que você precisa para escalar seus atendimentos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <SparklesIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">IA Generativa Integrada</h3>
              <p className="text-gray-600">
                Nossa IA analisa os resultados quantitativos e gera feedbacks descritivos, empáticos e detalhados em segundos.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <ChartBarIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visualização de Dados</h3>
              <p className="text-gray-600">
                Gráficos intuitivos e dashboards completos para visualizar o progresso do paciente e identificar padrões.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <UserGroupIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gestão de Pacientes</h3>
              <p className="text-gray-600">
                Centralize prontuários, envie convites de testes por link e receba notificações automáticas de conclusão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold">
              Psico<span className="text-blue-500">Test</span> Pro
            </span>
            <p className="text-gray-400 text-sm mt-1">© 2024 Todos os direitos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Termos</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Suporte</a>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity" onClick={handleCloseLogin}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in" onClick={e => e.stopPropagation()}>
            
            {/* Header do Modal */}
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">
                    {view === 'login' ? 'Bem-vindo de volta' : view === 'register' ? 'Criar nova conta' : 'Modo Demonstração'}
                </h2>
                <button onClick={handleCloseLogin} className="text-gray-400 hover:text-gray-600 transition-colors">
                    ✕
                </button>
            </div>

            <div className="p-8">
                
                {/* Mensagem de Erro */}
                {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 flex items-start">
                        <span className="mr-2">⚠️</span>
                        {error}
                    </div>
                )}

                {/* Formulário de Login */}
                {view === 'login' && (
                    <form onSubmit={handleRealLogin} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                            <input 
                                type="email" 
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <label className="block text-sm font-medium text-gray-700">Senha</label>
                                <a href="#" className="text-xs text-blue-600 hover:underline">Esqueceu a senha?</a>
                            </div>
                            <input 
                                type="password" 
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                                placeholder="Sua senha segura"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all transform active:scale-95 disabled:bg-blue-400"
                        >
                            {isLoading ? 'Entrando...' : 'Entrar na Plataforma'}
                        </button>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Ainda não tem conta?{' '}
                                <button 
                                    type="button"
                                    onClick={() => setView('register')}
                                    className="text-blue-600 font-semibold hover:underline"
                                >
                                    Cadastre-se grátis
                                </button>
                            </p>
                        </div>
                        <div className="mt-2 text-center">
                             <button type="button" onClick={() => setView('demo')} className="text-xs text-gray-400 hover:text-gray-600 underline">
                                Acessar como Admin (Demo)
                            </button>
                        </div>
                    </form>
                )}

                {/* Formulário de Cadastro */}
                {view === 'register' && (
                    <form onSubmit={handleRegister} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                            <input 
                                type="text" 
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                                placeholder="Como gostaria de ser chamado"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                            <input 
                                type="email" 
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Criar Senha</label>
                            <input 
                                type="password" 
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                                placeholder="Mínimo 6 caracteres"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                minLength={6}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all transform active:scale-95 disabled:bg-green-400"
                        >
                            {isLoading ? 'Criando conta...' : 'Criar Minha Conta'}
                        </button>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Já tem uma conta?{' '}
                                <button 
                                    type="button"
                                    onClick={() => setView('login')}
                                    className="text-blue-600 font-semibold hover:underline"
                                >
                                    Fazer Login
                                </button>
                            </p>
                        </div>
                    </form>
                )}

                {/* Modo Demo (Escondido/Secundário) */}
                {view === 'demo' && (
                    <div className="space-y-3">
                        <p className="text-sm text-gray-500 mb-4 text-center">
                            Área de demonstração para testes administrativos.
                        </p>
                        <button
                            onClick={() => onLogin(adminUser)}
                            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gray-800 hover:bg-gray-900 transition-colors shadow-sm"
                        >
                            Entrar como Administrador
                        </button>
                        <button
                            onClick={() => onLogin(professionalUsers[0])}
                            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                        >
                            Entrar como Profissional
                        </button>
                        
                        <div className="border-t border-gray-200 my-4"></div>

                        <button
                            onClick={() => onLogin(clientWithResult)}
                            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm"
                        >
                            Paciente (Com Resultado - Ana)
                        </button>
                        <button
                            onClick={() => onLogin(clientWithoutResult!)}
                            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors shadow-sm"
                        >
                            Novo Paciente (Sem Teste - Bruno)
                        </button>

                        <div className="mt-4 text-center">
                             <button type="button" onClick={() => setView('login')} className="text-sm text-blue-600 hover:underline">
                                &larr; Voltar para Login Real
                            </button>
                        </div>
                    </div>
                )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
