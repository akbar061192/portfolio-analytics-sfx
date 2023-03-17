import { Button, styled } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoginIcon from '@mui/icons-material/Login';

const CustomButton = props => {
  const { backgroundColor, color, buttonText, heroBtn, guideBtn, getStartedBtn } = props;

  const buttonIcon =
    buttonText === 'Login' ? <LoginIcon /> : buttonText === 'More About Us' ? <ArrowForwardIcon /> : null;

  const CustomBtn = styled(Button)(({ theme }) => {
    return {
      backgroundColor: backgroundColor,
      color: color,
      fontSize: '16px',
      fontWeight: '700',
      cursor: 'pointer',
      padding: `${buttonText === 'Login' ? '0.3rem' : '0.5rem'} 1.25rem`,
      borderRadius: '7px',
      textTransform: 'none',
      border: '2px solid transparent',
      transition: `${buttonText === 'Login' ? '' : 'all .6s ease-in-out'}`,
      '&:hover': {
        backgroundColor: color,
        color: backgroundColor,
        borderColor: backgroundColor,
        transform: `${buttonText === 'Login' ? '' : 'scale(1.1)'}`,
      },
      [theme.breakpoints.down('md')]: {
        margin: (heroBtn || getStartedBtn) && theme.spacing(0, 'auto', 3, 'auto'),
        width: (heroBtn || getStartedBtn) && '90%',
      },
      [theme.breakpoints.down('sm')]: {
        margin: guideBtn && theme.spacing(3),
        width: guideBtn && '90%',
      },
    };
  });

  return <CustomBtn endIcon={buttonIcon}>{buttonText}</CustomBtn>;
};

export default CustomButton;
