import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Divider, IconButton, OutlinedInput, FormControl, DialogTitle } from '@mui/material';
import CustomButton from '../components/CustomButton';
import CloseIcon from '@mui/icons-material/Close';

const RequestDemo = props => {
  const { openRequestDemo, handleCloseRequestDemo } = props;

  const [userInputs, setUserInputs] = useState({
    name: '',
    email: '',
    mobile: '',
    website: '',
    profession: '',
  });

  const [userErrors, setUseruserErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    profession: '',
  });

  const formValidation = (values = userInputs) => {
    let errObj = {};
    if ('name' in values) errObj.name = values.name ? '' : 'Required*';
    if ('email' in values) errObj.email = values.email ? '' : 'Required*';
    if ('mobile' in values) errObj.mobile = values.mobile ? '' : 'Required*';
    if ('profession' in values) errObj.profession = values.profession ? '' : 'Required*';

    setUseruserErrors(prevState => {
      return {
        ...prevState,
        ...errObj,
      };
    });

    return Object.values(errObj).every(value => value === '');
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUserInputs(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });

    formValidation({
      [name]: value,
    });
  };

  const handleSubmitDemo = e => {
    e.preventDefault();
    if (formValidation()) {
      console.log(userInputs);
    }
  };

  return (
    <>
      <Dialog open={openRequestDemo}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '1.5rem' }}>
          <DialogTitle sx={{ paddingTop: 0, fontSize: '24px', fontWeight: '580', mb: 0, pb: 0 }}>
            Request Demo
          </DialogTitle>

          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0, mr: '10px' }}
          >
            <IconButton
              sx={{ color: '#1c9bef', background: 'whitesmoke' }}
              onClick={() => {
                setUserInputs({
                  name: '',
                  email: '',
                  mobile: '',
                  website: '',
                  profession: '',
                });
                setUseruserErrors({
                  name: '',
                  email: '',
                  mobile: '',
                  profession: '',
                });
                handleCloseRequestDemo();
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        <DialogContent sx={{ m: 0, pt: 0 }}>Just one click away!</DialogContent>
        <Divider sx={{ mb: 1 }} />

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
                <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <FormControl sx={{ width: '100%' }}>
                    <OutlinedInput
                      sx={{ fontSize: '1.2rem' }}
                      placeholder='Name*'
                      name='name'
                      value={userInputs.name}
                      onChange={handleInputChange}
                      error={userErrors.name ? true : false}
                    />
                  </FormControl>
                  <FormControl sx={{ width: '100%' }}>
                    <OutlinedInput
                      sx={{ fontSize: '1.2rem' }}
                      name='email'
                      placeholder='Email*'
                      value={userInputs.email}
                      onChange={handleInputChange}
                      error={userErrors.email ? true : false}
                    />
                  </FormControl>

                  <FormControl sx={{ width: '100%' }}>
                    <OutlinedInput
                      sx={{ fontSize: '1.2rem' }}
                      name='website'
                      placeholder='Website'
                      value={userInputs.website}
                      onChange={handleInputChange}
                    />
                  </FormControl>

                  <FormControl sx={{ width: '100%' }}>
                    <OutlinedInput
                      type='number'
                      sx={{ fontSize: '1.2rem' }}
                      name='mobile'
                      placeholder='Mobile*'
                      value={userInputs.mobile}
                      onChange={handleInputChange}
                      error={userErrors.mobile ? true : false}
                    />
                  </FormControl>

                  <FormControl sx={{ width: '100%' }}>
                    <OutlinedInput
                      sx={{ fontSize: '1.2rem' }}
                      placeholder='Profession*'
                      name='profession'
                      value={userInputs.profession}
                      onChange={handleInputChange}
                      error={userErrors.profession ? true : false}
                    />
                  </FormControl>
                </Box>

                <Box sx={{ textAlign: 'center', my: 3 }}>
                  <CustomButton
                    backgroundColor='#1c9bef'
                    color='#fff'
                    buttonText='Submit'
                    getStartedBtn={false}
                    fullWidth={true}
                    onBtnClick={handleSubmitDemo}
                  />
                </Box>
              </Box>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RequestDemo;
