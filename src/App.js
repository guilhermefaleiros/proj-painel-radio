import React from 'react';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/GlobalStyle';
import {Provider} from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
      <GlobalStyle/>
    </Provider>
  );
}

export default App;
