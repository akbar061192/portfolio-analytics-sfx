import { useState, useEffect } from 'react';
import { siginUp } from '../../apis/apis';
import {
  Divider,
  IconButton,
  OutlinedInput,
  FormControl,
  DialogTitle,
  InputAdornment,
  FormHelperText,
  Visibility,
  VisibilityOff,
  CloseIcon,
  Container,
  Box,
  Dialog,
  DialogContent,
} from '../../common/MuiComponents';
import CustomButton from '../CustomButton/CustomButton';

const CreateNewAccount = props => {
  const {
    openCreateNewAccount,
    handleCloseCreateNewAccount,
    setOpenLogin,
    setOpenSnackBar,
    setSnackBarMessage,
  } = props;

  const [newAccount, setNewAccount] = useState({
    fName: '',
    lName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    fName: '',
    lName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setNewAccount(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });

    formValidation({
      [name]: value,
    });
  };

  const handleCreateNewAccount = async event => {
    event.preventDefault();
    const validForm = formValidation();
    const formInput = {
      first_name: newAccount.fName,
      last_name: newAccount.lName,
      email_id: newAccount.email,
      phone_number: newAccount.mobile,
      password: newAccount.password,
      confirm_Password: newAccount.confirmPassword,
    };
    if (validForm) {
      try {
        const response = await siginUp(formInput);
        if (response) {
          setOpenSnackBar(true);
          setSnackBarMessage('New Account created successfully');
          handleCloseCreateNewAccount();
          setOpenLogin(false);
        }
      } catch (error) {
        setOpenSnackBar(false);
        setSnackBarMessage('');
        return error;
      }
    }
  };

  useEffect(() => {
    if (newAccount.confirmPassword.length && newAccount.password !== newAccount.confirmPassword) {
      setErrors(prev => {
        return {
          ...prev,
          confirmPassword: 'Passwords does not match.',
        };
      });
    }
  }, [newAccount.confirmPassword, newAccount.password]);

  const formValidation = (values = newAccount) => {
    let errObj = {};
    if ('fName' in values) errObj.fName = values.fName ? '' : 'Required*';
    if ('lName' in values) errObj.lName = values.lName ? '' : 'Required*';
    if ('email' in values) errObj.email = values.email ? '' : 'Required*';
    if ('password' in values) errObj.password = values.password ? '' : 'Required*';
    if ('mobile' in values) errObj.mobile = values.mobile ? '' : 'Required*';
    if ('confirmPassword' in values) errObj.confirmPassword = values.confirmPassword ? '' : 'Required*';

    setErrors(prevState => {
      return {
        ...prevState,
        ...errObj,
      };
    });

    return Object.values(errObj).every(value => value === '');
  };

  return (
    <>
      <Dialog
        open={openCreateNewAccount}
        onClose={() => {
          setNewAccount({
            fName: '',
            lName: '',
            email: '',
            mobile: '',
            password: '',
            confirmPassword: '',
          });
          setErrors({
            fName: '',
            lName: '',
            email: '',
            mobile: '',
            password: '',
            confirmPassword: '',
          });
          handleCloseCreateNewAccount();
          setOpenLogin(prev => !prev);
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '1.5rem' }}>
          <DialogTitle sx={{ paddingTop: 0, fontSize: '24px', fontWeight: '580', mb: 0, pb: 0 }}>
            Sign Up
          </DialogTitle>

          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0, mr: '10px' }}
          >
            <IconButton
              sx={{ color: '#1c9bef', background: 'whitesmoke' }}
              onClick={() => {
                setNewAccount({
                  fName: '',
                  lName: '',
                  email: '',
                  mobile: '',
                  password: '',
                  confirmPassword: '',
                });
                setErrors({
                  fName: '',
                  lName: '',
                  email: '',
                  mobile: '',
                  password: '',
                  confirmPassword: '',
                });
                handleCloseCreateNewAccount();
                setOpenLogin(prev => !prev);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        <DialogContent sx={{ m: 0, pt: 0 }}>It's quick and easy</DialogContent>
        <Divider sx={{ mb: 1 }} />

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
                <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '10px',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <FormControl sx={{ width: '100%' }}>
                      <OutlinedInput
                        sx={{ fontSize: '1.2rem' }}
                        placeholder='First Name*'
                        name='fName'
                        value={newAccount.fName}
                        onChange={handleInputChange}
                        error={errors.email ? true : false}
                      />
                    </FormControl>
                    <FormControl sx={{ width: '100%' }}>
                      <OutlinedInput
                        sx={{ fontSize: '1.2rem' }}
                        name='lName'
                        placeholder='Last Name*'
                        value={newAccount.lName}
                        onChange={handleInputChange}
                        error={errors.lName ? true : false}
                      />
                    </FormControl>
                  </Box>

                  <FormControl sx={{ width: '100%' }}>
                    <OutlinedInput
                      sx={{ fontSize: '1.2rem' }}
                      name='email'
                      placeholder='Email*'
                      value={newAccount.email}
                      onChange={handleInputChange}
                      error={errors.email ? true : false}
                    />
                  </FormControl>

                  <FormControl sx={{ width: '100%' }}>
                    <OutlinedInput
                      type='number'
                      sx={{ fontSize: '1.2rem' }}
                      name='mobile'
                      placeholder='Mobile*'
                      value={newAccount.mobile}
                      onChange={handleInputChange}
                      error={errors.mobile ? true : false}
                    />
                  </FormControl>

                  <Box
                    sx={{
                      display: 'flex',
                      gap: '10px',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <FormControl sx={{ width: '100%' }}>
                      <OutlinedInput
                        sx={{ fontSize: '1.2rem' }}
                        placeholder='Password*'
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        value={newAccount.password}
                        onChange={handleInputChange}
                        error={errors.password ? true : false}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              aria-label='toggle password visibility'
                              onClick={() => setShowPassword(prev => !prev)}
                              edge='end'
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    <FormControl sx={{ width: '100%' }}>
                      <OutlinedInput
                        sx={{ fontSize: '1.2rem' }}
                        name='confirmPassword'
                        placeholder='Confirm*'
                        value={newAccount.confirmPassword}
                        onChange={handleInputChange}
                        error={errors.confirmPassword ? true : false}
                        type={showConfirmPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position='end'>
                            <IconButton
                              aria-label='toggle password visibility'
                              onClick={() => setShowConfirmPassword(prev => !prev)}
                              edge='end'
                            >
                              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                  {errors.confirmPassword && errors.confirmPassword.includes('match') ? (
                    <FormHelperText sx={{ margin: 0 }}>{errors.confirmPassword}</FormHelperText>
                  ) : null}
                </Box>

                <Box sx={{ textAlign: 'center', my: 3 }}>
                  <CustomButton
                    backgroundColor='#1c9bef'
                    color='#fff'
                    buttonText='Sign up'
                    getStartedBtn={false}
                    fullWidth={true}
                    onBtnClick={handleCreateNewAccount}
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

export default CreateNewAccount;
