import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/main';
import { InitalBotcreator } from './pages/inital';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/bot" component={InitalBotcreator} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
};
export default App;
