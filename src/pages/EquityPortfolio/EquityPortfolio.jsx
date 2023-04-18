import {
  Box,
  Typography,
  AppBar,
  styled,
  Toolbar,
  Container,
  Divider,
  IconButton,
  Button,
} from '../../globals/common/MuiComponents';
import importData from '../../media/import.gif';
import swot from '../../media/swot.gif';
import insights from '../../media/insights.gif';
import { useEffect, useState } from 'react';
import fyinnoveaLogo from '../../media/fyinnoveaLogo.png';
import { Link } from 'react-router-dom';
import PortfolioDialog from './PortfolioDialog';
import { axiosInstance } from '../../index';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Transactions from './Transactions';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      FYINNOVEA {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    marginTop: theme.spacing(6),
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
    marginTop: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
    transition: 'all .6s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  }));

  const [scrolled, setScrolled] = useState(false);
  console.log(scrolled);
  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'white',
    paddingLeft: '20px',
    paddingRight: '20px',
    boxShadow: '0 5px 15px 0 rgba(0,0,0,0.5)',
    padding: theme.spacing(0.6),
    borderRadius: '10px',
    marginTop: `1rem`,
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
    width: '200px',
    [theme.breakpoints.down('sm')]: {
      width: '150px',
    },
    [theme.breakpoints.between('250', '300')]: {
      width: '100px',
    },
  }));

  const [openPortfolioDialog, setOpenPortfolioDialog] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axiosInstance.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        return error;
      }
    };
    apiCall();
  }, []);

  const [openTransactions, setOpenTransactions] = useState(false);

  return (
    <>
      {openPortfolioDialog ? (
        <PortfolioDialog
          openDialog={openPortfolioDialog}
          handleCloseDialog={() => setOpenPortfolioDialog(false)}
        />
      ) : null}

      {openTransactions ? (
        <Transactions
          openTransactions={openTransactions}
          handleCloseTransactions={() => setOpenTransactions(false)}
          handleCloseNewPortfolio={() => {}}
        />
      ) : null}

      <Box>
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
            pb: 2,
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

          <Typography
            variant='h3'
            sx={{ fontSize: '35px', fontWeight: 'bold', color: '#000339', my: 3, textAlign: 'center', mx: 2 }}
          >
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

            <hr />
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
            <hr />

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

          {!users.length ? (
            <Alert
              severity='info'
              action={
                <IconButton
                  onClick={() => {
                    setOpenPortfolioDialog(true);
                  }}
                >
                  <AddCircleOutlineIcon fontSize='large' sx={{ color: '#002147' }} />
                </IconButton>
              }
            >
              <AlertTitle>
                <strong>Welcome to Equity Portfolio Analytics</strong>
              </AlertTitle>
              No Portfolio's found please create a new one
            </Alert>
          ) : (
            // <IconButton
            //   sx={{
            //     color: '#002147',
            //   }}
            // >
            //   <ArrowCircleRightOutlinedIcon fontSize='large' />
            // </IconButton>
            // <CustomButton
            //   backgroundColor='#002147'
            //   color='#fff'
            //   buttonText='Equity Portfolio'
            //   onBtnClick={() => {
            //     setOpenTransactions(true);
            //   }}
            //   />

            <Button
              sx={{
                background: '#002147',
                color: '#fff',
                p: 1.2,
                fontSize: '1.2rem',
                // fontWeight: '600',
                // fontFamily: 'Kanit, sans-serif',
                transition: 'all .6s ease-in-out',
                ':hover': {
                  p: 1.4,
                  // background: '#007791',
                  transform: 'scale(1.1)',
                },
              }}
              variant='contained'
              endIcon={<NavigateNextIcon fontSize='large' />}
              onClick={() => {
                setOpenTransactions(true);
              }}
            >
              Equity Portfolio
            </Button>
          )}
        </Box>

        <Divider sx={{ mt: 10 }} />
        <Copyright sx={{ mt: 2, mb: { xs: 2, md: 0 } }} />
      </Box>
    </>
  );
};

export default EquityPortfolio;
