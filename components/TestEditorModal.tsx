import React, { useState, useEffect } from 'react';
import { Questionnaire } from '../types';

interface TestEditorModalProps {
  test: Questionnaire;
  onClose: () => void;
  onSave: (updatedTest: Questionnaire) => void;
}

const TestEditorModal: React.FC<TestEditorModalProps> = ({ test, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: test.title,
    description: test.description,
    introduction: test.introduction || '',
  });

  useEffect(() => {
    // This effect ensures the form resets if a different test is selected
    // while the modal is technically still mounted (e.g., in some complex parent state logic)
    setFormData({
      title: test.title,
      description: test.description,
      introduction: test.introduction || '',
    });
  }, [test]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const updatedTest: Questionnaire = {
      ...test,
      title: formData.title,
      description: formData.description,
      introduction: formData.introduction,
    };
    onSave(updatedTest);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <header className="p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">Editar Teste</h2>
        </header>
        <main className="p-6 overflow-y-auto space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descrição
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="introduction" className="block text-sm font-medium text-gray-700">
              Introdução (Opcional)
            </label>
            <textarea
              id="introduction"
              name="introduction"
              rows={6}
              value={formData.introduction}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="bg-gray-50 p-4 rounded-md text-center">
             <p className="text-sm text-gray-600">A edição de perguntas e opções não está disponível nesta versão.</p>
          </div>
        </main>
        <footer className="p-6 border-t flex justify-end space-x-3 bg-gray-50 rounded-b-lg">
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            type="button"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Salvar Alterações
          </button>
        </footer>
      </div>
    </div>
  );
};

export default TestEditorModal;
