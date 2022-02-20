import React from 'react';
import { render } from '@testing-library/react';
import { SnackbarSuccess } from './snackbar-success.composition';

it('should render', () => {
    const rendered = render(<SnackbarSuccess />);
    expect(rendered).toBeTruthy();
});
