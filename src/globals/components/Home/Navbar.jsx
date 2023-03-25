import { useEffect, useState } from 'react';
import fyinnoveaLogo from '../../../media/fyinnoveaLogo.png';
import CustomButton from '../CustomButton/CustomButton';
import {
  Box,
  Typography,
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  MenuIcon,
  FeaturedPlayListIcon,
  ListAltIcon,
  HomeIcon,
  ContactsIcon,
  MiscellaneousServicesIcon,
} from '../../common/MuiComponents';
import { Container } from '@mui/system';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';

const NavLink = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: '#4F5361',
  fontWeight: 'bold',
  cursor: 'pointer',
  '&:hover': {
    color: '#0F1B4C',
    borderBottom: '2px solid green',
  },
}));

const NavbarLinksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
  cursor: 'pointer',
  display: 'none',
  color: 'black',
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('lg')]: {
    display: 'block',
  },
}));

const NavbarLogo = styled('img')(({ theme }) => ({
  cursor: 'pointer',
  width: '250px',
}));

export const Navbar = props => {
  const { setOpenSnackBar, setSnackBarMessage, setOpenWelcomeModal } = props;

  const [mobileMenu, setMobileMenu] = useState({
    right: false,
  });

  const [openLogin, setOpenLogin] = useState(false);

  const handleLoginClose = () => {
    setOpenLogin(false);
  };

  const handleLoginOpen = () => {
    setOpenLogin(true);
  };

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.type === 'Tab' || event.type === 'Shift')) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = anchor => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['What we do', 'Research', 'Consulting', 'Market Place', 'Partner with us', 'Connect us'].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <FeaturedPlayListIcon />}
                  {index === 2 && <MiscellaneousServicesIcon />}
                  {index === 3 && <ListAltIcon />}
                  {index === 4 && <ContactsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const [scrolled, setScrolled] = useState(false);

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'white',
    padding: `${scrolled ? theme.spacing(1) : theme.spacing(4)}`,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
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

  return (
    <>
      {openLogin ? (
        <Login
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
          handleLoginClose={handleLoginClose}
          setOpenSnackBar={setOpenSnackBar}
          setSnackBarMessage={setSnackBarMessage}
          setOpenWelcomeModal={setOpenWelcomeModal}
        />
      ) : null}

      <AppBar
        style={{
          position: 'fixed',
          top: 0,
          background: 'white',
        }}
        elevation={scrolled ? 3 : 0}
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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Drawer anchor='right' open={mobileMenu['right']} onClose={toggleDrawer('right', false)}>
                {list('right')}
              </Drawer>
              <NavbarLogo src={fyinnoveaLogo} alt='logo' />
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            <NavbarLinksBox>
              <Link to={'/whatWeDo'} style={{ textDecoration: 'none' }}>
                <NavLink variant='body2'>What we do</NavLink>
              </Link>
              <NavLink variant='body2'>Research</NavLink>
              <NavLink variant='body2'>Consulting</NavLink>
              <NavLink variant='body2'>Market Place</NavLink>
              <NavLink variant='body2'>Partner with us</NavLink>
              <NavLink variant='body2'>Connect us</NavLink>
            </NavbarLinksBox>
            <CustomButton
              backgroundColor='#1c9bef'
              color='#fff'
              buttonText='Login'
              onBtnClick={handleLoginOpen}
            />
            <CustomMenuIcon onClick={toggleDrawer('right', true)} />
          </Box>
        </NavbarContainer>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;