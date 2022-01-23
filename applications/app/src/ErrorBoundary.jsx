import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch() {}

    render() {
        if (this.state.hasError) {
            return (
                <React.Suspense fallback={<div>{this.props.error}</div>}>
                    {this.props.fallback}
                </React.Suspense>
            );
        }

        return (
            <React.Suspense fallback={<div>{this.props.loading}</div>}>
                {this.props.children}
            </React.Suspense>
        );
    }
}
