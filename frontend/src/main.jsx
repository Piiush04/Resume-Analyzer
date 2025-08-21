import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // 👈 Import the router
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 👇 Wrap your entire app in the router */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);