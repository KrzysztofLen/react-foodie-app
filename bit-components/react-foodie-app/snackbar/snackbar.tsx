import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

export const enum Variants {
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
    INFO = 'info',
}

type Props = {
    /**
     * Flag on depends snackbar is showed
     */
    isOpen: boolean;
    /**
     * Function closing snackbar
     */
    onClose: () => void;
    /**
     * Type of snackbar currently available: success, warning, error, info
     */
    variant: Variants;
    /**
     * Message displaying in the snackbar
     */
    message: string;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomizedSnackbars = ({
    isOpen,
    onClose,
    variant,
    message,
}: Props) => {
    return (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={onClose}>
            <Alert onClose={onClose} severity={variant} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};
