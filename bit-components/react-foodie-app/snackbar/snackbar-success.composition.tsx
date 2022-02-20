import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { CustomizedSnackbars as Snackbar, Variants } from './snackbar';

export const SnackbarSuccess = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(true);

    return (
        <>
            <Snackbar
                isOpen={open}
                onClose={() => setOpen(false)}
                variant={Variants.SUCCESS}
                message={`This is a success message!`}
            />
            <Button variant="outlined" onClick={handleClick}>
                Open success snackbar
            </Button>
        </>
    );
};
