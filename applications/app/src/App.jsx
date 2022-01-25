import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { ErrorBoundary } from './ErrorBoundary';

import { routes } from './routes/routes';

import FallbackNavigation from './components/FallbackNavigation';
import FallbackList from './components/FallbackList';

const NavigationLazy = React.lazy(() => import('navigation/NavigationApp'));
const ListLazy = React.lazy(() => import('list/ListApp'));

const CookbookRoute = () => (
    <React.Suspense fallback={<div />}>
        <h1>THIS IS COOKBOOK</h1>
    </React.Suspense>
);
const ShoppingListRoute = () => (
    <React.Suspense fallback={<div />}>
        <h1>THIS IS SHOPPING LIST</h1>
    </React.Suspense>
);

const history = createBrowserHistory();

export default () => {
    return (
        <Router history={history}>
            <ErrorBoundary
                error="Loading fallback navigation"
                loading="Loading navigation"
                fallback={<FallbackNavigation />}>
                <NavigationLazy items={routes} />
            </ErrorBoundary>
            <Switch>
                <Route path="/" exact>
                    <ErrorBoundary
                        error="Loading fallback list"
                        loading="Loading list"
                        fallback={<FallbackList />}>
                        <ListLazy />
                    </ErrorBoundary>
                </Route>
                <Route path="/cookbook">
                    <CookbookRoute />
                </Route>
                <Route path="/shopping-list">
                    <ShoppingListRoute />
                </Route>
            </Switch>
        </Router>
    );
};
