import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Limpeza de segurança para garantir que a tela carregue do zero
const rootElement = document.getElementById('root');
if (rootElement) {
  rootElement.innerHTML = ''; 
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);