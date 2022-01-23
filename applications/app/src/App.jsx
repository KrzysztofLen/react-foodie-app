import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';

import FallbackNavigation from './components/FallbackNavigation';

const NavigationLazy = React.lazy(() => import('navigation/NavigationApp'));

export default () => {
    return (
        <div>
            <ErrorBoundary
                error="Loading fallback navigation"
                loading="Loading navigation"
                fallback={<FallbackNavigation />}>
                <NavigationLazy />
            </ErrorBoundary>
            <h1>Welcome in the Foodie App</h1>
        </div>
    );
};
