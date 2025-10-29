import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/animations.css'; // CHEMIN CORRIGÉ ICI
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
