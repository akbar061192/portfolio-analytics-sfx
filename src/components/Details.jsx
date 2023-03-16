import { styled, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import houseCard from '../media/invest4.jpg';

const Details = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(10),
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    color: '#000',
    fontWeight: '700',
    [theme.breakpoints.down('md')]: {
      fontSize: '32px',
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    color: '#7B8087',
    fontWeight: '500',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: theme.spacing(5),
    },
  }));

  const Divider = styled('div')(({ theme }) => ({
    width: '13%',
    height: '5px',
    backgroundColor: '#000339',
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }));

  return (
    <Box sx={{ py: 10, backgroundColor: '#F5FAFE' }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img src={houseCard} alt='invest' style={{ maxWidth: '100%' }} />
          </ImgContainer>

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: '35px',
                color: '#000339',
                fontWeight: '700',
                my: 3,
              }}
            >
              Invest Wisely
            </Typography>

            <Typography
              sx={{
                fontSize: '16px',
                color: '#5A6473',
                lineHeight: '27px',
                textAlign: 'justify',
              }}
            >
              With FYINNOVEA portfolio management web platform & mobile apps, monitor your investments easily
              from anywhere and at any time As the market changes, you may need to make changes in your
              investment goals, allocation, diversification/concentration & timely monitoring your investments
              using high benchmarks & decision based on data analytics
            </Typography>
          </Box>
        </CustomBox>

        <TextFlexbox>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <LargeText>100+</LargeText>
            <SmallText>Investors</SmallText>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <LargeText>500+</LargeText>
            <SmallText>Successful Investments</SmallText>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <LargeText>200+</LargeText>
            <SmallText>Reviews</SmallText>
          </Box>
        </TextFlexbox>
      </Container>
    </Box>
  );
};

export default Details;
