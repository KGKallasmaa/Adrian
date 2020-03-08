import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Script } from './pages/script';
import { MainPage } from './pages/main';
import { InitalBotcreator } from './pages/inital';

const { store } = configureStore();

const App = () => (
  <Provider store={store}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/script" component={Script} />
          <Route exact path="/bot" component={MainPage} />
          <Route exact path="/" component={InitalBotcreator} />
        </Switch>
      </Router>
    </Provider>
  </Provider>
);

export default App;
