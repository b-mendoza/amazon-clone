import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

const App = () => (
    // BEM
    <Router>
        <Header />

        <Switch>
            <Route path="/checkout">
                <Checkout />
            </Route>

            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
);

export default App;
