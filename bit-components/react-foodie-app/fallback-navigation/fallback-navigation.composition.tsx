import React from 'react';
import { FallbackNavigation } from './fallback-navigation';

export const BasicFallbackNavigation = () => {
    return (
        <FallbackNavigation
            pages={[
                {
                    label: 'List',
                    url: '/',
                },
                {
                    label: 'Cookbook',
                    url: '/cookbook',
                },
                {
                    label: 'Shopping List',
                    url: '/shopping-list',
                },
            ]}
        />
    );
};
