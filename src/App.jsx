import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/main';


export const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage} />
            </Switch>
        </Router>
    );
};
