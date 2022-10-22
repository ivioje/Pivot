import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { ContextProvider } from './Context';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAltFast } from '@fortawesome/free-solid-svg-icons'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

