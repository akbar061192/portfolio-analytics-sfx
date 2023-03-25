import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import bg from '../../media/bg.webp';
import './styles.css';

const WhatWeDo = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' style={{ background: 'white', margin: '0 1rem' }}>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              News
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        class='candles'
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          height: '100vh',
          color: '#f5f5f5',
          margin: '2rem',
        }}
      ></Box>
    </>
  );
};

export default WhatWeDo;
