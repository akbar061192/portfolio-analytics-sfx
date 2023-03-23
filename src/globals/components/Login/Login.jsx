import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Divider,
  IconButton,
  OutlinedInput,
  FormControl,
  styled,
  CloseIcon,
  Box,
  Container,
  Dialog,
  DialogContent,
  Typography,
} from '../../common/MuiComponents';
import CustomButton from '../CustomButton/CustomButton';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import CreateNewAccount from '../CreateNewAccount/CreateNewAccount';
import { siginIn } from '../../apis/apis';
import { ReportProblem } from '@mui/icons-material';

const CustomForgotLink = styled(Box)(() => {
  return {
    ':hover': {
      textDecoration: 'underline',
      textDecorationColor: '#1877f2',
    },
  };
});

const Login = props => {
  const { openLogin, setOpenLogin, handleLoginClose, setOpenSnackBar, setSnackBarMessage } = props;

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

  const [loginSuccess, setLoginSuccess] = useState('');

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

  const handleLoginUser = async event => {
    event.preventDefault();
    if (formValidation()) {
      const inputPayload = {
        userid: userInputs.email,
        password: userInputs.password,
      };
      try {
        const response = await siginIn(inputPayload);
        setLoginSuccess(response);
      } catch (error) {
        return error;
      }
    }
  };

  return (
    <>
      {openForgotPassword ? (
        <ForgotPassword
          openForgotPassword={openForgotPassword}
          handleCloseForgotPassword={handleCloseForgotPassword}
          setOpenLogin={setOpenLogin}
          setOpenSnackBar={setOpenSnackBar}
          setSnackBarMessage={setSnackBarMessage}
        />
      ) : null}

      {openCreateNewAccount ? (
        <CreateNewAccount
          openCreateNewAccount={openCreateNewAccount}
          handleCloseCreateNewAccount={handleCloseCreateNewAccount}
          setOpenLogin={setOpenLogin}
          setOpenSnackBar={setOpenSnackBar}
          setSnackBarMessage={setSnackBarMessage}
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

                {loginSuccess && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: '1rem' }}>
                    <ReportProblem style={{ color: 'red', marginRight: '5px' }} />
                    <Typography style={{ color: 'red' }} variant='subtitle2'>
                      Invalid email or password
                    </Typography>
                  </Box>
                )}

                <CustomForgotLink sx={{ textAlign: 'center', mb: '1rem' }}>
                  <Link
                    style={{ textDecoration: 'none', color: '#1877f2', fontWeight: '500' }}
                    variant='body2'
                    onClick={() => {
                      setOpenForgotPassword(true);
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
