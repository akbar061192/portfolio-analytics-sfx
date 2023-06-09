import { Box, styled, Typography, Tooltip } from '../../common/MuiComponents';
import analysis from '../../../media/analysis.png';
import dashboard from '../../../media/dashboard.png';
import tech from '../../../media/tech.png';

const HowWorks = () => {
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
    transition: 'all .6s ease-in-out',
    '&:hover': {
      transform: 'scale(1.3)',
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
        background: 'whitesmoke',
        paddingTop: '20px',
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
        <Tooltip title='Analyze your holdings at a portfolio level, with data & actionable insights'>
          <GuideBox>
            <img src={analysis} alt='analysis' />
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
          </GuideBox>
        </Tooltip>

        <Tooltip
          title='Custom analytics dashboards for your cloud collaboration portfolio & predict future with Trend analysis techniques

'
        >
          <GuideBox>
            <img src={dashboard} alt='dashboard' />
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
          </GuideBox>
        </Tooltip>

        <Tooltip title='Benefit from robust technology investment and potential to drive investment transformation ranging from mobile accessibility to an easy-to-use API'>
          <GuideBox>
            <img src={tech} alt='tech' />
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
          </GuideBox>
        </Tooltip>
      </GuidesBox>
    </Box>
  );
};

export default HowWorks;
