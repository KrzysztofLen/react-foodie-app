import React from 'react';
import { render } from '@testing-library/react';
import { BasicFallbackNavigation } from './fallback-navigation.composition';

it('should render with the correct text', () => {
    const rendered = render(<BasicFallbackNavigation />);
    expect(rendered).toBeTruthy();
});
