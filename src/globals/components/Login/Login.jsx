import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { Divider, IconButton, OutlinedInput, FormControl, styled } from '@mui/material';
import CustomButton from '../CustomButton';
import CloseIcon from '@mui/icons-material/Close';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import CreateNewAccount from '../CreateNewAccount/CreateNewAccount';

const CustomForgotLink = styled(Box)(() => {
  return {
    ':hover': {
      textDecoration: 'underline',
      textDecorationColor: '#1877f2',
    },
  };
});

const Login = props => {
  const { openLogin, setOpenLogin, handleLoginClose } = props;

  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
  });

  const [userErrors, setUserErrors] = useState({
    email: '',
    password: '',
  });

  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [openCreateNewAccount, setOpenCreateNewAccount] = useState(false);

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

  const handleCloseForgotPassword = () => {
    setOpenForgotPassword(false);
  };

  const handleCloseCreateNewAccount = () => {
    setOpenCreateNewAccount(false);
  };

  const handleLoginUser = event => {
    event.preventDefault();
    if (formValidation()) {
      console.log(userInputs);
    }
  };

  return (
    <>
      {openForgotPassword ? (
        <ForgotPassword
          openForgotPassword={openForgotPassword}
          handleCloseForgotPassword={handleCloseForgotPassword}
          setOpenLogin={setOpenLogin}
        />
      ) : null}

      {openCreateNewAccount ? (
        <CreateNewAccount
          openCreateNewAccount={openCreateNewAccount}
          handleCloseCreateNewAccount={handleCloseCreateNewAccount}
        />
      ) : null}

      <Dialog
        open={openLogin}
        onClose={() => {
          setUserInputs({
            email: '',
            password: '',
          });
          setUserErrors({
            email: '',
            password: '',
          });
          handleLoginClose();
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', m: 1, mb: 0 }}>
          <div></div>
          <IconButton
            sx={{ color: '#1c9bef', background: 'whitesmoke' }}
            onClick={() => {
              setUserInputs({
                email: '',
                password: '',
              });
              setUserErrors({
                email: '',
                password: '',
              });
              handleLoginClose();
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{ paddingTop: 0 }}>
          <Container component='main' maxWidth='xs'>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box component='form' noValidate sx={{ mt: 1 }}>
                <Box>
                  <FormControl fullWidth>
                    <OutlinedInput
                      sx={{ fontSize: '1.2rem', mb: '1rem' }}
                      placeholder='Email*'
                      name='email'
                      value={userInputs.email}
                      onChange={handleInputChange}
                      error={userErrors.email ? true : false}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <OutlinedInput
                      sx={{ fontSize: '1.2rem' }}
                      type='password'
                      name='password'
                      placeholder='Password*'
                      value={userInputs.password}
                      onChange={handleInputChange}
                      error={userErrors.password ? true : false}
                    />
                  </FormControl>
                </Box>

                <Box sx={{ textAlign: 'center', my: 2 }}>
                  <CustomButton
                    backgroundColor='#1c9bef'
                    color='#fff'
                    buttonText='Log in'
                    fullWidth={true}
                    onBtnClick={handleLoginUser}
                  />
                </Box>

                <CustomForgotLink sx={{ textAlign: 'center', mb: '1rem' }}>
                  <Link
                    style={{ textDecoration: 'none', color: '#1877f2', fontWeight: '500' }}
                    variant='body2'
                    onClick={() => {
                      setOpenForgotPassword(true);
                      handleLoginClose();
                    }}
                  >
                    Forgot password?
                  </Link>
                </CustomForgotLink>
                <Divider sx={{ mb: '1rem' }} />
                <Box sx={{ textAlign: 'center', my: 2 }}>
                  <CustomButton
                    backgroundColor='#36a420'
                    color='#fff'
                    buttonText='Create new account'
                    getStartedBtn={false}
                    onBtnClick={() => {
                      handleLoginClose();
                      setOpenCreateNewAccount(true);
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Login;
