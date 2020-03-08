import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import configureStore from './configureStore';

const { store, persistor } = configureStore();

const Root = () => (
  <Provider store={store}>
      <App />
  </Provider>
);

export default Root;
