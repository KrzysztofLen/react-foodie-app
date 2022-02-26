import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    errorFallback: JSX.Element;
    loadingError: string;
    loading: string;
    localErrorFallback?: JSX.Element;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <React.Suspense fallback={<div>{this.props.loadingError}</div>}>
                    {this.props.errorFallback || this.props.localErrorFallback}
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
