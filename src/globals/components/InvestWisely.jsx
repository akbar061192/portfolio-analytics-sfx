import { styled, Typography, Stack } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import CustomButton from './CustomButton';
import CheckIcon from '@mui/icons-material/Check';

const GetStarted = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: '#17275F',
    height: '416px',
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

  const CustomIconBox = styled(Box)(({ theme }) => {
    return {
      display: 'flex',
      // justifyContent: 'space-between',
      alignItems: 'center',
      gap: '15px',
    };
  });

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography sx={{ fontSize: '48px', color: 'white', fontWeight: '700', my: 3 }}>
            Works Wonder
          </Typography>
          {/* <Typography sx={{ fontSize: '16px', color: '#ccc', fontWeight: '500', my: 3 }}>
            Everything you need to know about houses!
          </Typography> */}

          <CustomButton
            backgroundColor='#fff'
            color='#17275F'
            buttonText='Request Demo'
            getStartedBtn={false}
          />
        </Box>

        {/* <img src={homeIllustration} alt='illustration' style={{ maxWidth: '100%' }} /> */}

        <Stack>
          <CustomIconBox>
            <CheckIcon sx={{ color: 'white' }} fontSize='large' />
            <Typography sx={{ fontSize: '24px', color: 'white', fontWeight: '700', my: 3 }}>
              Research before you invest wisely - Think different
            </Typography>
          </CustomIconBox>

          <CustomIconBox>
            <CheckIcon sx={{ color: 'white' }} fontSize='large' />
            <Typography sx={{ fontSize: '24px', color: 'white', fontWeight: '700', my: 3 }}>
              Analytics before you invest wisely - The Appetizer
            </Typography>
          </CustomIconBox>

          <CustomIconBox>
            <CheckIcon sx={{ color: 'white' }} fontSize='large' />
            <Typography sx={{ fontSize: '24px', color: 'white', fontWeight: '700', my: 3 }}>
              Analytics before you invest wisely outshines the rest
            </Typography>
          </CustomIconBox>
        </Stack>
      </CustomContainer>
    </CustomBox>
  );
};

export default GetStarted;
