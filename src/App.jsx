import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './configureStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/main';
import { InitalBotcreator } from './pages/inital';

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/bot" component={MainPage} />
        <Route exact path="/" component={InitalBotcreator} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
