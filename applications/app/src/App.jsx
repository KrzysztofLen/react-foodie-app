import React from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { ErrorBoundary } from './ErrorBoundary';

import { routes } from './routes/routes';

import FallbackNavigation from './components/FallbackNavigation';
import FallbackList from './components/FallbackList';
import FallbackCookbook from './components/FallbackCookbook';
import FallbackCart from './components/FallbackCart';

const NavigationLazy = React.lazy(() => import('navigation/NavigationApp'));
const ListLazy = React.lazy(() => import('list/ListApp'));
const CookbookLazy = React.lazy(() => import('cookbook/CookbookApp'));
const CartLazy = React.lazy(() => import('cart/CartApp'));

const App = ({ location }) => {
    return (
        <>
            <ErrorBoundary
                error="Loading fallback navigation"
                loading="Loading navigation"
                fallback={<FallbackNavigation />}>
                <NavigationLazy items={routes} />
            </ErrorBoundary>
            <Switch>
                <Route path="/" exact>
                    <ErrorBoundary
                        key={location.pathname}
                        error="Loading fallback list"
                        loading="Loading list"
                        fallback={<FallbackList />}>
                        <ListLazy />
                    </ErrorBoundary>
                </Route>
                <Route path="/cookbook">
                    <ErrorBoundary
                        key={location.pathname}
                        error="Loading fallback cookbook"
                        loading="Loading cookbook"
                        fallback={<FallbackCookbook />}>
                        <CookbookLazy />
                    </ErrorBoundary>
                </Route>
                <Route path="/shopping-list">
                    <ErrorBoundary
                        key={location.pathname}
                        error="Loading fallback cart"
                        loading="Loading cart"
                        fallback={<FallbackCart />}>
                        <CartLazy />
                    </ErrorBoundary>
                </Route>
            </Switch>
        </>
    );
};

const AppWithRouter = withRouter(App);

export default AppWithRouter;
