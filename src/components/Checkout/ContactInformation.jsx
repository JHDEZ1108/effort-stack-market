import React from 'react';
import {
  Box,
  Grid,
  Button,
  Checkbox,
  useTheme,
  Typography,
  FormControlLabel
} from '@mui/material';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
// import { postcodeValidator } from 'postcode-validator';
import FormikField from '../FormikField'

function ContactInformation(){
  const theme = useTheme();
  const defaultA = theme.palette.background.alt;
  const defaultB = theme.palette.background.aux;
  
  /* ---------- Inital Values -----------*/
  const initialValues = {
    firstName: '',
    lastName: '',
    address: '',
    optionalAddress: '',
    country: '',
    phoneNumber: '',
    city: '',
    zipCode: ''
  }
  /* ---------- Fake emails -----------*/
  const emailAddresses = [
    'test@gmail.com',
    'test2@outlook.com',
    'test3@yahoo.com'
  ];
  
  /* ---------- Form validation Schemas -----------*/
  const ContactInformationSchema = Yup.object().shape({
    email: Yup.string()
    .lowercase()
    .email('Must be a valid email!')
    .notOneOf(emailAddresses, 'Email already taken!')
    .required('You need to add an email!'),
    firstName: Yup.string()
      .min(2, 'Too short to be a name!')
      .matches(/^[\p{L}]+$/u, 'First name cannot contain numbers')
      .required('You need to add a name!'),
    lastName: Yup.string()
      .min(2, 'Too short to be a last name!')
      .matches(/^[\p{L}]+$/u, 'Last name cannot contain numbers')
      .required('You need to add a last name!'),
    address: Yup.string()
      .min(5, 'Too short to be an address!')
      .required('You need to add an address!'),
    optionalAddress: Yup.string()
      .min(5, 'Too short to be an address!'),
    zipCode: Yup.string()
      .matches(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Invalid zip code'),
    phoneNumber: Yup.string()
      .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Invalid phone number'),
    country: Yup.string()
      .min(2, 'Too short to be a country name!')
      .required('You need to add a country!'),
    city: Yup.string()
      .matches(/^[\p{L}]+(?:[\s-][\p{L}]+)*$/u, 'Invalid city name')
  });
  
  return(
    <Formik
      validationSchema={ContactInformationSchema}
      initialValues={initialValues}
      onSubmit={(event) => event.preventDefault()}
    >
      {({dirty, isValid}) =>(
          <Box
          sx={{
            backgroundColor: defaultA,
            minHeight: '100%',
            p: 3
          }}
        >
          <Form>
            <Box
                sx={{
                  maxWidth: 1000,
                  mx: 'auto',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: defaultB,
                    maxWidth: 1000,
                    p: 3,
                    mx: 'auto',
                  }}
                >
                  <Box>
                    <Grid container>
                      <Grid item sm={6} xs={12}>
                        <Typography
                          sx={{ fontWeight: 'bold', mt: 3 }}
                          variant="h4"
                        >
                          Contact Information
                        </Typography>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <Typography
                          sx={{
                            mt: 3,
                            textAlign: 'right'
                          }}
                          variant="h6"
                        >
                          Already have an account? Log in
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box sx={{ mt: 3 }}>
                    <Grid
                      container
                      spacing={1}
                    >
                      <Grid
                        item
                        xs={12}
                      >
                        <FormikField
                          fullWidth
                          required
                          label="E-mail"
                          name="email"
                          type="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="I want to receive Effort Stack newsletters and promotional emails to get access to the latest ES news"
                        />
                      </Grid>
                    </Grid>
                  </ Box>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      mt: 5
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: 'bold' }}
                      variant="h4"
                    >
                      Shipping address
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 3 }}>
                    <Grid
                      container
                      spacing={3}
                    >
                      <Grid
                        item
                        sm={6}
                        xs={12}
                      >
                        <FormikField
                          fullWidth
                          required
                          label="First Name"
                          name="firstName"
                        />
                      </Grid>
                      <Grid
                        item
                        sm={6}
                        xs={12}
                      >
                        <FormikField
                          fullWidth
                          required
                          label="Last Name"
                          name="lastName"
                        />
                      </Grid>
                      <Grid
                        item
                        sm={6}
                        xs={12}
                      >
                        <FormikField
                          fullWidth
                          required
                          label="Street Address"
                          name="address"
                        />
                      </Grid>
                      <Grid
                        item
                        sm={6}
                        xs={12}
                      >
                        <FormikField
                          fullWidth
                          label="Apartment, suite, etc. (optional)"
                          name="optionalAddress"
                        />
                      </Grid>
                      <Grid
                        item
                        sm={6}
                        xs={12}
                      >
                        <FormikField 
                          fullWidth
                          required
                          label="Country"
                          name="country"
                        />
                      </Grid>
                      <Grid
                        item
                        sm={6}
                        xs={12}
                      >
                        <FormikField 
                          fullWidth
                          label="Phone"
                          name="phoneNumber"
                        />
                      </Grid>
                      <Grid
                        item
                        sm={3}
                        xs={12}
                      >
                        <FormikField 
                          fullWidth
                          label="City"
                          name="city"
                        />
                      </Grid>
                      <Grid
                        item
                        sm={3}
                        xs={12}
                      >
                        <FormikField 
                          fullWidth
                          label="Zip code"
                          name="zipCode"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      width: '100%',
                      mt: 3
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ width: '100%', height: '50px', fontSize: '15px'}}
                      disabled={!dirty || !isValid}
                    >
                      Continue to shipping
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      width: '100%',
                      mt: 3
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{ width: '100%', height: '50px', fontSize: '15px', fontWeight: 'bold' }}
                    >
                      Return to Cart
                    </Button>
                  </Box>
                </Box>
            </Box>
          </Form>
        </Box>
        )}
      </Formik>
  );
}

export default ContactInformation;