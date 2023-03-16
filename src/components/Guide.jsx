import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import port from '../media/port.png';
import dashboard from '../media/tech.png';
import ana from '../media/ana.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Guide = () => {
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
  }));

  return (
    <Box
      sx={{
        marginTop: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
        How it works?
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
          Everything you need to know when you want to buy, sell or invest - All in one place
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <img src={port} alt='buyIcon' />
          <Typography
            variant='body2'
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              color: '#3B3c45',
              my: 1,
            }}
          >
            Streamlined Portfolio Analysis
          </Typography>
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant='body2' sx={{ fontWeight: 'bold', fontSize: '14px', color: '#0689FF' }}>
              More
            </Typography>
            <ArrowRightAltIcon style={{ color: '#0689FF' }} />
          </Box>
        </GuideBox>

        <GuideBox>
          <img src={dashboard} alt='buyIcon' />
          <Typography
            variant='body2'
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              color: '#3B3c45',
              my: 1,
            }}
          >
            Customizable Dashboards
          </Typography>
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant='body2' sx={{ fontWeight: 'bold', fontSize: '14px', color: '#0689FF' }}>
              More
            </Typography>
            <ArrowRightAltIcon style={{ color: '#0689FF' }} />
          </Box>
        </GuideBox>

        <GuideBox>
          <img src={ana} alt='buyIcon' />
          <Typography
            variant='body2'
            sx={{
              fontWeight: '500',
              fontSize: '20px',
              color: '#3B3c45',
              my: 1,
            }}
          >
            Innovative Tech
          </Typography>
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant='body2' sx={{ fontWeight: 'bold', fontSize: '14px', color: '#0689FF' }}>
              More
            </Typography>
            <ArrowRightAltIcon style={{ color: '#0689FF' }} />
          </Box>
        </GuideBox>
      </GuidesBox>
    </Box>
  );
};

export default Guide;
