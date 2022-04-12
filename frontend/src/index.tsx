import { AppContetxProvider } from 'app/contexts/AppContetx';
import { CounterContextProvider } from 'app/contexts/CounteContetx';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <AppContetxProvider>
        <App />
      </AppContetxProvider>
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
