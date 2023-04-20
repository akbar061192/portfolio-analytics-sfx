import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Button from '@mui/material/Button';
import { axiosInstance } from '../../index';
import { styled } from '@mui/material';
import { DataGrid, useGridApiContext, useGridApiRef } from '@mui/x-data-grid';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Save, Delete } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

const EquityTrans = ({ portfolio }) => {
  const apiRefMain = useGridApiRef();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axiosInstance.get('https://jsonplaceholder.typicode.com/users');
        setUsers(
          response.data.map(user => {
            const maxDate = Date.now();
            const date = Math.floor(Math.random() * maxDate);
            return {
              id: date,
              company: user.name,
              transDate: new Date(date),
              transPrice: (Math.random() * 10000).toFixed(3),
              quantity: +(Math.random() * 10 + 1).toFixed(0),
              accounts: user.website,
            };
          })
        );
      } catch (error) {
        return error;
      }
    };
    apiCall();
  }, [portfolio]);

  const StyledButton = styled(Button)(({ theme }) => {
    return {
      '&:hover': {
        background: '#001c3d',
      },
    };
  });

  function ControllableStates(props) {
    const [inputValue, setInputValue] = useState('');

    const { id, value, field } = props;
    const apiRef = useGridApiContext();
    const handleChange = async (event, val) => {
      await apiRef.current.setEditCellValue({ id, field, value: val });
      apiRef.current.stopCellEditMode({ id, field });
    };

    return (
      <>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            handleChange(event, newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id='controllable-states-demo'
          options={users.map(user => user.company)}
          sx={{ width: '100%' }}
          renderInput={params => <TextField {...params} />}
        />
      </>
    );
  }

  const renderAutoEditInputCell = params => {
    return <ControllableStates {...params} />;
  };

  function SelectEditInputCell(props) {
    const { id, value, field } = props;
    const apiRef = useGridApiContext();
    const handleChange = async event => {
      await apiRef.current.setEditCellValue({ id, field, value: event.target.value });
      apiRef.current.stopCellEditMode({ id, field });
    };

    return (
      <Select value={value} onChange={handleChange} sx={{ height: 1, width: '100%' }} native autoFocus>
        {users
          .map(user => {
            return <option>{user.accounts}</option>;
          })
          .slice(0, 5)}
      </Select>
    );
  }

  const renderSelectEditInputCell = params => {
    return <SelectEditInputCell {...params} />;
  };

  const columns = [
    {
      field: 'company',
      headerName: 'Company',
      renderEditCell: renderAutoEditInputCell,
      editable: true,
      flex: 1.5,
      headerClassName: 'super-app-theme--header',
    },

    {
      field: 'transPrice',
      headerName: 'Transaction Price',
      flex: 1,
      editable: true,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      flex: 1,
      type: 'number',
      editable: true,
      headerClassName: 'super-app-theme--header',
    },

    {
      field: 'transDate',
      headerName: 'Transaction Date',
      type: 'date',
      flex: 1,
      editable: true,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'accounts',
      headerName: 'Accounts',
      renderEditCell: renderSelectEditInputCell,
      editable: true,
      flex: 3,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'icon',
      headerName: 'Action',
      flex: 1,
      editable: false,
      headerClassName: 'super-app-theme--header',
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
              <Delete color='error' />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const addNewTransaction = () => {
    const rowsDataMapUpdated = apiRefMain?.current?.getRowModels();
    const selectedRowsUpdate = rowsDataMapUpdated && Array.from(rowsDataMapUpdated, ([key, value]) => value);
    const maxId = selectedRowsUpdate && Math.max(...selectedRowsUpdate.map(id => id.id));

    selectedRowsUpdate
      ? setUsers([
          ...selectedRowsUpdate,
          {
            company: '',
            transPrice: '',
            quantity: '',
            accounts: '',
            transDate: new Date(),
            id: maxId ? maxId + 100 : 100,
            key: 'insert',
          },
        ])
      : setUsers([
          ...users,
          {
            company: '',
            transPrice: '',
            quantity: '',
            accounts: '',
            transDate: new Date(),
            id: maxId ? maxId + 100 : 100,
            key: 'insert',
          },
        ]);
  };

  const saveTransToPortfolio = () => {
    const rowsDataMapUpdated = apiRefMain?.current?.getRowModels();
    const selectedRowsUpdate = rowsDataMapUpdated && Array.from(rowsDataMapUpdated, ([key, value]) => value);
    console.log(selectedRowsUpdate);
  };

  return (
    <>
      <Box sx={{ width: '100%', m: { xs: 1, md: 0 }, p: 3 }}>
        <Box>
          <Box
            sx={{
              display: { xs: 'block', md: 'flex' },
              alignItems: 'center',
              justifyContent: { sx: 'center', lg: 'space-between' },
              mb: 2,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Box
              sx={{
                display: { xs: 'block', md: 'flex' },
                justifyContent: 'space-between',
                mb: { xs: 2, md: 0 },
                flexDirection: 'row',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.6rem',
                  fontWeight: 'bold',
                  fontFamily: 'Kanit, sans-serif',
                  color: '#007791',
                  width: { xs: '100%', md: '180px' },
                }}
              >
                {portfolio}
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
                  addNewTransaction();
                }}
              >
                ADD TRANSACTION
              </StyledButton>
            </Box>
            <StyledButton
              color='primary'
              sx={{
                width: { xs: '100%', md: '200px' },
                fontSize: { xs: '0.6rem', md: '0.85rem' },
                ':hover': {
                  // background: 'blue',
                },
              }}
              variant='contained'
              startIcon={<Save />}
              onClick={() => {
                saveTransToPortfolio();
              }}
            >
              SAVE TO PORTFOLIO
            </StyledButton>
          </Box>
        </Box>

        <Box
          sx={{
            background: 'white',
            width: '100%',
            height: '500px',
            '& .super-app-theme--header': {
              backgroundColor: 'rgba(255, 7, 0, 0.30)',
            },
            '& .new': {
              backgroundColor: 'rgba(255, 7, 0, 0.10)',
              ':hover': {
                backgroundColor: 'rgba(255, 7, 0, 0.15)',
              },
            },
            // '& .old': {
            //   backgroundColor: 'rgba(255, 7, 0, 0.20)',
            // },
          }}
        >
          <DataGrid
            disableRowSelectionOnClick
            density='compact'
            apiRef={apiRefMain}
            editMode='row'
            rows={users}
            columns={columns}
            getRowClassName={params => {
              console.log(params);
              return params.row.key === 'insert' ? 'new' : 'old';
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default EquityTrans;
