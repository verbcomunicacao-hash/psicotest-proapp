
import React, { useState } from 'react';
import { DocumentDuplicateIcon } from './icons/DocumentDuplicateIcon';
import { XCircleIcon } from './icons/XCircleIcon';

interface ShareModalProps {
  link: string;
  title: string;
  description: string;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ link, title, description, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg" onClick={e => e.stopPropagation()}>
        <div className="p-6 sm:p-8 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
            <XCircleIcon className="w-6 h-6" />
          </button>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">{description}</p>
          
          <div className="flex items-center space-x-2">
            <input
              type="text"
              readOnly
              value={link}
              className="flex-grow px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              onFocus={(e) => e.target.select()}
            />
            <button
              onClick={handleCopy}
              className={`flex items-center px-4 py-2 text-white font-semibold rounded-md transition-colors w-32 justify-center ${copied ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              <DocumentDuplicateIcon className="w-5 h-5 mr-2" />
              {copied ? 'Copiado!' : 'Copiar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;