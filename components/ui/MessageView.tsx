import  { FC, useState } from 'react'
import { Alert, AlertColor, IconButton, Snackbar } from '@mui/material'
import { Close } from '@mui/icons-material';

export interface IMessageView {
    message: string,
    type: AlertColor | undefined,
   
}

export const MessageView: FC<IMessageView> = ({ message, type}) => {
   
    

    const [open, setOpen] = useState(true);
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const action = (
        <>
            <IconButton size="small" aria-label="close" color="inherit">
                <Close fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <Snackbar
            open={open}
            autoHideDuration={1000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            action={action}
           >
            <Alert severity={type}>{message}</Alert>
        </Snackbar>
    )
}
