
import React, { useState } from 'react';
import { Client, Professional, Questionnaire, TestResult } from '../types';
import UserResultPage from './UserResultPage';
import { SparklesIcon } from './icons/SparklesIcon';
import { PencilSquareIcon } from './icons/PencilSquareIcon';
import { PaperClipIcon } from './icons/PaperClipIcon';
import { TrashIcon } from './icons/TrashIcon';

interface ProfessionalResultViewProps {
  client: Client;
  result: TestResult;
  questionnaire: Questionnaire;
  onBack: () => void;
  onSavePersonalization: (clientId: string, newAnalysis: string, newSummary: string) => void;
}

const ProfessionalResultView: React.FC<ProfessionalResultViewProps> = ({
  client,
  result,
  questionnaire,
  onBack,
  onSavePersonalization,
}) => {
  const [analysis, setAnalysis] = useState(result.analysis);
  const [summary, setSummary] = useState(result.summary);
  const [isSaving, setIsSaving] = useState(false);
  const [attachments, setAttachments] = useState(client.attachments || []);
  const [isDragging, setIsDragging] = useState(false);

  const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = [...e.dataTransfer.files];
    handleFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? [...e.target.files] : [];
    handleFiles(files);
  };
  
  const handleFiles = (files: File[]) => {
      const newAttachments = files.map(file => ({
        name: file.name,
        size: file.size,
        type: file.type,
      }));
      setAttachments(prev => [...prev, ...newAttachments]);
       // In a real app, you would upload the files and then update the client data.
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };


  const handleSave = () => {
    setIsSaving(true);
    onSavePersonalization(client.id, analysis, summary);
    // Simulate a network request
    setTimeout(() => {
        setIsSaving(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
            <button onClick={onBack} className="mb-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 flex items-center transition-colors text-sm">
                &larr; Voltar para a lista de pacientes
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Resultado e Devolutiva</h1>
            <p className="text-gray-600">Analisando o teste de <span className="font-semibold">{client.name}</span>.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coluna Principal com o Resultado */}
        <div className="lg:col-span-2">
            <UserResultPage user={client} result={result} questionnaire={questionnaire} />

            <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 mt-8">
              <h3 className="flex items-center text-2xl font-bold text-gray-800 mb-4">
                <PaperClipIcon className="w-6 h-6 mr-2 text-gray-500" />
                Anexos do Paciente
              </h3>
              <div
                className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-200 ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}`}
                onDrop={handleFileDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
              >
                <input
                  type="file"
                  multiple
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileSelect}
                  aria-label="Selecionar arquivos"
                />
                <div className="flex flex-col items-center pointer-events-none">
                  <PaperClipIcon className="w-12 h-12 text-gray-400 mb-2" />
                  <p className="text-gray-600 font-semibold">
                    Arraste e solte arquivos aqui
                  </p>
                  <p className="text-sm text-gray-500">ou clique para selecionar</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {attachments.length > 0 ? (
                  attachments.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
                      <div className="flex items-center min-w-0">
                        <PaperClipIcon className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-800 truncate">{file.name}</p>
                          <p className="text-xs text-gray-500">{formatBytes(file.size)} - {file.type}</p>
                        </div>
                      </div>
                      <button onClick={() => removeAttachment(index)} className="p-1 text-gray-400 hover:text-red-600 rounded-full ml-2 flex-shrink-0">
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 text-sm mt-6">Nenhum anexo adicionado.</p>
                )}
              </div>
            </div>

        </div>

        {/* Coluna Lateral para a Devolutiva LIW */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-xl p-6 sticky top-6">
            <div className="flex items-center mb-4">
              <PencilSquareIcon className="w-6 h-6 text-purple-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Minha Análise (LIW)</h3>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Use este espaço para refinar a análise da IA com sua metodologia profissional LIW antes de compartilhar com o paciente.
            </p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="summaryLIW" className="block text-sm font-medium text-gray-700 mb-1">
                  Resumo Personalizado
                </label>
                <input
                  id="summaryLIW"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 transition"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="analysisLIW" className="block text-sm font-medium text-gray-700 mb-1">
                  Devolutiva Detalhada Personalizada
                </label>
                <textarea
                  id="analysisLIW"
                  rows={15}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500 text-sm leading-relaxed transition"
                  value={analysis}
                  onChange={(e) => setAnalysis(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="w-full flex items-center justify-center px-4 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-300"
              >
                <SparklesIcon className="w-5 h-5 mr-2" />
                {isSaving ? 'Salvando...' : 'Salvar Devolutiva LIW'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalResultView;