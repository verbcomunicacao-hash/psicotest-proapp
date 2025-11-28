
import React, { useState } from 'react';
import { Admin, Questionnaire } from '../types';
import { professionalUsers } from '../services/mockData';
import { allTests } from '../services/allTests';
import PrintableBlankTest from './PrintableBlankTest';
import { GlobeAltIcon } from './icons/GlobeAltIcon';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { PencilIcon } from './icons/PencilIcon';
import { TrashIcon } from './icons/TrashIcon';
import { PlusCircleIcon } from './icons/PlusCircleIcon';
import { EyeIcon } from './icons/EyeIcon'; // Assuming we might need an icon, utilizing existing or new
import TestEditorModal from './TestEditorModal';

interface AdminDashboardProps {
  user: Admin;
  onSimulateTest: (test: Questionnaire) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, onSimulateTest }) => {
    const [testsData, setTestsData] = useState<Questionnaire[]>(allTests);
    const [testToPrint, setTestToPrint] = useState<Questionnaire | null>(null);
    const [editingTest, setEditingTest] = useState<Questionnaire | null>(null);

    const totalProfessionals = professionalUsers.length;
    const totalClients = professionalUsers.reduce((sum, prof) => sum + prof.clients.length, 0);
    const totalTestsTaken = professionalUsers.flatMap(p => p.clients).filter(c => c.testResult).length;
    const totalTestsAvailable = testsData.length;

    const handlePrint = (test: Questionnaire) => {
        setTestToPrint(test);
        setTimeout(() => {
            window.print();
            setTestToPrint(null);
        }, 500); // Allow component to render before printing
    };
    
    const handleCreate = () => {
        alert('Funcionalidade "Criar Novo Teste" a ser implementada. Abriria um formulário para adicionar um novo questionário.');
    };

    const handleEdit = (test: Questionnaire) => {
        setEditingTest(test);
    };

    const handleSaveTest = (updatedTest: Questionnaire) => {
        setTestsData(prevTests => 
            prevTests.map(t => t.id === updatedTest.id ? updatedTest : t)
        );
        setEditingTest(null);
        alert('Teste atualizado com sucesso!');
    };

    const handleDelete = (testId: string) => {
        if (window.confirm(`Tem certeza que deseja excluir o teste "${testsData.find(t=>t.id === testId)?.title}"? Esta ação não pode ser desfeita.`)) {
            setTestsData(prevTests => prevTests.filter(t => t.id !== testId));
            alert(`Teste excluído com sucesso.`);
        }
    };

  return (
    <>
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard do Administrador</h1>
          <p className="text-gray-600">Bem-vindo(a), <span className="font-semibold">{user.name}</span>. Visão geral da plataforma.</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <UserGroupIcon className="w-10 h-10 text-green-500 mr-4"/>
              <div>
                  <p className="text-sm text-gray-500">Profissionais</p>
                  <p className="text-3xl font-bold text-gray-800">{totalProfessionals}</p>
              </div>
          </div>
           <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <GlobeAltIcon className="w-10 h-10 text-blue-500 mr-4"/>
              <div>
                  <p className="text-sm text-gray-500">Utilizadores</p>
                  <p className="text-3xl font-bold text-gray-800">{totalClients}</p>
              </div>
          </div>
           <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <ChartBarIcon className="w-10 h-10 text-yellow-500 mr-4"/>
              <div>
                  <p className="text-sm text-gray-500">Testes Realizados</p>
                  <p className="text-3xl font-bold text-gray-800">{totalTestsTaken}</p>
              </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <BookOpenIcon className="w-10 h-10 text-indigo-500 mr-4"/>
              <div>
                  <p className="text-sm text-gray-500">Testes Disponíveis</p>
                  <p className="text-3xl font-bold text-gray-800">{totalTestsAvailable}</p>
              </div>
          </div>
        </div>

        {/* Test Manager */}
        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Gerenciador de Testes</h2>
            <button onClick={handleCreate} className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                <PlusCircleIcon className="w-5 h-5 mr-2" />
                Criar Novo Teste
            </button>
          </div>
          <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                      <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome do Teste</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nº de Perguntas</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                      </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                      {testsData.map(test => (
                      <tr key={test.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{test.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500">{test.questions.length}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                              <button 
                                onClick={() => onSimulateTest(test)}
                                className="px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded-md hover:bg-purple-200"
                                title="Simular como Usuário"
                              >
                                Simular
                              </button>
                              <button onClick={() => handlePrint(test)} className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200" title="Imprimir em Branco">Imprimir</button>
                              <button onClick={() => handleEdit(test)} className="p-2 text-gray-500 hover:text-yellow-600" title="Editar Teste">
                                  <PencilIcon className="w-5 h-5"/>
                              </button>
                               <button onClick={() => handleDelete(test.id)} className="p-2 text-gray-500 hover:text-red-600" title="Excluir Teste">
                                  <TrashIcon className="w-5 h-5"/>
                              </button>
                          </td>
                      </tr>
                      ))}
                  </tbody>
              </table>
          </div>
        </div>
        {testToPrint && <div className="hidden print-block"><PrintableBlankTest questionnaire={testToPrint} /></div>}
      </div>
      {editingTest && (
        <TestEditorModal 
          test={editingTest}
          onClose={() => setEditingTest(null)}
          onSave={handleSaveTest}
        />
      )}
    </>
  );
};

export default AdminDashboard;
