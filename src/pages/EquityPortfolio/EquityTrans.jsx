import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import NewTransaction from './NewTransaction';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Save, Delete } from '@mui/icons-material';
import { axiosInstance } from '../../index';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import AddTransaction from './AddTransaction';

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

  const [users, setUsers] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axiosInstance.get('https://jsonplaceholder.typicode.com/users');
        setUsers(
          response.data.map(user => {
            return {
              id: user.id,
              company: user.name,
              transDate: new Date().toLocaleString().slice(0, 10),
              transPrice: (Math.random() * 10000).toFixed(3),
              quantity: (Math.random() * 10 + 1).toFixed(0),
              accounts: user.website,
            };
          })
        );
      } catch (error) {
        return error;
      }
    };
    apiCall();
  }, []);

  const columns = [
    {
      field: 'company',
      headerName: 'Company Name',
      width: 250,
      editable: false,
    },
    {
      field: 'transDate',
      headerName: 'Transaction Date',
      width: 250,
      editable: false,
    },
    {
      field: 'transPrice',
      headerName: 'Transaction Price',
      width: 150,
      editable: false,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      width: 150,
      type: 'number',
    },
    {
      field: 'accounts',
      headerName: 'Accounts',
      width: 150,
      editable: false,
    },
    {
      field: 'icon',
      headerName: 'Action',
      width: 100,
      editable: false,
      renderCell: params => {
        return (
          <>
            <IconButton>
              <Delete color='error' />{' '}
            </IconButton>
            <IconButton>
              <EditIcon color='primary' />{' '}
            </IconButton>
          </>
        );
      },
    },
  ];

  const [addTransaction, setAddTransaction] = useState(false);

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

      {addTransaction ? (
        <AddTransaction
          openAddNewTrans={addTransaction}
          handleCloseNewTrans={() => setAddTransaction(false)}
          setUsers={setUsers}
        />
      ) : null}

      <Box sx={{ width: '100%', m: { xs: 1, md: 2 } }}>
        <Box>
          <Tabs value={value} onChange={handleChange}>
            <Tab label='Equity' {...a11yProps(0)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box
            sx={{
              display: { xs: 'block', md: 'flex' },
              alignItems: 'center',
              justifyContent: { sx: 'center', lg: 'space-between' },
              mb: 2,
              gap: 2,
              textAlign: { xs: 'center' },
            }}
          >
            <Box
              sx={{
                display: { xs: 'block', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                mb: { xs: 2, md: 0 },
              }}
            >
              <Typography>{portfolio}</Typography>
              <Button
                sx={{ width: { xs: '100%', md: '200px' }, fontSize: { xs: '0.6rem', md: '0.8rem' } }}
                variant='outlined'
                startIcon={<AddCircleOutlineOutlinedIcon />}
                onClick={() => setAddTransaction(true)}
              >
                ADD TRANSACTION
              </Button>
            </Box>
            <Button
              sx={{ width: { xs: '100%', md: '200px' }, fontSize: { xs: '0.6rem', md: '0.8rem' } }}
              color='primary'
              variant='contained'
              startIcon={<Save />}
            >
              SAVE TO PORTFOLIO
            </Button>
          </Box>

          <Box
            sx={{
              background: 'white',
              mr: 3,
              width: '100%',
            }}
            style={{ height: `475px`, width: '100%' }}
          >
            <DataGrid
              sx={{ color: 'black', background: 'snow' }}
              rows={users}
              columns={columns}
              disableRowSelectionOnClick
            />
          </Box>
        </TabPanel>
      </Box>
    </>
  );
};

export default EquityTrans;
