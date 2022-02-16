import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { CustomizedSnackbars as Snackbar, Variants } from './snackbar';

export const SnackbarWarning = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(true);
    return (
        <>
            <Snackbar
                isOpen={open}
                onClose={() => setOpen(false)}
                variant={Variants.WARNING}
                message={`This is a warning message!`}
            />
            <Button variant="outlined" onClick={handleClick}>
                Open warning snackbar
            </Button>
        </>
    );
};
