import { Button, styled } from '@mui/material';

const CustomButton = props => {
  const { backgroundColor, color, buttonText, heroBtn, guideBtn, getStartedBtn } = props;

  const CustomBtn = styled(Button)(({ theme }) => {
    return {
      backgroundColor: backgroundColor,
      color: color,
      fontSize: '14px',
      fontWeight: '700',
      cursor: 'pointer',
      padding: '0.5rem 1.25rem',
      borderRadius: '7px',
      textTransform: 'none',
      border: '2px solid transparent',
      '&:hover': {
        backgroundColor: color,
        color: backgroundColor,
        borderColor: backgroundColor,
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

  return <CustomBtn>{buttonText}</CustomBtn>;
};

export default CustomButton;
