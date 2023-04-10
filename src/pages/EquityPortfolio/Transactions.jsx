import * as React from 'react';
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const Transactions = ({ openTransactions, handleCloseTransactions, handleCloseNewPortfolio }) => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
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
  const [newPortfolio, setNewPortfolio] = React.useState(false);

  return (
    <div>
      {newPortfolio ? (
        <NewPortfolio
          openNewPortfolio={newPortfolio}
          handleCloseNewPortfolio={() => setNewPortfolio(false)}
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            m: 2,
            gap: '10px',
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
              flex: 1,
              gap: '0.8rem',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '10px',
              background: '#F0FFFF',
              p: 3,
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
              <IconButton onClick={() => setNewPortfolio(true)}>
                <AddCircleOutlineOutlinedIcon color='primary' />
              </IconButton>
            </Box>
            <Stack direction='column' spacing={1} sx={{ mx: { xs: '0rem', md: '1rem' } }}>
              <Chip sx={{ p: 3, fontSize: '1rem' }} label='SFX' onClick={handleClick} />
              <Chip
                sx={{ p: 3, fontSize: '1rem', background: '#CD5c' }}
                label='RAJU'
                variant='filled'
                onClick={handleClick}
              />
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
              // background: '#B0C4DE',
              background: 'whitesmoke',
              flex: 4,
              opacity: '0.8',
              borderRadius: '10px',
            }}
          >
            <EquityTrans />
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};

export default Transactions;
