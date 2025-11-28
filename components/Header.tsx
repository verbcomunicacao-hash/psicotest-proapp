
import React from 'react';
import { LoggedInUser } from '../types';

interface HeaderProps {
  user: LoggedInUser | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800">
              Psico<span className="text-blue-600">Test</span> Pro
            </h1>
          </div>
          {user && (
            <div className="flex items-center space-x-4">
               <span className="text-gray-600 hidden sm:block">
                Bem-vindo(a), <span className="font-semibold">{user.name}</span>
              </span>
              <button
                onClick={onLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Sair
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
