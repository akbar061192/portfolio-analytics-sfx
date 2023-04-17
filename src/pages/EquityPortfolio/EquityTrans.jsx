import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import NewTransaction from './NewTransaction';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Delete } from '@mui/icons-material';
import { axiosInstance } from '../../index';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import AddTransaction from './AddTransaction';
import { styled } from '@mui/material';

const EquityTrans = ({ portfolio, handleAddEquiTrans }) => {
  const [openNewTransaction, setOpenNewTransaction] = useState(false);

  const [users, setUsers] = useState([]);

  const [addTransaction, setAddTransaction] = useState(false);
  const [newTran, setNewTran] = useState(false);
  const [singleTran, setSingleTran] = useState({});

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axiosInstance.get('https://jsonplaceholder.typicode.com/users');
        setUsers(
          response.data.map(user => {
            return {
              id: user.id,
              company: user.name,
              transDate: new Date(),
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
      // width: 250,
      flex: 1.5,
      editable: false,
    },
    {
      field: 'transDate',
      headerName: 'Transaction Date',
      // width: 250,
      flex: 1,
      editable: false,
    },
    {
      field: 'transPrice',
      headerName: 'Transaction Price',
      // width: 150,
      flex: 1,
      editable: false,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      // width: 100,
      flex: 0,
      type: 'number',
    },
    {
      field: 'accounts',
      headerName: 'Accounts',
      // width: 250,
      flex: 2,
      editable: false,
    },
    {
      field: 'icon',
      headerName: '',
      // width: 100,
      flex: 1,
      editable: false,
      renderCell: params => {
        return (
          <Box>
            <IconButton
              onClick={() => {
                const updatedUsers = users.filter(user => {
                  return user.id !== params.row.id;
                });
                setUsers(updatedUsers);
              }}
            >
              <Delete color='error' />{' '}
            </IconButton>
            <IconButton
              onClick={() => {
                setSingleTran(params.row);
                setAddTransaction(true);
                setNewTran(false);
              }}
            >
              <EditIcon color='primary' />{' '}
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const StyledButton = styled(Button)(({ theme }) => {
    return {
      '&:hover': {
        background: '#001c3d',
      },
    };
  });
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

      {addTransaction && newTran ? (
        <AddTransaction
          openAddNewTrans={addTransaction}
          handleCloseNewTrans={() => setAddTransaction(false)}
          setUsers={setUsers}
          newTran={true}
          users={users}
        />
      ) : null}

      {addTransaction && !newTran ? (
        <AddTransaction
          openAddNewTrans={addTransaction}
          handleCloseNewTrans={() => setAddTransaction(false)}
          setUsers={setUsers}
          newTran={false}
          singleTran={singleTran}
          users={users}
        />
      ) : null}

      <Box sx={{ width: '100%', m: { xs: 1, md: 0 }, p: 3 }}>
        {/* <Box>
          <Tabs value={value} onChange={handleChange}>
            <Tab label='Equity' {...a11yProps(0)} />
          </Tabs>
        </Box> */}
        <Box>
          <Box
            sx={{
              display: { xs: 'block', md: 'flex' },
              alignItems: 'center',
              justifyContent: { sx: 'center', lg: 'space-between' },
              mb: 2,
              gap: 2,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Box
              sx={{
                display: { xs: 'block', md: 'flex' },
                justifyContent: 'space-between',
                gap: 2,
                mb: { xs: 2, md: 0 },
                flexDirection: 'column',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  fontFamily: 'Kanit, sans-serif',
                  borderColor: '#002147',
                }}
              >
                Portfolio: {portfolio}
              </Typography>
              <StyledButton
                sx={{
                  background: '#002147',
                  width: { xs: '100%', md: '200px' },
                  fontSize: { xs: '0.6rem', md: '0.8rem' },
                }}
                variant='contained'
                startIcon={<AddCircleOutlineOutlinedIcon />}
                onClick={() => {
                  setAddTransaction(true);
                  setNewTran(true);
                }}
              >
                ADD TRANSACTION
              </StyledButton>
            </Box>
            {/* <Button
              sx={{ width: { xs: '100%', md: '200px' }, fontSize: { xs: '0.6rem', md: '0.8rem' } }}
              color='primary'
              variant='contained'
              startIcon={<Save />}
            >
              SAVE TO PORTFOLIO
            </Button> */}
          </Box>

          <Box
            sx={{
              background: 'white',
              // mr: 3,
              width: '100%',
              height: '500px',
            }}
            // style={{ width: '100%' }}
          >
            <DataGrid
              // autoHeight
              sx={{ color: 'black', background: 'snow' }}
              rows={users.map(user => {
                return {
                  ...user,
                  transDate: new Date(user.transDate).toLocaleDateString('en-us', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  }),
                };
              })}
              columns={columns}
              disableRowSelectionOnClick
              density='compact'
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EquityTrans;
