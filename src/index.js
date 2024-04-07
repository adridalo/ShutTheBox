import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/Die.css';
import './styles/Game.css';
import './styles/Board.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
