import { Box, styled, Typography, Container } from '../../common/MuiComponents';
import CustomButton from '../CustomButton/CustomButton';
import analyticsHero from '../../../media/analyticsHero.gif';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

const PortfolioAnalytics = () => {
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
    color: '#17275F',
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
    <Box sx={{ minHeight: '62vh' }}>
      <Container>
        <CustomBox>
          <CustomTitleBox sx={{ flex: 2 }}>
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <Title variant='h1'>Portfolio Analytics</Title>
            </motion.div>

            <Typography variant='h6' style={{ textAlign: 'justify' }}>
              With FYINNOVEA, you get the best research on investment. As the market changes, you may need to
              make changes in your investment goals, allocation, diversification/concentration &amp; timely
              monitoring your investments using high benchmarks &amp; decision based on data analytics
            </Typography>
            <Typography
              variant='body2'
              sx={{ fontSize: '18px', color: '#5A6473', my: 4, fontStyle: 'italic' }}
            >
              A platform by FYINNOVEA
            </Typography>
            <Link to={`/equityPortfolio/${nanoid()}`} style={{ textDecoration: 'none' }}>
              <CustomButton backgroundColor='#002147' color='#fff' buttonText='Begin Now' heroBtn={true} />
            </Link>
          </CustomTitleBox>
          <Box sx={{ flex: '1.25' }}>
            <img src={analyticsHero} alt='heroImg' style={{ maxWidth: '100%', marginBottom: '2rem' }} />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default PortfolioAnalytics;
