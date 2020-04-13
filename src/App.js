import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { store, persistor } from './store';

import history from './services/history';

import Routes from './routes/index';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={4000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
