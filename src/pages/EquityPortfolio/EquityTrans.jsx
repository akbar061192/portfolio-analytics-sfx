import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import NewTransaction from './NewTransaction';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Delete, Save } from '@mui/icons-material';
import { FormControl, IconButton, MenuItem, Select } from '@mui/material';

const columns = [
  {
    field: 'company',
    headerName: 'Company Name',
    // width: 150,
    flex: 1.5,
    editable: true,
  },
  {
    field: 'transDate',
    headerName: 'Transaction Date',
    // width: 150,
    flex: 1.2,
    editable: true,
  },
  {
    field: 'transPrice',
    headerName: 'Transaction Price',
    // width: 150,
    flex: 1.2,
    editable: true,
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    // width: 150,
    flex: 1,
    editable: true,
    type: 'number',
  },
  {
    field: 'accounts',
    headerName: 'Accounts',
    // width: 150,
    flex: 1.5,
    editable: true,
    renderCell: params => {
      return (
        <>
          <FormControl fullWidth>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' label='Account'>
              <MenuItem value={'sfx'}>SFX</MenuItem>
              <MenuItem value={'raju'}>Raju</MenuItem>
              <MenuItem value={'sfx_client'}>SFX_CLIENT</MenuItem>
            </Select>
          </FormControl>
        </>
      );
    },
  },
  {
    field: 'icon',
    headerName: 'Action',
    // width: 100,
    flex: 1,
    renderCell: params => {
      return (
        <>
          <IconButton>
            <Delete color='error' />
          </IconButton>
        </>
      );
    },
  },
];

const rows = [
  { id: 1, company: 'Infosys', transDate: '11-09-2022', transPrice: 1699.89, quantity: 1, accounts: 'SFX' },
  { id: 2, company: 'Cognizant', transDate: '16-05-2021', transPrice: 3242.68, quantity: 3, accounts: 'SFX' },
  { id: 3, company: 'Wipro', transDate: '11-02-2019', transPrice: 9567.38, quantity: 5, accounts: 'SFX' },
];

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
              <Button variant='outlined' startIcon={<AddCircleOutlineOutlinedIcon />}>
                ADD TRANSACTION
              </Button>
            </Box>
            <Button color='primary' variant='contained' startIcon={<Save />}>
              SAVE TO PORTFOLIO
            </Button>
          </Box>

          <Box
            sx={{
              background: 'white',
              mr: 3,
            }}
          >
            <DataGrid
              rows={rows}
              autoHeight
              columns={columns}
              hideFooter
              hideFooterPagination
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </TabPanel>
      </Box>
    </>
  );
};

export default EquityTrans;
