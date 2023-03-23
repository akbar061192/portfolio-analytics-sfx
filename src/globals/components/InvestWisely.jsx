import { styled, Typography, Stack } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useState } from 'react';
import CustomButton from '../components/CustomButton';
import CheckIcon from '@mui/icons-material/Check';
import RequestDemo from './RequestDemo';
import SnackBar from './SnackBar/SnackBar';

const CustomContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#17275F',
  height: '416px',
  borderRadius: '15px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3, 3, 0, 3),
    width: '90%',
    mb: '2rem',
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0, 10, 0),
  margin: theme.spacing(0, 2, 0, 2),
  [theme.breakpoints.down('md')]: {
    padding: '0',
    margin: '2rem 0',
  },
}));

const CustomIconBox = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  };
});

const InvestWisely = () => {
  const [openRequestDemo, setOpenRequestDemo] = useState(false);

  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');

  const handleCloseRequestDemo = () => {
    setOpenRequestDemo(false);
  };

  return (
    <>
      {openRequestDemo ? (
        <RequestDemo
          openRequestDemo={openRequestDemo}
          handleCloseRequestDemo={handleCloseRequestDemo}
          setOpenSnackBar={setOpenSnackBar}
          setSnackBarMessage={setSnackBarMessage}
        />
      ) : null}

      {openSnackBar ? (
        <SnackBar
          openSnackBar={openSnackBar}
          handleCloseSnackBar={() => setOpenSnackBar(false)}
          snackBarMessage={snackBarMessage}
        />
      ) : null}

      <CustomBox>
        <CustomContainer>
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontSize: '48px', color: 'white', fontWeight: '700', my: 3 }}>
              Works Wonder
            </Typography>

            <CustomButton
              backgroundColor='#fff'
              color='#17275F'
              buttonText='Request Demo'
              getStartedBtn={false}
              onBtnClick={() => {
                setOpenRequestDemo(true);
              }}
            />
          </Box>

          <Stack>
            <CustomIconBox>
              <CheckIcon sx={{ color: 'white' }} fontSize='large' />
              <Typography sx={{ fontSize: '24px', color: 'white', fontWeight: '700', my: 3 }}>
                Research before you invest wisely - Think different
              </Typography>
            </CustomIconBox>

            <CustomIconBox>
              <CheckIcon sx={{ color: 'white' }} fontSize='large' />
              <Typography sx={{ fontSize: '24px', color: 'white', fontWeight: '700', my: 3 }}>
                Analytics before you invest wisely - The Appetizer
              </Typography>
            </CustomIconBox>

            <CustomIconBox>
              <CheckIcon sx={{ color: 'white' }} fontSize='large' />
              <Typography sx={{ fontSize: '24px', color: 'white', fontWeight: '700', my: 3 }}>
                Analytics before you invest wisely outshines the rest
              </Typography>
            </CustomIconBox>
          </Stack>
        </CustomContainer>
      </CustomBox>
    </>
  );
};

export default InvestWisely;
