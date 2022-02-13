import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback: JSX.Element;
    error: string;
    loading: string;
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
