import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContinentContext, ContinentProvider } from './context/ContinentContext';
import { BrowserRouter as Router } from 'react-router-dom';

export { ContinentContext }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ContinentProvider>
        <App />
      </ContinentProvider>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
