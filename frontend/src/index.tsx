import React from 'react';
import ReactDOM from 'react-dom';

import { AppContetxProvider } from 'app/contexts/AppContetx';
import { CounterContextProvider } from 'app/contexts/CounteContetx';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterContextProvider>
        <AppContetxProvider>
          <App />
        </AppContetxProvider>
      </CounterContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
