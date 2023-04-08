import { forwardRef } from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import PublishIcon from '@mui/icons-material/Publish';
import AddIcon from '@mui/icons-material/Add';
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const PortfolioDialog = ({ openDialog, handleCloseDialog }) => {
  return (
    <>
      <Dialog maxWidth open={openDialog} onClose={handleCloseDialog} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge='start' onClick={handleCloseDialog} aria-label='close'>
              <CloseIcon style={{ color: 'white' }} />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h5' component='div'>
              Create Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
        <List sx={{ padding: '2rem' }}>
          <ListItem button>
            <ListItemText
              primary='Enter Transactions'
              secondary='Enter purchases and boost or transaction amount'
            />
            <IconButton>
              <AddIcon color='primary' fontSize='large' />
            </IconButton>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary='Import holdings from file'
              secondary='Import a brokerage export file from your computer. Most positional data in .csv, .txt, .xls, .xlsx format are supported'
            />
            <IconButton>
              <PublishIcon color='primary' fontSize='large' />
            </IconButton>
          </ListItem>
        </List>
      </Dialog>
    </>
  );
};

export default PortfolioDialog;
