// In src/main.jsx (or index.js)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // 👈 Import this
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 👇 Wrap your App component like this */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);