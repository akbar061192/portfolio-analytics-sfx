import { useState, forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import {
  Box,
  Divider,
  Stack,
  Typography,
  FormControl,
  MenuItem,
  Chip,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EquityTrans from './EquityTrans';
import NewPortfolio from './NewPortfolio';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { ArrowDropDown } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      FYINNOVEA {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Transactions = ({ openTransactions, handleCloseTransactions, handleCloseNewPortfolio }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick1 = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledMenu = styled(props => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        },
      },
    },
  }));
  const [newPortfolio, setNewPortfolio] = useState(false);

  // const userPortfolios = ['SFX', 'Raju', 'SFX_CLIENT'];
  const [portfolios, setPortfolios] = useState(['SFX', 'Raju', 'Patricia', 'Glenna']);
  const [portfolio, setPortfolio] = useState('Raju');

  const handlePortfolioClick = portfolio => {
    console.log(portfolio);
    setPortfolio(portfolio);
  };

  const handleAddEquiTrans = name => {
    setPortfolios(prev => {
      return [...prev, name];
    });
  };

  const SyledChip = styled(Chip)(({ theme }) => ({
    '&:hover': {
      backgroundColor: 'lightyellow',
    },
  }));

  return (
    <div>
      {newPortfolio ? (
        <NewPortfolio
          openNewPortfolio={newPortfolio}
          handleCloseNewPortfolio={() => setNewPortfolio(false)}
          fromEquiTrans={false}
        />
      ) : null}

      <Dialog
        fullScreen
        open={openTransactions}
        onClose={handleCloseTransactions}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', background: '#002147' }}>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <IconButton
                edge='start'
                color='inherit'
                onClick={() => {
                  handleCloseTransactions();
                  handleCloseNewPortfolio();
                }}
                aria-label='close'
              >
                <ArrowBackIcon sx={{ color: 'white' }} />
              </IconButton>

              <Box
                sx={
                  {
                    // width: { xs: '170px', md: '240px' },
                  }
                }
              >
                {/* <img src={fyinnovea} style={{ width: '100%', color: 'white' }} alt='logo' /> */}
                <Typography
                  sx={{
                    height: '100%',
                    fontSize: '2rem',
                    fontWeight: '300',
                    fontFamily: 'Kanit, sans-serif',
                  }}
                >
                  FYINNOVEA
                </Typography>
              </Box>
            </Box>

            {/* <Box>
              <MenuItem
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '10px',
                  p: 1.5,
                  background: 'white',
                  borderRadius: '10px',
                }}
              >
                <PersonIcon sx={{ color: '#1c9bef' }} />
                <Typography sx={{ color: '#1c9bef' }}>SFX USER</Typography>
              </MenuItem>
            </Box> */}
            <Box>
              <Button
                id='demo-customized-button'
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                variant='contained'
                disableElevation
                onClick={handleClick1}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ fontSize: { sx: '0.4rem' }, background: 'white', color: 'black' }}
              >
                SFX USER
              </Button>
              <StyledMenu
                sx={{ padding: { xs: '10px' } }}
                id='demo-customized-menu'
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  <EditIcon />
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <FileCopyIcon />
                  Duplicate
                </MenuItem>
              </StyledMenu>
            </Box>
          </Toolbar>
        </AppBar>
        <Box sx={{ background: '#007791', p: 0, height: '100%' }}>
          <Box
            sx={{
              display: { xs: 'block', md: 'flex' },
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              p: 2,
              pb: 0,
              mx: 5,
              // background: '#007791',
            }}
          >
            <Box>
              <Button
                sx={{ width: { xs: '100%' }, mb: { xs: 2 }, background: '#002147' }}
                id='demo-customized-button'
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                variant='contained'
                disableElevation
                onClick={handleClick1}
                endIcon={<KeyboardArrowDownIcon />}
              >
                SFX
              </Button>
              <StyledMenu
                id='demo-customized-menu'
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  <EditIcon />
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <FileCopyIcon />
                  Duplicate
                </MenuItem>
              </StyledMenu>
            </Box>

            <FormControl
              variant='outlined'
              sx={{
                width: { xs: '100%', md: '400px' },
                mb: { xs: '10px', md: '0px' },
                background: 'white',
                border: 'none',
                borderRadius: '0px',
              }}
            >
              <OutlinedInput
                sx={{ height: '38px', border: 'none', borderRadius: '0px' }}
                placeholder='Search Portfolios...'
                startAdornment={<InputAdornment position='start'>{<SearchIcon />}</InputAdornment>}
              />
            </FormControl>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              // gap: '1rem',
              // mx: 1,
            }}
          >
            <Box
              sx={{
                // flex: 1,
                // gap: '0.8rem',
                display: 'flex',
                flexDirection: 'column',
                // borderRadius: '10px',
                background: '#002147',
                // background: '#101010',
                width: { md: '100%', lg: '13%' },
                height: 'max-content',
                p: 3,
              }}
            >
              <Box>
                <Box
                  sx={{
                    gap: '0.5rem',
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'center',
                    flexDirection: { xs: 'row', md: 'column' },
                  }}
                >
                  <Stack
                    direction='column'
                    sx={{
                      flex: 1,
                      p: 1.5,
                      borderRadius: '10px',
                      backgroundColor: '#202020	',
                      boxShadow: '0 0 10px 1px rgba(0, 0, 0, 0.25)',
                      width: '100%',
                    }}
                  >
                    <Typography sx={{ color: 'white', fontSize: '1.3rem' }}>Sensex</Typography>
                    <Typography sx={{ color: 'green' }}>35,88,234</Typography>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ color: 'green' }}>+1.24%</Typography>
                      <ArrowDropUpIcon sx={{ color: 'green' }} />
                    </Box>
                  </Stack>
                  <Divider />
                  <Stack
                    direction='column'
                    sx={{
                      flex: 1,
                      // background: 'lightgray',
                      p: 1.5,
                      borderRadius: '10px',
                      // opacity: '0.3',
                      backgroundColor: '#202020	',
                      boxShadow: '0 0 10px 1px rgba(0, 0, 0, 0.25)',
                      backdropFilter: 'blur(30px)',
                      width: '100%',
                    }}
                  >
                    <Typography sx={{ color: 'white', fontSize: '1.3rem' }}>Nifty</Typography>
                    <Typography sx={{ color: 'green' }}>97,68,467</Typography>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ color: 'red' }}>-0.89%</Typography>
                      <ArrowDropDown sx={{ color: 'red' }} />
                    </Box>
                  </Stack>
                </Box>
              </Box>

              {/* <FormControl sx={{ m: 1 }} size='small'>
                <Select
                  sx={{ background: 'white' }}
                  labelId='demo-select-small'
                  id='demo-select-small'
                  label='Filter'
                  value={'all'}
                >
                  <MenuItem value={'all'}>All</MenuItem>
                  <MenuItem value={'family'}>Family</MenuItem>
                </Select>
              </FormControl> */}

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'black',
                  mt: '1rem',
                  textAlign: 'center',
                }}
              >
                <Typography sx={{ color: 'white', fontWeight: '900' }}>Add Portfolio</Typography>
                <IconButton disabled={portfolios.length === 5} onClick={() => setNewPortfolio(true)}>
                  {portfolios.length === 5 ? <></> : <AddCircleOutlineOutlinedIcon color='primary' />}
                </IconButton>
              </Box>
              <Stack
                direction='column'
                spacing={1}
                sx={{
                  mx: {
                    xs: '0rem',
                    md: '0rem',
                    overflowY: `${portfolios.length > 8 ? 'scroll' : ''}`,
                    height: '320px',
                  },
                  p: 1,
                }}
              >
                {portfolios.map(port => {
                  return (
                    <SyledChip
                      key={port}
                      sx={{
                        width: '100%',
                        padding: '10px',
                        fontSize: { xs: '0.6rem', md: '0.9rem' },
                        color: '#000044',
                        background: `${port === portfolio ? 'yellow' : 'azure'}`,
                        borderRadius: '2px',
                        fontWeight: '500',
                        textAlign: 'left',
                      }}
                      label={port}
                      onClick={() => handlePortfolioClick(port)}
                    />
                  );
                })}
              </Stack>
            </Box>

            <Box
              sx={{
                background: 'whitesmoke',
                width: { xs: '100%', md: '80%' },
                // opacity: '0.8',
                // borderRadius: '10px',
              }}
            >
              <EquityTrans portfolio={portfolio} handleAddEquiTrans={handleAddEquiTrans} />
            </Box>
          </Box>
          <Box sx={{ background: '#002147' }}>
            <Copyright sx={{ mt: 2, p: 2, color: 'white' }} />
          </Box>
        </Box>
        {/* <Divider sx={{ mt: 2 }} /> */}
      </Dialog>
    </div>
  );
};

export default Transactions;
