import { Alert, Snackbar } from '../../common/MuiComponents';

const SnackBar = props => {
  const { openSnackBar, handleCloseSnackBar, snackBarMessage } = props;

  return (
    <>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackBar} severity='success' sx={{ width: '100%' }}>
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBar;
