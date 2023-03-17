import { FormControl, InputAdornment, OutlinedInput, styled, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useState } from 'react';
import CustomButton from './CustomButton';
import demo from '../../media/portfolio.gif';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';

const CustomContainer = styled(Container)(({ theme }) => ({
  height: '410px',
  borderRadius: '15px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    height: '500px',
  },
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3, 3, 0, 3),
    width: '90%',
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0, 10, 0),
  margin: theme.spacing(0, 2, 0, 2),
  [theme.breakpoints.down('md')]: {
    padding: '0',
  },
}));

const GetStarted = () => {
  const [userInputs, setUserInputs] = useState({
    name: '',
    email: '',
    mobile: '',
    website: '',
    profession: '',
  });

  const [userErrors, setUserErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    profession: '',
  });

  const formValidation = (values = userInputs) => {
    let errObj = {};
    if ('name' in values) errObj.name = values.name ? '' : 'Required*';
    if ('email' in values) errObj.email = values.email ? '' : 'Required*';
    if ('mobile' in values) errObj.mobile = values.mobile ? '' : 'Required*';
    if ('profession' in values) errObj.profession = values.profession ? '' : 'Required*';

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

  const handleSubmitDemo = e => {
    e.preventDefault();
    if (formValidation()) {
      console.log(userInputs);
    }
  };

  return (
    <CustomBox>
      <CustomContainer>
        <Box style={{ maxWidth: '100%', background: 'white', height: '100%', flex: '1.2' }}>
          <img
            src={demo}
            alt='requestDemo'
            style={{ maxWidth: '100%', background: 'white', height: '100%' }}
          />
        </Box>

        <Box sx={{ flex: 1.25, padding: '2rem', borderRadius: '10px' }}>
          <Box>
            <Typography sx={{ fontSize: '35px', fontWeight: '700' }}>Write Us A Message</Typography>
            <Typography variant='h6' sx={{ my: 3 }}>
              Request us quick demo and we’ll get back to you in a jiffy.
            </Typography>
          </Box>
          <form
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '15px',
              flexWrap: 'wrap',
            }}
          >
            <FormControl>
              <OutlinedInput
                sx={{ fontSize: '1.2rem' }}
                endAdornment={
                  <InputAdornment position='end'>
                    <DriveFileRenameOutlineIcon />
                  </InputAdornment>
                }
                placeholder='Name*'
                name='name'
                value={userInputs.name}
                onChange={handleInputChange}
                error={userErrors.name ? true : false}
              />
            </FormControl>
            <FormControl>
              <OutlinedInput
                sx={{ fontSize: '1.2rem' }}
                endAdornment={
                  <InputAdornment position='end'>
                    <LocalPostOfficeIcon />
                  </InputAdornment>
                }
                name='email'
                placeholder='Email*'
                value={userInputs.email}
                onChange={handleInputChange}
                error={userErrors.email ? true : false}
              />
            </FormControl>
            <FormControl>
              <OutlinedInput
                sx={{ fontSize: '1.2rem' }}
                endAdornment={
                  <InputAdornment position='end'>
                    <LanguageIcon />
                  </InputAdornment>
                }
                placeholder='Website'
                name='website'
                value={userInputs.website}
                onChange={handleInputChange}
                error={userErrors.website ? true : false}
              />
            </FormControl>
            <FormControl>
              <OutlinedInput
                sx={{ fontSize: '1.2rem' }}
                endAdornment={
                  <InputAdornment position='end'>
                    <StayCurrentPortraitIcon />
                  </InputAdornment>
                }
                placeholder='Mobile*'
                type='number'
                name='mobile'
                value={userInputs.mobile}
                onChange={handleInputChange}
                error={userErrors.mobile ? true : false}
              />
            </FormControl>
            <FormControl fullWidth>
              <OutlinedInput
                sx={{ fontSize: '1.2rem' }}
                endAdornment={
                  <InputAdornment position='end'>
                    <PersonIcon />
                  </InputAdornment>
                }
                placeholder='You are an?*'
                name='profession'
                value={userInputs.profession}
                onChange={handleInputChange}
                error={userErrors.profession ? true : false}
              />
            </FormControl>
            <Box sx={{ mt: 2 }}>
              <CustomButton
                backgroundColor='#1c9bef'
                color='#fff'
                buttonText='Request Demo'
                getStartedBtn={false}
                onBtnClick={handleSubmitDemo}
              />
            </Box>
          </form>
        </Box>
      </CustomContainer>
    </CustomBox>
  );
};

export default GetStarted;
