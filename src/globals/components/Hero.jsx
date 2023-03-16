import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';
import heroImg from '../../media/analytical.png';
import CustomButton from './CustomButton';

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
    fontSize: '75px',
    color: '#17275F',
    fontWeight: 'bold',
    letterSpacing: 5,
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
  }));

  const CustomTitleBox = styled(Box)(({ theme }) => {
    return {
      [theme.breakpoints.up('lg')]: {
        textAlign: 'center',
        margin: 0,
      },
    };
  });

  return (
    <Box sx={{ backgroundColor: 'whitesmoke', minHeight: '70vh' }}>
      {/* <Container> */}
      <Navbar />
      <CustomBox>
        <CustomTitleBox>
          <Title variant='h1'>PORTFOLIO ANALYTICS</Title>
          <Typography variant='body2' sx={{ fontSize: '18px', color: '#5A6473', my: 4, fontStyle: 'italic' }}>
            A platform by FYINNOVEA
          </Typography>
          <CustomButton backgroundColor='#0F1B4C' color='#fff' buttonText='More About Us' heroBtn={true} />
        </CustomTitleBox>
        <Box>
          <img src={heroImg} alt='heroImg' style={{ maxWidth: '100%', marginBottom: '2rem' }} />
        </Box>
      </CustomBox>
      {/* </Container> */}
    </Box>
  );
};

export default Hero;