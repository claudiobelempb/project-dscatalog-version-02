import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/js/src/collapse.js';
import 'bootstrap/js/src/dropdown.js';
import './assets/css/custom.scss';

import { Routes } from 'routes';
import { AuthContextProvider } from 'app/contexts/AuthContext';
import { ThemeContexProvider } from 'app/contexts/ThemeContext';

function App() {
  return (
    <ThemeContexProvider>
      <AuthContextProvider>
        <Routes />
        <ToastContainer autoClose={3000} />
      </AuthContextProvider>
    </ThemeContexProvider>
  );
}

export default App;
