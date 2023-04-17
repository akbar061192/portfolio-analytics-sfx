import { useState } from 'react';
import {
  Divider,
  IconButton,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  OutlinedInput,
  FormControl,
  DialogTitle,
  CloseIcon,
  Container,
  Box,
  Dialog,
  DialogContent,
} from '../../globals/common/MuiComponents';
import CustomButton from '../../globals/components/CustomButton/CustomButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Transactions from './Transactions';

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
        <Box sx={{ py: 2, px: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const NewPortfolio = props => {
  const { openNewPortfolio, handleCloseNewPortfolio, fromEquiTrans, handleAddEquiTrans } = props;
  console.log(props);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [newPortfolio, setNewPortfolio] = useState({
    pName: '',
    sgPortfolio: false,
    portfolioSubType: '',
    goal: '',
  });

  const [errors, setErrors] = useState({
    pName: '',
    sgPortfolio: false,
    portfolioSubType: '',
    goal: '',
  });

  const [openTransactions, setOpenTransactions] = useState(false);

  const handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setNewPortfolio(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });

    formValidation({
      [name]: value,
    });
  };

  const handleCreateNewAccount = async event => {
    event.preventDefault();
    const validForm = formValidation();

    console.log(fromEquiTrans);
    console.log(validForm);
    if (validForm && fromEquiTrans === 'No') {
      console.log('valid');
      setOpenTransactions(true);
    }

    if (validForm && !fromEquiTrans) {
      console.log('vadlid');
      handleAddEquiTrans(newPortfolio.pName);
    }
  };

  const formValidation = (values = newPortfolio) => {
    let errObj = {};
    if ('pName' in values) errObj.pName = values.pName ? '' : 'Required*';
    if ('sgPortfolio' in values) errObj.sgPortfolio = values.sgPortfolio ? '' : 'Required*';
    if ('portfolioSubType' in values) errObj.portfolioSubType = values.portfolioSubType ? '' : 'Required*';
    if ('goal' in values) errObj.goal = values.goal ? '' : 'Required*';

    setErrors(prevState => {
      return {
        ...prevState,
        ...errObj,
      };
    });

    return Object.values(errObj).every(value => value === '');
  };

  return (
    <>
      {openTransactions ? (
        <Transactions
          openTransactions={openTransactions}
          handleCloseTransactions={() => setOpenTransactions(false)}
          handleCloseNewPortfolio={handleCloseNewPortfolio}
        />
      ) : null}
      <Dialog
        open={openNewPortfolio}
        onClose={() => {
          setNewPortfolio({
            pName: '',
            sgPortfolio: false,
            portfolioType: '',
            portfolioSubType: '',
          });
          setErrors({
            pName: '',
            sgPortfolio: false,
            portfolioType: '',
            portfolioSubType: '',
          });
          handleCloseNewPortfolio();
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mt: '1.2rem' }}>
          <Box>
            <DialogTitle sx={{ paddingTop: 0, fontSize: '24px', fontWeight: '580', mb: 0, pb: 0 }}>
              Create Portfolio
            </DialogTitle>
            <DialogContent sx={{ m: 0, pt: 0 }}>It's quick and easy</DialogContent>
          </Box>

          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0, mr: '10px' }}
          >
            <IconButton
              sx={{ color: '#1c9bef', background: 'whitesmoke' }}
              onClick={() => {
                setNewPortfolio({
                  pName: '',
                  sgPortfolio: false,
                  portfolioType: '',
                  portfolioSubType: '',
                });
                setErrors({
                  pName: '',
                  sgPortfolio: false,
                  portfolioType: '',
                  portfolioSubType: '',
                });
                handleCloseNewPortfolio();
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ mb: 0.5 }} />

        <DialogContent sx={{ paddingTop: 0 }}>
          <Container component='main' maxWidth='xs'>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box component='form' noValidate sx={{ mt: 1 }}>
                <Box sx={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <FormControl sx={{ width: '100%' }}>
                    <OutlinedInput
                      sx={{ fontSize: '1.2rem' }}
                      placeholder='Portfolio Name*'
                      name='pName'
                      value={newPortfolio.pName}
                      onChange={handleInputChange}
                      error={errors.pName ? true : false}
                    />
                  </FormControl>
                  <FormControl
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                    // error={errors.sgPortfolio ? true : false}
                  >
                    <FormLabel id='demo-controlled-radio-buttons-group1'>
                      {`Strategy/Goal Portfolio*`}
                    </FormLabel>
                    <FormControlLabel
                      style={{ marginLeft: 0 }}
                      control={
                        <Checkbox
                          checked={newPortfolio.sgPortfolio}
                          onChange={event => {
                            setNewPortfolio(prev => {
                              return {
                                ...prev,
                                sgPortfolio: event.target.checked,
                              };
                            });
                            formValidation({
                              [event.target.name]: event.target.checked,
                            });
                          }}
                        />
                      }
                      labelPlacement='start'
                    />
                  </FormControl>
                  <br />

                  {newPortfolio.sgPortfolio ? (
                    <Box sx={{ width: '100%' }}>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                          variant='fullWidth'
                          value={value}
                          onChange={handleChange}
                          aria-label='basic tabs example'
                          centered
                        >
                          <Tab
                            style={{ color: `${errors.portfolioSubType ? 'red' : ''}` }}
                            label='Strategy'
                            {...a11yProps(0)}
                          />
                          <Tab
                            style={{ color: `${errors.goal ? 'red' : ''}` }}
                            label='Goal'
                            {...a11yProps(1)}
                          />
                        </Tabs>
                      </Box>
                      <TabPanel sx={{ width: '100%' }} value={value} index={0}>
                        <FormControl sx={{ width: '100%' }} error={errors.portfolioSubType ? true : false}>
                          <RadioGroup
                            row
                            sx={{ width: '100%' }}
                            aria-labelledby='demo-controlled-radio-buttons-group2'
                            name='portfolioSubType'
                            value={newPortfolio.portfolioSubType}
                            onChange={handleInputChange}
                          >
                            <FormControlLabel value='aggressive' control={<Radio />} label='Aggressive' />
                            <FormControlLabel value='moderate' control={<Radio />} label='Moderate' />
                            <FormControlLabel value='conservative' control={<Radio />} label='Conservative' />
                          </RadioGroup>
                        </FormControl>
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        <FormControl sx={{ width: '100%' }}>
                          <OutlinedInput
                            sx={{ fontSize: '1.2rem' }}
                            placeholder='Goal*'
                            // type='number'
                            name='goal'
                            value={newPortfolio.goal}
                            onChange={event => {
                              setNewPortfolio(prev => {
                                return {
                                  ...prev,
                                  goal: +event.target.value,
                                };
                              });
                              formValidation({
                                [event.target.name]: event.target.value,
                              });
                            }}
                            error={errors.goal ? true : false}
                          />
                        </FormControl>
                      </TabPanel>
                    </Box>
                  ) : null}
                </Box>
              </Box>
            </Box>
          </Container>
        </DialogContent>
        <Box sx={{ textAlign: 'center', my: 3, width: '80%', mx: 'auto' }}>
          <CustomButton
            backgroundColor='#002147'
            color='#fff'
            buttonText='Save'
            getStartedBtn={false}
            fullWidth={true}
            onBtnClick={handleCreateNewAccount}
          />
        </Box>
      </Dialog>
    </>
  );
};

export default NewPortfolio;
