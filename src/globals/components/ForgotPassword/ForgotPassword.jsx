import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import {
  Divider,
  IconButton,
  OutlinedInput,
  FormControl,
  DialogTitle,
  DialogContentText,
  Button,
  DialogActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ForgotPassword = props => {
  const { openForgotPassword, handleCloseForgotPassword } = props;

  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
  });

  const [userErrors, setUserErrors] = useState({
    email: '',
    password: '',
  });

  console.log(userErrors);
  const formValidation = (values = userInputs) => {
    let errObj = {};
    if ('email' in values) errObj.email = values.email ? '' : 'Required*';
    if ('password' in values) errObj.password = values.password ? '' : 'Required*';

    setUserErrors(prevState => {
      return {
        ...prevState,
        ...errObj,
      };
    });

    return Object.values(errObj).every(value => value === '');
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUserInputs(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });

    formValidation({
      [name]: value,
    });
  };

  console.log(handleInputChange);
  return (
    <Dialog open={openForgotPassword} onClose={handleCloseForgotPassword}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', m: 1, mb: 0 }}>
        <div></div>
        <IconButton
          onClick={() => {
            handleCloseForgotPassword();
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogTitle sx={{ paddingTop: 0, fontSize: '24px', fontWeight: '580' }}>Forgot Password?</DialogTitle>
      <Divider />
      <DialogContent sx={{ paddingTop: 0, my: 2 }}>
        <DialogContentText>Please enter your email address to search for your account.</DialogContentText>
        <FormControl sx={{ mt: 2 }} fullWidth>
          <OutlinedInput sx={{ fontSize: '1.2rem' }} name='email' placeholder='Email*' />
        </FormControl>
      </DialogContent>
      <DialogActions style={{ marginBottom: '1rem' }}>
        <Button onClick={handleCloseForgotPassword}>Cancel</Button>
        <Button variant='contained' onClick={handleCloseForgotPassword}>
          Reset
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ForgotPassword;
