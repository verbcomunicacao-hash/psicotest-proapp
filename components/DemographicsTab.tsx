import React from 'react';
import { Client } from '../types';

interface DemographicsTabProps {
  client: Client;
}

const DemographicsTab: React.FC<DemographicsTabProps> = ({ client }) => {
  if (!client.demographics) {
    return <div className="p-4 text-gray-500">Nenhuma informação demográfica disponível.</div>;
  }

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Informações Demográficas</h3>
      <ul className="space-y-2">
        {Object.entries(client.demographics).map(([key, value]) => (
          <li key={key} className="flex">
            <span className="font-semibold capitalize w-32">{key.replace(/_/g, ' ')}:</span>
            <span className="text-gray-700">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DemographicsTab;
