import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '../../common/MuiComponents';

const ErrorDialog = props => {
  const { errorState } = props;

  const openDialog = Object.entries(errorState).length > 0 ? true : false;

  const [open, setOpen] = useState(openDialog);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>Oops! Something went wrong.</DialogTitle>
      <DialogContent>
        {errorState.response && errorState.response.data.summary ? (
          <DialogContentText id='alert-dialog-description'>
            {errorState.response.data.summary.message.replaceAll("'", '')}
          </DialogContentText>
        ) : errorState.response.data.message ? (
          <DialogContentText id='alert-dialog-description'>
            {errorState.response.data.message}
          </DialogContentText>
        ) : (
          <DialogContentText id='alert-dialog-description'>{errorState.message}</DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>CLOSE</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;
