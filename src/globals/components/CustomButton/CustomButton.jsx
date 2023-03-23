import {
  Button,
  styled,
  ArrowForwardIcon,
  LoginIcon,
  ConstructionIcon,
  AccountBalanceIcon,
} from '../../common/MuiComponents';

const CustomButton = props => {
  const { backgroundColor, color, buttonText, heroBtn, onBtnClick, fullWidth } = props;

  const buttonIcon =
    buttonText === 'Login' ? (
      <LoginIcon />
    ) : buttonText === 'More About Us' ? (
      <ArrowForwardIcon />
    ) : buttonText === 'Request Demo' ? (
      <ConstructionIcon />
    ) : buttonText === 'Create new account' ? (
      <AccountBalanceIcon />
    ) : null;

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
      transition: `${buttonText === 'Begin Now' ? 'all .6s ease-in-out' : 'none'}`,
      '&:hover': {
        backgroundColor: color,
        color: backgroundColor,
        borderColor: backgroundColor,
        transform: `${buttonText === 'Begin Now' ? 'scale(1.1)' : 'none'}`,
      },
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(0, 'auto', 3, 'auto'),
        width: '90%',
      },
      [theme.breakpoints.down('sm')]: {
        margin: !heroBtn && theme.spacing(3),
        width: !heroBtn && '90%',
      },
    };
  });

  return (
    <CustomBtn fullWidth={fullWidth} onClick={onBtnClick} endIcon={buttonIcon}>
      {buttonText}
    </CustomBtn>
  );
};

export default CustomButton;
