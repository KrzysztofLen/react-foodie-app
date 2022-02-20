import React from 'react';
import { render } from '@testing-library/react';
import { BasicToggle } from './toggle.composition';

it('should render', () => {
    const rendered = render(<BasicToggle />);
    expect(rendered).toBeTruthy();
});
