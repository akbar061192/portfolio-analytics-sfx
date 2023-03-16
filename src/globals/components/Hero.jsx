import { Box, styled, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Navbar from './Navbar';
import heroImg from '../../media/analytical.png';
import CustomButton from './CustomButton';

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(5),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    color: '#000336',
    fontWeight: 'bold',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
  }));

  return (
    <Box sx={{ backgroundColor: '#E6F0FF', minHeight: '80vh' }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: '1' }}>
            <Typography
              variant='body2'
              sx={{
                fontSize: '32px',
                color: '#000336',
                fontWeight: 'bold',
                mt: 4,
                mb: 4,
              }}
            >
              Welcome to FYINNOVEA
            </Typography>
            <Title variant='h1'>Discover a place where you'll love to invest.</Title>
            <Typography variant='body2' sx={{ fontSize: '18px', color: '#5A6473', my: 4 }}>
              Be the first to get the best real investment ideas before they hit the mass market! Hot
              foreclosure deals with one simple search!
            </Typography>
            <CustomButton backgroundColor='#0F1B4C' color='#fff' buttonText='More About Us' heroBtn={true} />
          </Box>

          <Box sx={{ flex: '1.25' }}>
            <img src={heroImg} alt='heroImg' style={{ maxWidth: '100%', marginBottom: '2rem' }} />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
