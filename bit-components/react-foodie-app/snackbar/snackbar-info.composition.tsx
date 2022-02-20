import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { CustomizedSnackbars as Snackbar, Variants } from './snackbar';

export const SnackbarInfo = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(true);
    return (
        <>
            <Snackbar
                isOpen={open}
                onClose={() => setOpen(false)}
                variant={Variants.INFO}
                message={`This is a info message!`}
            />
            <Button variant="outlined" onClick={handleClick}>
                Open info snackbar
            </Button>
        </>
    );
};
