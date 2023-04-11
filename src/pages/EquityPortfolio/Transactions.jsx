import { useState, forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {
  Box,
  Divider,
  Stack,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Chip,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import fyinnovea from '../../media/fyinnoveaLogo.png';
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

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

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

  const userPortfolios = ['SFX', 'Raju', 'SFX_CLIENT'];
  const [portfolios, setPortfolios] = useState(userPortfolios);
  const [portfolio, setPortfolio] = useState('');

  const handlePortfolioClick = portfolio => {
    console.log(portfolio);
    setPortfolio(portfolio);
  };

  const handleAddEquiTrans = name => {
    setPortfolios(prev => {
      return [...prev, name];
    });
  };

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
        <AppBar sx={{ position: 'relative', background: 'white' }}>
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
                <CloseIcon color='primary' />
              </IconButton>

              <img src={fyinnovea} style={{ width: '240px' }} alt='logo' />
            </Box>

            <Box>
              <MenuItem
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '10px',
                  p: 1.5,
                  background: 'lightgray',
                  borderRadius: '10px',
                }}
              >
                <PersonIcon sx={{ color: '#1c9bef' }} />
                <Typography sx={{ color: '#1c9bef' }}>SFX USER</Typography>
              </MenuItem>
            </Box>
          </Toolbar>
        </AppBar>
        <Box sx={{ background: 'whitesmoke', p: 2 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              m: 2,
              gap: '10px',
              background: 'white',
            }}
          >
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
                color='secondary'
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

            <FormControl variant='outlined' sx={{ width: { xs: '250px', md: '400px' } }}>
              <OutlinedInput
                placeholder='Search Portfolios...'
                startAdornment={<InputAdornment position='start'>{<SearchIcon />}</InputAdornment>}
              />
            </FormControl>
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
                flex: 0,
                gap: '0.8rem',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '10px',
                // background: '#F0FFFF',
                background: 'white',
                p: 3,
              }}
            >
              <Box>
                <Box
                  sx={{
                    gap: '0.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Stack
                    direction='column'
                    sx={{ flex: 1, background: 'lightgray', p: 1.5, borderRadius: '10px' }}
                  >
                    <Typography sx={{ color: 'black', fontSize: '1.3rem' }}>Sensex</Typography>
                    <Typography sx={{ color: 'green' }}>35,88,234</Typography>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ color: 'green' }}>+1.24%</Typography>
                      <ArrowDropUpIcon sx={{ color: 'green' }} />
                    </Box>
                  </Stack>
                  <Divider />
                  <Stack
                    direction='column'
                    sx={{ flex: 1, background: 'lightgray', p: 1.5, borderRadius: '10px' }}
                  >
                    <Typography sx={{ color: 'black', fontSize: '1.3rem' }}>Nifty</Typography>
                    <Typography sx={{ color: 'green' }}>97,68,467</Typography>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ color: 'red' }}>-0.89%</Typography>
                      <ArrowDropDown sx={{ color: 'red' }} />
                    </Box>
                  </Stack>
                </Box>

                {/* <Box sx={{ background: 'white', p: 1 }}>
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
               </Box> */}
              </Box>

              <FormControl sx={{ m: 1 }} size='small'>
                <InputLabel id='demo-select-small'>Filter</InputLabel>
                <Select labelId='demo-select-small' id='demo-select-small' label='Filter' value={'all'}>
                  <MenuItem value={'all'}>All</MenuItem>
                  <MenuItem value={'family'}>Family</MenuItem>
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
                <IconButton onClick={() => setNewPortfolio(true)}>
                  <AddCircleOutlineOutlinedIcon color='primary' />
                </IconButton>
              </Box>
              <Stack direction='column' spacing={1} sx={{ mx: { xs: '0rem', md: '1rem' } }}>
                {portfolios.map(portfolio => {
                  return (
                    <Chip
                      key={portfolio}
                      sx={{ p: 2.5, fontSize: '1.1rem' }}
                      label={portfolio}
                      onClick={() => handlePortfolioClick(portfolio)}
                    />
                  );
                })}

                {/* <Chip sx={{ p: 3, fontSize: '1rem' }} label='SFX' onClick={handleClick} />
              <Chip sx={{ p: 3, fontSize: '1rem' }} label='RAJU' variant='filled' onClick={handleClick} />
              <Chip
                sx={{ p: 3, fontSize: '1rem' }}
                label='SFX_CLIENT'
                variant='filled'
                onClick={handleClick}
              />
              <Chip sx={{ p: 3, fontSize: '1rem' }} label='UMESH' variant='filled' onClick={handleClick} />
              <Chip sx={{ p: 3, fontSize: '1rem' }} label='SFX_USER' variant='filled' onClick={handleClick} />  */}
              </Stack>
            </Box>

            <Box
              sx={{
                // background: '#B0C4DE',
                background: 'white',
                flex: 1,
                opacity: '0.8',
                borderRadius: '10px',
              }}
            >
              <EquityTrans portfolio={portfolio} handleAddEquiTrans={handleAddEquiTrans} />
            </Box>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};

export default Transactions;
