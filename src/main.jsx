import React from 'react'
import ReactDOM from 'react-dom/client'
import "tailwindcss";
import { I18nextProvider } from 'react-i18next';
import i18n from './helpers/libs/18n';
import App from './App'
import './css/App.css'
import './css/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <I18nextProvider i18n={i18n}>
    <App />
    </I18nextProvider>

  </React.StrictMode>,
)
