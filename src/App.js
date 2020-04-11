import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import {Provider} from 'react-redux';

import store from './store';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
