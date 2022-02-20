import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { CustomizedSnackbars as Snackbar, Variants } from './snackbar';

export const SnackbarError = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(true);
    return (
        <>
            <Snackbar
                isOpen={open}
                onClose={() => setOpen(false)}
                variant={Variants.ERROR}
                message={`This is a error message!`}
            />
            <Button variant="outlined" onClick={handleClick}>
                Open error snackbar
            </Button>
        </>
    );
};
