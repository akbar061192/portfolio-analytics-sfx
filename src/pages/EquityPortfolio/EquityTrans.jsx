import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { IconButton } from '@mui/material';
import NewTransaction from './NewTransaction';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const EquityTrans = ({ portfolio, handleAddEquiTrans }) => {
  const [value, setValue] = useState(0);
  const [openNewTransaction, setOpenNewTransaction] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {openNewTransaction ? (
        <NewTransaction
          openNewTransaction={openNewTransaction}
          fromEquiTrans={'Yes'}
          handleAddEquiTrans={handleAddEquiTrans}
          handleCloseNewTransaction={() => setOpenNewTransaction(false)}
        />
      ) : null}
      <Box sx={{ width: '100%', m: 2 }}>
        <Box>
          <Tabs value={value} onChange={handleChange}>
            <Tab label='Equity' {...a11yProps(0)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography>{portfolio}</Typography>
          <IconButton
            sx={{ borderRadius: 2, background: 'lightgray' }}
            onClick={() => {
              setOpenNewTransaction(true);
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '10px',
              }}
            >
              <AddCircleOutlineOutlinedIcon color='primary' />
              <Typography>Add a transaction</Typography>
            </Box>
          </IconButton>
        </TabPanel>
      </Box>
    </>
  );
};

export default EquityTrans;
