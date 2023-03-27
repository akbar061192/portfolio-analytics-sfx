import sample from '../../media/blue1.jpg';
import './styles.css';
import { Box, styled, Typography, Button, IconButton, Tooltip } from '@mui/material';
import fyinnoveaLogo from '../../media/fyinnoveaLogo.png';
import BiotechIcon from '@mui/icons-material/Biotech';
import GroupIcon from '@mui/icons-material/Group';
import Footer from '../../globals/components/Home/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  color: 'white',
  fontWeight: 'bold',
  letterSpacing: 2,
  margin: theme.spacing(1, 0, 2, 0),
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px',
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  gap: theme.spacing(1),
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: '30px',
  color: 'white',
  fontWeight: 'bold',
  letterSpacing: 1.5,
  margin: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
}));

const IconBox = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  };
});

const NavbarLogo = styled('img')(({ theme }) => ({
  cursor: 'pointer',
  width: '250px',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const CustomBtn = styled(Button)(({ theme }) => {
  return {
    px: 2,
    py: 1,
    color: '#00008B',
    background: 'white',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    padding: '0.5rem 1.25rem',
    borderRadius: '7px',
    textTransform: 'none',
    border: '2px solid transparent',
    transition: 'all .6s ease-in-out',
    '&:hover': {
      backgroundColor: '#00008B',
      color: 'white',
      borderColor: '#00008B',
      transform: 'scale(1.1)',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '4px',
      borderRadius: '3px',
    },
  };
});

const WhatWeDo = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        exit={{ opacity: 1 }}
      >
        <div className='hero'>
          <img className='whtimg' src={sample} alt='hero' />
          <div className='hero-nav'>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Tooltip title='Back to home'>
                <IconButton
                  onClick={() => {
                    navigate('/', { replace: true });
                  }}
                >
                  <ArrowBackIcon
                    style={{
                      color: 'white',
                      fontSize: '45px',
                      marginLeft: '20px',
                      border: '2px solid white',
                      borderRadius: '50%',
                      padding: '4px',
                    }}
                  />
                </IconButton>
              </Tooltip>

              <NavbarLogo src={fyinnoveaLogo} alt='logo' />
              <Box sx={{ padding: '20px' }}>
                <CustomBtn
                  variant='outlined'
                  onClick={e => {
                    e.preventDefault();
                    window.scrollTo({
                      top: document.querySelector('#what').offsetTop,
                      behavior: 'smooth',
                    });
                  }}
                >
                  WHAT WE DO
                </CustomBtn>
              </Box>
            </Box>
          </div>
          <div className='hero-text'>
            <Title>Global Leaders in Capital Markets</Title>
            <SubTitle>Investments Empowered by Financial Innovations &amp; Ideas</SubTitle>
          </div>
        </div>

        <Box id='what' sx={{ m: '2rem', mb: '3rem', p: '2rem', borderRadius: '10px' }}>
          <Title sx={{ color: '#00008B', textAlign: 'center' }}>WHAT WE DO</Title>
          <CustomBox>
            <IconBox sx={{ background: 'whitesmoke', p: '2rem' }}>
              <BiotechIcon
                sx={{ fontSize: '7rem', padding: '1rem', borderRadius: '50%', border: '3px solid #0000B9' }}
              />
              <SubTitle sx={{ color: ' black' }}>RESEARCH</SubTitle>
              <SubTitle sx={{ color: ' black', textAlign: 'center', fontSize: '18px', m: 0 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, accusantium.{' '}
              </SubTitle>
            </IconBox>
            <IconBox sx={{ background: 'whitesmoke', p: '2rem' }}>
              <GroupIcon
                sx={{ fontSize: '7rem', padding: '1rem', borderRadius: '50%', border: '3px solid #0000B9' }}
              />
              <SubTitle sx={{ color: ' black' }}>CONSULTING</SubTitle>
              <SubTitle sx={{ color: ' black', textAlign: 'center', fontSize: '18px', m: 0 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, accusantium.{' '}
              </SubTitle>
            </IconBox>
          </CustomBox>
        </Box>
        <Footer />
      </motion.div>
    </>
  );
};

export default WhatWeDo;
