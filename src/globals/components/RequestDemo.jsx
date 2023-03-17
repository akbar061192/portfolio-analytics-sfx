import { FormControl, InputAdornment, OutlinedInput, styled, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import CustomButton from './CustomButton';
import demo from '../../media/portfolio.gif';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';

const GetStarted = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    // backgroundColor: '#17275F',
    height: '410px',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
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

  return (
    <CustomBox>
      <CustomContainer>
        {/* <Typography sx={{ fontSize: '35px', color: 'white', fontWeight: '700' }}>
            Write Us A Message
          </Typography>
          <Typography sx={{ fontSize: '16px', color: '#ccc', fontWeight: '500', my: 3 }}>
            Request us quick demo and we’ll get back to you in a jiffy.
          </Typography>

          <CustomButton
            backgroundColor='#fff'
            color='#1c9bef'
            buttonText='Request Demo'
            getStartedBtn={true}
          /> */}

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
                placeholder='Email*'
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
              />
            </FormControl>

            <Box sx={{ mt: 2 }}>
              <CustomButton
                backgroundColor='#1c9bef'
                color='#fff'
                buttonText='Request Demo'
                getStartedBtn={true}
              />
            </Box>
          </form>
        </Box>
      </CustomContainer>
    </CustomBox>
  );
};

export default GetStarted;
