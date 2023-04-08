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

const NewPortfolio = props => {
  const { openNewPortfolio, handleCloseNewPortfolio } = props;

  const [newPortfolio, setNewPortfolio] = useState({
    pName: '',
    sgPortfolio: false,
    portfolioType: '',
    portfolioSubType: '',
  });

  const [errors, setErrors] = useState({
    pName: '',
    sgPortfolio: false,
    portfolioType: '',
    portfolioSubType: '',
  });

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

    if (validForm) {
      console.log('valid');
    }
  };

  const formValidation = (values = newPortfolio) => {
    let errObj = {};
    if ('pName' in values) errObj.pName = values.pName ? '' : 'Required*';
    if ('sgPortfolio' in values) errObj.sgPortfolio = values.sgPortfolio ? '' : 'Required*';
    if ('portfolioType' in values) errObj.portfolioType = values.portfolioType ? '' : 'Required*';
    if ('portfolioSubType' in values) errObj.portfolioSubType = values.portfolioSubType ? '' : 'Required*';

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
                    error={errors.sgPortfolio ? true : false}
                  >
                    <FormLabel id='demo-controlled-radio-buttons-group1'>
                      {`Strategy/Goal Portfolio${errors.portfolioType ? '*' : ''}`}
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
                          }}
                        />
                      }
                      labelPlacement='start'
                    />
                  </FormControl>
                  <br />

                  <FormControl
                    style={{
                      borderRight: `${
                        newPortfolio.sgPortfolio && newPortfolio.portfolioType ? '1px solid black' : 'none'
                      }`,
                    }}
                    error={errors.portfolioType ? true : false}
                    disabled={!newPortfolio.sgPortfolio}
                  >
                    <FormLabel id='demo-controlled-radio-buttons-group1'>
                      {`Type${errors.portfolioType ? '*' : ''}`}
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby='demo-controlled-radio-buttons-group1'
                      name='portfolioType'
                      value={newPortfolio.portfolioType}
                      onChange={handleInputChange}
                    >
                      <FormControlLabel value='strategy' control={<Radio />} label='Strategy' />
                      <FormControlLabel value='goal' control={<Radio />} label='Goal' />
                    </RadioGroup>
                  </FormControl>

                  {newPortfolio.portfolioType && newPortfolio.sgPortfolio ? (
                    <FormControl error={errors.portfolioSubType ? true : false}>
                      <FormLabel id='demo-controlled-radio-buttons-group2'>
                        {`Sub Type${errors.portfolioSubType ? '*' : ''}`}
                      </FormLabel>
                      <RadioGroup
                        column
                        aria-labelledby='demo-controlled-radio-buttons-group2'
                        name='portfolioSubType'
                        value={newPortfolio.portfolioSubType}
                        onChange={handleInputChange}
                      >
                        <FormControlLabel value='aggressive' control={<Radio />} label='Aggressive' />
                        <br />
                        <FormControlLabel value='moderate' control={<Radio />} label='Moderate' />
                        <br />
                        <FormControlLabel value='conservative' control={<Radio />} label='Conservative' />
                      </RadioGroup>
                    </FormControl>
                  ) : null}
                </Box>
              </Box>
            </Box>
          </Container>
        </DialogContent>
        <Box sx={{ textAlign: 'center', my: 3, width: '80%', mx: 'auto' }}>
          <CustomButton
            backgroundColor='#1c9bef'
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
