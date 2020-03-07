import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/main';
import { InitalBotcreator } from './pages/inital';
import { Bot } from './pages/bot';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/build" component={Bot} />
        <Route exact path="/bot" component={MainPage} />
        <Route exact path="/" component={InitalBotcreator} />
      </Switch>
    </Router>
  );
};
export default App;
