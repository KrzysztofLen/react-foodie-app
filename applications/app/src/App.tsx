import React from 'react';
import {
    Route,
    RouteComponentProps,
    Switch,
    withRouter,
} from 'react-router-dom';

import { ErrorBoundary } from './ErrorBoundary';

import { routes } from './routes/routes';

import FallbackNavigation from './components/FallbackNavigation';
import FallbackList from './components/FallbackList';
import FallbackCookbook from './components/FallbackCookbook';
import FallbackCart from './components/FallbackCart';
import FallbackFooter from './components/FallbackFooter';

import { Footer as NPMFooter } from '@krzysztoflen/react-foodie-app.footer';

const NavigationLazy = React.lazy(() => import('navigation/NavigationApp'));
const ListLazy = React.lazy(() => import('list/ListApp'));
const CookbookLazy = React.lazy(() => import('cookbook/CookbookApp'));
const CartLazy = React.lazy(() => import('cart/CartApp'));
const FooterLazy = React.lazy(() => import('footer/FooterApp'));

const App = ({ location }: RouteComponentProps) => {
    return (
        <React.StrictMode>
            <ErrorBoundary
                loadingError="Loading fallback navigation"
                loading="Loading navigation"
                errorFallback={<FallbackNavigation />}>
                <NavigationLazy items={routes} />
            </ErrorBoundary>
            <Switch>
                <Route path="/" exact>
                    <ErrorBoundary
                        key={location.pathname}
                        loadingError="Loading fallback list"
                        loading="Loading list"
                        errorFallback={<FallbackList />}>
                        <ListLazy />
                    </ErrorBoundary>
                </Route>
                <Route path="/cookbook">
                    <ErrorBoundary
                        key={location.pathname}
                        loadingError="Loading fallback cookbook"
                        loading="Loading cookbook"
                        errorFallback={<FallbackCookbook />}>
                        <CookbookLazy />
                    </ErrorBoundary>
                </Route>
                <Route path="/shopping-list">
                    <ErrorBoundary
                        key={location.pathname}
                        loadingError="Loading fallback cart"
                        loading="Loading cart"
                        errorFallback={<FallbackCart />}>
                        <CartLazy />
                    </ErrorBoundary>
                </Route>
            </Switch>
            <ErrorBoundary
                loadingError="Loading fallback footer"
                loading="Loading footer"
                errorFallback={
                    <NPMFooter
                        socials={[
                            <span>Icon1</span>,
                            <span>Icon2</span>,
                            <span>Icon3</span>,
                            <span>Icon4</span>,
                            <span>Icon5</span>,
                        ]}
                    />
                }
                localErrorFallback={<FallbackFooter />}>
                <FooterLazy />
            </ErrorBoundary>
        </React.StrictMode>
    );
};

const AppWithRouter = withRouter(App);

export default AppWithRouter;
