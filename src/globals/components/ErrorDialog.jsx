import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ErrorDialog = props => {
  const { errorState } = props;

  const openDialog = Object.entries(errorState).length > 0 ? true : false;

  const [open, setOpen] = useState(openDialog);

  const handleClose = () => {
    setOpen(false);
  };

  console.log(errorState);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>Oops! Something went wrong.</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>{errorState.message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>CLOSE</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;
