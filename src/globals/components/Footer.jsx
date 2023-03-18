import { Divider, styled, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link to={'/'}>FYINNOVEA</Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    gap: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  }));

  const FooterLink = styled('span')(({ theme }) => ({
    fontSize: '16px',
    color: '#7A7A7E',
    fontWeight: '300',
    lineHeight: '1.5',
    cursor: 'pointer',
    '&:hover': {
      color: '#000',
    },
  }));

  return (
    <Box sx={{ py: 5, background: 'lightgray' }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                color: '#1C1C1D',
                fontWeight: '700',
                mb: 2,
              }}
            >
              Products
            </Typography>

            <FooterLink>Listing</FooterLink>
            <br />
            <FooterLink>Analytics</FooterLink>
            <br />
            <FooterLink>Dashboards</FooterLink>
            <br />
            <FooterLink>Blogs</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                color: '#1C1C1D',
                fontWeight: '700',
                mb: 2,
              }}
            >
              Resources
            </Typography>

            <FooterLink>Our Clients</FooterLink>
            <br />
            <FooterLink>Stories</FooterLink>
            <br />
            <FooterLink>Video</FooterLink>
            <br />
            <FooterLink>Free Trial</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                color: '#1C1C1D',
                fontWeight: '700',
                mb: 2,
              }}
            >
              Company
            </Typography>

            <FooterLink>Partnerships</FooterLink>
            <br />
            <FooterLink>Terms of use</FooterLink>
            <br />
            <FooterLink>Privacy</FooterLink>
            <br />
            <FooterLink>Sitemap</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                color: '#1C1C1D',
                fontWeight: '700',
                mb: 2,
              }}
            >
              Get in touch
            </Typography>

            <Typography
              sx={{
                fontSize: '16px',
                color: '#7A7A7E',
                fontWeight: '500',
                mb: 2,
              }}
            >
              You’ll find a new way to invest.
            </Typography>

            <IconBox>
              <FacebookIcon color='primary' sx={{ cursor: 'pointer' }} />
              <TwitterIcon color='primary' sx={{ cursor: 'pointer' }} />
              <LinkedInIcon color='primary' sx={{ cursor: 'pointer' }} />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>

      <Divider sx={{ my: 2 }} />
      <Copyright sx={{ mt: 3, mb: 0 }} />
    </Box>
  );
};

export default Footer;
