import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {
  TextField,
  Box,
  Divider,
  Stack,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Chip,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const Transactions = ({ openTransactions, handleCloseTransactions, handleCloseNewPortfolio }) => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={openTransactions}
        onClose={handleCloseTransactions}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={() => {
                handleCloseTransactions();
                handleCloseNewPortfolio();
              }}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              FYINNOVEA
            </Typography>
            <Button autoFocus color='inherit' onClick={handleCloseTransactions}>
              AVATAR
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            m: 3,
          }}
        >
          <Box>
            <Button>SFX</Button>
          </Box>
          <TextField placeholder='Search...' variant='outlined' />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
            mx: 3,
          }}
        >
          <Box
            sx={{
              background: '',
              flex: 1,
              gap: '0.8rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box>
              <Box>
                <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                  <Typography sx={{ color: 'blue' }}>Sensex</Typography>
                  <Typography sx={{ color: 'green' }}>+1.24%</Typography>
                </Stack>
              </Box>

              <Box>
                <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                  <Typography>62,28,787</Typography>
                  <Typography sx={{ color: 'green' }}>+23.34%</Typography>
                </Stack>
              </Box>
            </Box>
            <Divider />
            <Box>
              <Box>
                <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                  <Typography sx={{ color: 'blue' }}>Nifty</Typography>
                  <Typography sx={{ color: 'green' }}>+1.24%</Typography>
                </Stack>
              </Box>

              <Box>
                <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                  <Typography>87,54,267</Typography>
                  <Typography sx={{ color: 'green' }}>+45.34%</Typography>
                </Stack>
              </Box>
            </Box>

            <FormControl sx={{ m: 1 }} size='small'>
              <InputLabel id='demo-select-small'>Filter</InputLabel>
              <Select labelId='demo-select-small' id='demo-select-small' label='Age'>
                <MenuItem value={10}>All</MenuItem>
                <MenuItem value={20}>Family</MenuItem>
              </Select>
            </FormControl>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography>Portfolios</Typography>
              <IconButton>
                <AddCircleOutlineOutlinedIcon color='primary' />
              </IconButton>
            </Box>
            <Stack direction='column' spacing={1} sx={{ mx: { xs: '0rem', md: '1rem' } }}>
              <Chip sx={{ p: 3, fontSize: '1rem' }} label='SFX' onClick={handleClick} />
              <Chip sx={{ p: 3, fontSize: '1rem' }} label='RAJU' variant='filled' onClick={handleClick} />
              <Chip
                sx={{ p: 3, fontSize: '1rem' }}
                label='SFX_CLIENT'
                variant='filled'
                onClick={handleClick}
              />
              <Chip sx={{ p: 3, fontSize: '1rem' }} label='UMESH' variant='filled' onClick={handleClick} />
              <Chip sx={{ p: 3, fontSize: '1rem' }} label='SFX_USER' variant='filled' onClick={handleClick} />
            </Stack>
          </Box>

          <Box
            sx={{
              background: 'whitesmoke',
              flex: 4,
            }}
          >
            transactions will go here
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};

export default Transactions;
