import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Directly use BrowserRouter
import './index.css'; // Global styles
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Ensure no aliasing here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
