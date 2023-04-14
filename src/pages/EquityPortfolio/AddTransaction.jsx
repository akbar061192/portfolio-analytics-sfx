import { TextField, Autocomplete, Select, MenuItem, InputLabel } from '@mui/material';
import { useState, useEffect } from 'react';
import {
  Divider,
  IconButton,
  OutlinedInput,
  FormControl,
  DialogTitle,
  CloseIcon,
  Container,
  Box,
  Dialog,
  DialogContent,
} from '../../globals/common/MuiComponents';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import { axiosInstance } from '../../index';

const AddTransaction = props => {
  const { openAddNewTrans, handleCloseNewTrans, setUsers, newTran, singleTran, users } = props;

  const [users1, setUsers1] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axiosInstance.get('https://jsonplaceholder.typicode.com/users');
        setUsers1(response.data);
      } catch (error) {
        return error;
      }
    };
    apiCall();
  }, []);

  const ff = !newTran && new Date(singleTran.transDate).toLocaleDateString().split('/');
  const dateFormat = `${ff[1]}/${ff[0]}/${ff[2]}`;

  const [newTrans, setNewTrans] = useState({
    company: newTran ? '' : singleTran.company,
    transDate: newTran ? '' : dayjs(dateFormat),
    transPrice: newTran ? '' : singleTran.transPrice,
    quantity: newTran ? '' : singleTran.quantity,
    account: newTran ? '' : singleTran.accounts,
  });

  const handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setNewTrans(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleAddNewTrans = () => {
    if (newTran) {
      setUsers(prev => {
        return [
          {
            id: Math.random(),
            company: newTrans.company,
            transDate: dayjs(new Date(newTrans.transDate)),
            transPrice: newTrans.transPrice,
            quantity: newTrans.quantity,
            accounts: newTrans.account,
          },
          ...prev,
        ];
      });
    } else {
      const updatedUsers = users.map(user => {
        if (user.id === singleTran.id) {
          return {
            id: user.id,
            company: newTrans.company,
            transDate: dayjs(new Date(newTrans.transDate)),
            transPrice: newTrans.transPrice,
            quantity: newTrans.quantity,
            accounts: newTrans.account,
          };
        }
        return user;
      });
      setUsers(updatedUsers);
    }

    setNewTrans({
      company: '',
      transDate: '',
      transPrice: '',
      quantity: '',
      account: '',
    });
    handleCloseNewTrans();
  };

  const requiredChk = Object.values(newTrans).every(val => val !== '');

  return (
    <>
      <Dialog
        open={openAddNewTrans}
        onClose={() => {
          setNewTrans({
            company: '',
            transDate: '',
            transPrice: '',
            quantity: '',
            account: '',
          });
          handleCloseNewTrans();
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mt: '1.2rem' }}>
          <Box>
            <DialogTitle sx={{ paddingTop: 0, fontSize: '24px', fontWeight: '580', mb: 0, pb: 0 }}>
              {newTran ? 'New Transaction' : 'Edit Transaction'}
            </DialogTitle>
            <DialogContent sx={{ m: 0, pt: 0 }}></DialogContent>
          </Box>

          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0, mr: '10px' }}
          >
            <IconButton
              sx={{ color: '#1c9bef', background: 'whitesmoke' }}
              onClick={() => {
                setNewTrans({
                  company: '',
                  transDate: '',
                  transPrice: '',
                  quantity: 0,
                  account: '',
                });
                handleCloseNewTrans();
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ mb: 0.5 }} />

        <DialogContent sx={{ paddingTop: 0 }}>
          <Container>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box component='form' noValidate sx={{ mt: 1 }}>
                <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <FormControl sx={{ width: '100%' }}>
                    <Autocomplete
                      fullWidth
                      sx={{ border: newTrans.company ? '' : '1px solid red' }}
                      name='company'
                      value={newTrans.company}
                      onChange={(event, newValue) => {
                        setNewTrans(prev => {
                          return {
                            ...prev,
                            company: newValue,
                          };
                        });
                      }}
                      options={users1.map(user => user.name)}
                      renderInput={params => <TextField {...params} label='Company*' />}
                    />
                  </FormControl>

                  <Box
                    sx={{
                      display: { xs: 'block', md: 'flex' },
                      gap: '10px',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <FormControl sx={{ width: '100%' }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                          <DatePicker
                            format='LL'
                            sx={{ width: '100%' }}
                            name='transDate'
                            value={dayjs(newTrans.transDate)}
                            onChange={newValue =>
                              setNewTrans(prev => {
                                return {
                                  ...prev,
                                  transDate: newValue.format(),
                                };
                              })
                            }
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </FormControl>
                    <FormControl sx={{ width: '100%', marginTop: '6px' }}>
                      <OutlinedInput
                        sx={{ fontSize: '1.2rem' }}
                        name='transPrice'
                        placeholder='Transaction Price*'
                        value={newTrans.transPrice}
                        onChange={handleInputChange}
                        error={!newTrans.transPrice ? true : false}
                      />
                    </FormControl>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '10px',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <FormControl sx={{ width: '100%', marginTop: '6px' }}>
                      <OutlinedInput
                        fullWidth
                        sx={{ width: '100%', fontSize: '1.2rem' }}
                        name='quantity'
                        placeholder='Quantity*'
                        value={newTrans.quantity}
                        onChange={handleInputChange}
                        error={!newTrans.quantity ? true : false}
                      />
                    </FormControl>

                    <FormControl sx={{ width: '100%', marginTop: '6px' }}>
                      <InputLabel id='demo-simple-select-label'>Account</InputLabel>
                      <Select
                        sx={{ width: '100%' }}
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={newTrans.account}
                        label='Account'
                        name='account'
                        onChange={handleInputChange}
                        error={!newTrans.account ? true : false}
                      >
                        {users1.map(user => {
                          return (
                            <MenuItem key={user.id} value={user.website}>
                              {user.website}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </DialogContent>
        <Box sx={{ textAlign: 'center', my: 3, width: '80%', mx: 'auto' }}>
          <Button
            sx={{ p: 1 }}
            fullWidth
            variant='contained'
            disabled={!requiredChk}
            onClick={handleAddNewTrans}
          >
            SAVE TO PORTFOLIO
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default AddTransaction;
