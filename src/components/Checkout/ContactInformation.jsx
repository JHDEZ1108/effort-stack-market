import React from 'react';
import {
  Box,
  Grid,
  Button,
  useTheme,
  Typography
} from '@mui/material';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
// import { postcodeValidator } from 'postcode-validator';
import FormikField from '../FormikField';

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
  
  /* ---------- Form validation Schemas -----------*/
  const ContactInformationSchema = Yup.object().shape({
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
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex'
                    }}
                  >
                    <Typography
                      sx={{ ml: 2, fontWeight: 'bold' }}
                      variant="h6"
                    >
                      Contact Information
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
                          label="Street Line 2 (optional)"
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
                          label="Zip"
                          name="zipCode"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      mt: 3
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={!dirty || !isValid}
                    >
                      Submit
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