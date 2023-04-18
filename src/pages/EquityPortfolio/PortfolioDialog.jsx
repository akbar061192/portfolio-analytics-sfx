import { forwardRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import PublishIcon from '@mui/icons-material/Publish';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import NewPortfolio from './NewPortfolio';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const PortfolioDialog = ({ openDialog, handleCloseDialog }) => {
  const [newPortfolio, setNewPortfolio] = useState(false);

  return (
    <>
      {newPortfolio ? (
        <NewPortfolio
          openNewPortfolio={newPortfolio}
          handleCloseNewPortfolio={() => setNewPortfolio(false)}
          fromEquiTrans='No'
          handleAddEquiTrans={() => {}}
        />
      ) : null}
      <Dialog maxWidth open={openDialog} onClose={handleCloseDialog} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative', background: '#002147' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box>
              <Typography sx={{ ml: 2, flex: 1 }} variant='h5' component='div'>
                Create Portfolio
              </Typography>
              {/* <Typography
                sx={{ ml: 2, flex: 1, fontSize: '0.72rem', color: 'yellow' }}
                variant='p'
                component='div'
              >
                No Portfolio's found. Please create one to get started.
              </Typography> */}
            </Box>
            <IconButton edge='end' onClick={handleCloseDialog} aria-label='close'>
              <CloseIcon style={{ color: 'white' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List
          sx={{
            height: { xs: '', md: '280px' },
            padding: '2rem',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '1rem',
          }}
        >
          <ListItem>
            <ListItemText primary='Create New Portfolio' secondary='Portfolio to add transactions' />
            <IconButton onClick={() => setNewPortfolio(true)}>
              <AddIcon sx={{ fontSize: { xs: '2.3rem', md: '5rem' }, color: '#002147' }} />
            </IconButton>
          </ListItem>
          <hr />
          <ListItem disabled>
            <ListItemText
              primary='Import holdings from file'
              secondary='Import a brokerage export file from your computer. Most positional data in .csv, .txt, .xls, .xlsx format are supported'
            />
            <IconButton disabled>
              <PublishIcon sx={{ fontSize: { xs: '2.3rem', md: '5rem' }, color: '#002147' }} />
            </IconButton>
          </ListItem>
        </List>
      </Dialog>
    </>
  );
};

export default PortfolioDialog;
