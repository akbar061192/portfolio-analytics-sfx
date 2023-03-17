import { Box, styled, Typography, Container } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';
import CustomButton from './CustomButton';
import portfolio from '../../media/demo.gif';

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(10),
    alignItems: 'flex-start',
    marginTop: theme.spacing(7),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    // color: '#17275F',
    fontWeight: 'bold',
    letterSpacing: 2.5,
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
  }));

  const CustomTitleBox = styled(Box)(({ theme }) => {
    return {
      [theme.breakpoints.up('lg')]: {
        textAlign: 'left',
        margin: 0,
      },
    };
  });

  return (
    <Box sx={{ minHeight: '70vh' }}>
      <Navbar />
      <Container>
        <CustomBox>
          <CustomTitleBox sx={{ flex: 2 }}>
            <Title variant='h1'>Portfolio Analytics</Title>
            <Typography variant='h6'>
              With FYINNOVEA, you get the best advice on investment. Understand your market, get answers to
              your burning questions, and invest wisely, all at the same place.
            </Typography>
            <Typography
              variant='body2'
              sx={{ fontSize: '18px', color: '#5A6473', my: 4, fontStyle: 'italic' }}
            >
              A platform by FYINNOVEA
            </Typography>
            <CustomButton backgroundColor='#1c9bef' color='#fff' buttonText='More About Us' heroBtn={true} />
          </CustomTitleBox>
          <Box sx={{ flex: '1.25' }}>
            <img src={portfolio} alt='heroImg' style={{ maxWidth: '100%', marginBottom: '2rem' }} />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
