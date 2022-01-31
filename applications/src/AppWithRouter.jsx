import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { routes } from './routes/routes';
import List from './components/List';
import Cookbook from './components/Cookbook';
import Cart from './components/Cart';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Navigation items={routes} />
            <Switch>
                <Route path="/" exact>
                    <List />
                </Route>
                <Route path="/cookbook">
                    <Cookbook />
                </Route>
                <Route path="/shopping-list">
                    <Cart />
                </Route>
            </Switch>
            <Footer />
        </>
    );
};

const AppWithRouter = withRouter(App);

export default AppWithRouter;
