import { styled, Typography, Stack, Box, Container, CheckIcon } from '../../common/MuiComponents';
import { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import RequestDemo from './RequestDemo';

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

const InvestWisely = props => {
  const { setOpenSnackBar, setSnackBarMessage } = props;
  const [openRequestDemo, setOpenRequestDemo] = useState(false);

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
