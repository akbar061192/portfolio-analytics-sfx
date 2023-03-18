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
  DialogActions,
  styled,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton';

const CustomForgotLink = styled(Box)(() => {
  return {
    ':hover': {
      textDecoration: 'underline',
      textDecorationColor: '#1877f2',
    },
  };
});

const ForgotPassword = props => {
  const { openForgotPassword, handleCloseForgotPassword, setOpenLogin } = props;

  const [userInputs, setUserInputs] = useState({
    email: '',
  });

  const [userErrors, setUserErrors] = useState({
    email: '',
  });

  const formValidation = (values = userInputs) => {
    let errObj = {};
    if ('email' in values) errObj.email = values.email ? '' : 'Required*';

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

  const handleForgotPassword = event => {
    event.preventDefault();
    if (formValidation()) {
      console.log(userInputs);
    }
  };

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
      <DialogContent sx={{ paddingTop: 0, mt: 2 }}>
        <DialogContentText>Please enter your email address to search for your account.</DialogContentText>
        <FormControl sx={{ mt: 2 }} fullWidth>
          <OutlinedInput
            sx={{ fontSize: '1.2rem' }}
            name='email'
            placeholder='Email*'
            value={userInputs.email}
            onChange={handleInputChange}
            error={userErrors.email ? true : false}
          />
        </FormControl>
      </DialogContent>
      <DialogActions style={{ marginBottom: '1rem', marginRight: '1rem' }}>
        <CustomButton
          backgroundColor='#1c9bef'
          color='#fff'
          buttonText='Reset Password'
          fullWidth={false}
          onBtnClick={handleForgotPassword}
        >
          Reset Password
        </CustomButton>
      </DialogActions>

      <Divider sx={{ mb: '1rem' }} />

      <CustomForgotLink
        sx={{ textAlign: 'center', mb: '1rem' }}
        onClick={() => {
          handleCloseForgotPassword();
          setOpenLogin(true);
        }}
      >
        <Link style={{ textDecoration: 'none', color: '#1877f2', fontWeight: '500' }} variant='body2'>
          Remember your password?
        </Link>
      </CustomForgotLink>
    </Dialog>
  );
};

export default ForgotPassword;
