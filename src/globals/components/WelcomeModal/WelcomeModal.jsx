import { Box, Divider, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  p: 4,
};

const WelcomeModal = ({ openModal, handleCloseModal }) => {
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography
          id='modal-modal-title'
          variant='h6'
          component='h2'
          sx={{ textAlign: 'center', color: '#1c9bef' }}
        >
          Congratulations and Welcome to FYINNOVEA Family!
        </Typography>
        <Divider sx={{ mt: 2 }} />
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Please see the verification email sent to you to activate your account.
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Tip: If you do not receive a verification email, check your email spam folder for a message from
          mahalingaraju@FYINNOVEA.com
        </Typography>
      </Box>
    </Modal>
  );
};

export default WelcomeModal;
