import { Box, Typography, AppBar, styled, Toolbar, Container } from '../../globals/common/MuiComponents';
import importData from '../../media/import.gif';
import swot from '../../media/swot.gif';
import insights from '../../media/insights.gif';
import { useEffect, useState } from 'react';
import fyinnoveaLogo from '../../media/fyinnoveaLogo.png';
import { Link } from 'react-router-dom';
import CustomButton from '../../globals/components/CustomButton/CustomButton';

const EquityPortfolio = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '85%',
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    width: '70%',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0',
      flexDirection: 'column',
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
    transition: 'all .6s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  }));

  const [scrolled, setScrolled] = useState(false);

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'white',
    paddingLeft: '30px',
    paddingRight: '30px',
    boxShadow: `${scrolled ? '0 5px 15px 0 rgba(0,0,0,0.5)' : ''}`,
    padding: `${scrolled ? theme.spacing(2) : theme.spacing(3)}`,
    borderRadius: '12px',
    marginTop: `${scrolled ? '1rem' : 0}`,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1),
      boxShadow: `0 0 0 0`,
      justifyContent: 'center',
    },
  }));

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NavbarLogo = styled('img')(({ theme }) => ({
    cursor: 'pointer',
    width: '250px',
    [theme.breakpoints.down('sm')]: {
      width: '200px',
    },
    [theme.breakpoints.between('250', '300')]: {
      width: '100px',
    },
  }));

  return (
    <>
      <Box>
        <AppBar
          style={{
            position: 'fixed',
            top: 0,
            background: 'white',
          }}
          elevation={0}
        >
          <NavbarContainer>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2.5rem',
              }}
            >
              <Box
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}
              >
                <Link to='/'>
                  <NavbarLogo src={fyinnoveaLogo} alt='logo' />
                </Link>
              </Box>
            </Box>
          </NavbarContainer>
        </AppBar>
        <Toolbar />
      </Box>

      <Box
        sx={{
          marginTop: '6rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '20px',
        }}
      >
        <div
          style={{
            width: '5%',
            height: '5px',
            backgroundColor: '#000339',
            margin: '0 auto',
          }}
        ></div>

        <Typography variant='h3' sx={{ fontSize: '35px', fontWeight: 'bold', color: '#000339', my: 3 }}>
          Equity Portfolio Analytics
        </Typography>

        <CustomBox>
          <Typography
            variant='body2'
            sx={{
              fontSize: '16px',
              fontWeight: '500',
              color: '#5A6473',
              textAlign: 'center',
            }}
          >
            Track all your investments - All in one place
          </Typography>
        </CustomBox>

        <GuidesBox>
          <GuideBox>
            <img src={importData} alt='analysis' width='40%' />
            <Typography
              variant='body2'
              sx={{
                fontWeight: '500',
                fontSize: '20px',
                color: '#3B3c45',
                my: 1,
              }}
            >
              Import data from brokers
            </Typography>
          </GuideBox>

          <GuideBox>
            <img src={swot} alt='dashboard' width={'40%'} style={{ background: 'white' }} />
            <Typography
              variant='body2'
              sx={{
                fontWeight: '500',
                fontSize: '20px',
                color: '#3B3c45',
                my: 1,
              }}
            >
              SWOT Analysis
            </Typography>
          </GuideBox>

          <GuideBox>
            <img src={insights} alt='tech' width={'40%'} />
            <Typography
              variant='body2'
              sx={{
                fontWeight: '500',
                fontSize: '20px',
                color: '#3B3c45',
                my: 1,
              }}
            >
              Valuable insights & reports
            </Typography>
          </GuideBox>
        </GuidesBox>
        <Link to={'/equityPortfolio'} style={{ textDecoration: 'none' }}>
          <CustomButton backgroundColor='#1c9bef' color='#fff' buttonText='Get Started' />
        </Link>
      </Box>
    </>
  );
};

export default EquityPortfolio;
