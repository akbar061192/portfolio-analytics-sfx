import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import fyinnoveaLogo from '../../media/fyinnoveaLogo.png';
import research from '../../media/researchWhat.gif';
import consulting from '../../media/consulting.gif';
import { AppBar, styled, Container, Divider, Tooltip } from '@mui/material/';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import './styles.css';

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      FYINNOVEA {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const What = () => {
  const GuidesBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    // marginTop: theme.spacing(6),
    // marginBottom: theme.spacing(5),
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

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'white',
    paddingLeft: '20px',
    paddingRight: '20px',
    boxShadow: '0 5px 15px 0 rgba(0,0,0,0.5)',
    padding: theme.spacing(1),
    borderRadius: '10px',
    marginTop: `1rem`,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1),
      boxShadow: `0 0 0 0`,
      justifyContent: 'center',
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
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'space-between' },
                  gap: '20px',
                }}
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
          display: { xs: 'block', md: 'flex' },
          m: 3,
          mt: 10,
        }}
      >
        <Box sx={{ background: 'white', flex: 2 }}>
          <GuidesBox>
            <GuideBox>
              <img src={research} alt='analysis' width='26%' />
              <Typography
                variant='h3'
                sx={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#000339',
                  my: 3,
                  textAlign: 'center',
                  mx: 2,
                  letterSpacing: '2.5px',
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                RESEARCH
              </Typography>
            </GuideBox>

            {/* <hr /> */}
            <GuideBox>
              <img src={consulting} alt='dashboard' width={'30%'} style={{ background: 'white' }} />
              <Typography
                variant='h3'
                sx={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#000339',
                  my: 3,
                  textAlign: 'center',
                  mx: 2,
                  letterSpacing: '2.5px',
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                CONSULTING
              </Typography>
            </GuideBox>
          </GuidesBox>
        </Box>

        {/* <hr /> */}
        <Box sx={{ background: 'azure', p: 6, pt: 0, flex: 3, borderRadius: '15px' }}>
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
                width: '13%',
                height: '5px',
                // background: 'black',
                background: 'rgb(74 222 128)',
              }}
            ></div>

            <Typography
              variant='h3'
              sx={{
                fontSize: '35px',
                fontWeight: 'bold',
                color: '#000339',
                my: 3,
                textAlign: 'center',
                mx: 2,
                fontFamily: '"Poppins", sans-serif',
                letterSpacing: '3px',
              }}
            >
              WHAT WE DO
            </Typography>
          </Box>
          <Typography
            variant='h3'
            sx={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: 'rgb(74 222 128)',
              textAlign: 'center',
              letterSpacing: '1.2px',
            }}
          >
            Global Leaders in Capital Markets
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              mt: 10,
              gap: '20px',
            }}
          >
            <Tooltip title='FYINNOVEA Research & Analytics bestows Direct Access to the Latest Insights by deeper analysis of companies’ business models, innovative emerging companies & implementation of disruptive technologies, effective corporate governance backed by exponential growth along with deeper understanding of stability of financial markets, economy and institutions.Accelerate your investments, by investing in future unicorns & engaging with most innovative disruptors in the market. We uncover kimberlites, the diamonds by engaging with early-stage companies & connecting investor’s with entrepreneur community & start-ups ecosystem'>
              <div class='notifications-container'>
                <div class='success'>
                  <div class='flex'>
                    <div style={{ marginTop: '3px' }} class='flex-shrink-0'>
                      <svg
                        class='succes-svg'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </div>
                    <div class='success-prompt-wrap'>
                      <p class='success-prompt-heading'>Research</p>
                      <div class='success-prompt-prompt'>
                        <p>Proud owners of kimberlites, the diamonds</p>
                      </div>
                      {/* <div class='success-button-container'>
                        <button type='button' class='success-button-main'>
                          View status
                        </button>
                        <button type='button' class='success-button-secondary'>
                          Dismiss
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </Tooltip>

            <Box>
              <Tooltip title='We simplify your Rapid exponential growth by turning your data & business processes into digital products and services to stay competitive utilizing digital platforms in capital markets.Take full advantage of FYINNOVEA intelligent tech SAAS platforms, venture capital, seed investors & get connected with key stakeholders in market '>
                <div class='notifications-container'>
                  <div class='success'>
                    <div class='flex'>
                      <div style={{ marginTop: '3px' }} class='flex-shrink-0'>
                        <svg
                          class='succes-svg'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                      </div>
                      <div class='success-prompt-wrap'>
                        <p class='success-prompt-heading'>Consulting</p>
                        <div class='success-prompt-prompt'>
                          <p>Adopt Digital Technologies to Transform Your Business</p>
                        </div>
                        {/* <div class='success-button-container'>
                          <button type='button' class='success-button-main'>
                            View status
                          </button>
                          <button type='button' class='success-button-secondary'>
                            Dismiss
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </Tooltip>
            </Box>
          </Box>
        </Box>

        <Box sx={{ flex: 1 }}></Box>
      </Box>

      <Divider sx={{ mt: 20 }} />
      <Copyright sx={{ mt: 2, mb: { xs: 2, md: 0 } }} />
    </>
  );
};

export default What;
