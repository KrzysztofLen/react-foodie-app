import React from 'react';
import { render } from '@testing-library/react';
import { BasicFooter } from './footer.composition';

it('should render with the correct text', () => {
    const rendered = render(<BasicFooter />);
    expect(rendered).toBeTruthy();
});
