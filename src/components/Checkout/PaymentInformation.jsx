import React, { useState } from 'react';
import {
  Box,
  Grid,
  Radio,
  Button,
  Divider,
  useTheme,
  RadioGroup,
  Typography,
  FormControlLabel,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { motion } from 'framer-motion';
import numeral from 'numeral';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { Formik, Form } from 'formik';
import FormikField from '../FormikField';
import PayPalCheckoutButton from './PayPalCheckOutButton';


const paymentMethods = [
  {
    label: 'Visa Credit/Debit Card',
    value: 'visa'
  },
  {
    label: 'PayPal',
    value: 'paypal'
  }
];

function PaymentInformation({ cart, handleTotal, buyer }) {

  const [paymentM, setPaymentMethod] = useState("visa");
  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  /* ---------- Theme configuration -----------*/
  const theme = useTheme();
  const defaultA = theme.palette.background.alt;
  const defaultB = theme.palette.background.aux;
  
  /* ---------- Inital Values -----------*/
  const initialValues = {
    cardOwner: '',
    cardNumber: '',
    cardExpirationDate: '',
    cardSecurityCode: ''
  }
  
  /* ---------- Form validation Schemas -----------*/
  const PaymentInformationSchema = Yup.object().shape({
    cardOwner: Yup.string()
      .min(2, 'Too short to be a name!')
      .matches(/^[\p{L}]+$/u, 'Name cannot contain numbers')
      .required('You need to add a name!'),
    cardNumber: Yup.string()
      .matches(/^[0-9]{13,16}$/, 'Invalid card number')
      .required('You need to add a card number!'),
    cardExpirationDate: Yup.date()
      .typeError('Invalid date')
      .required('You need to add card expiration date!')
      .test('is-future-date', 'Expiration date must be in the future', value => {
        const today = new Date();
        const expirationDate = new Date(value);
        return expirationDate > today;
      }),
    cardSecurityCode: Yup.string()
      .matches(/^[0-9]{3,4}$/, 'Invalid security code')
      .required('You need to add a security code!')
      .test('is-security-code-length-valid', 'Invalid security code length', value => value.length === 3 || value.length === 4)
  });

  return(
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Formik
        validationSchema={PaymentInformationSchema}
        initialValues={initialValues}
        onSubmit={(event) => event.preventDefault()}
      >
        {({dirty, isValid}) =>(
          <Box
            sx={{
              backgroundColor: defaultA,
              minHeight: '100%',
              p: 3,
              mt: 10
            }}
          >
            <Form>
              <Box
                sx={{
                  backgroundColor: defaultB,
                  maxWidth: 1000,
                  p: 3,
                  mx: 'auto',
                  boxShadow: 1
                }}
              >
                <Box>
                  <Grid container spacing= {3}>
                    <Grid item sm={6} xs={12}>
                      <Grid container spacing= {3}>
                        <Grid item xs={12}>
                          <Typography
                            sx={{ fontWeight: 'bold', mt: 3 }}
                            variant="h4"
                          >
                            Payment Information
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <RadioGroup
                            name="paymentMethod"
                            value={paymentM}
                            sx={{ flexDirection: 'row' }}
                            onChange={handleChange}
                          >
                            {paymentMethods.map((paymentMethod) => (
                              <FormControlLabel
                                control={<Radio sx={{ ml: 1 }} />}
                                key={paymentMethod.value}
                                label={(
                                  <Typography variant="body1">
                                    {paymentMethod.label}
                                  </Typography>
                                )}
                                value={paymentMethod.value}
                              />
                            ))}
                          </RadioGroup>
                        </Grid>
                        {paymentM === 'visa' ? (
                          <>
                            <Grid
                              item
                              xs={12}
                            >
                              <FormikField
                                required
                                fullWidth
                                label="Name on Card"
                                name="cardOwner"
                              />
                            </Grid>
                            <Grid
                              item
                              xs={12}
                            >
                              <FormikField
                                required
                                fullWidth
                                label="Card Number"
                                name="cardNumber"
                              />
                            </Grid>
                            <Grid
                              item
                              sm={6}
                              xs={12}
                            >
                              <FormikField
                                required
                                fullWidth
                                label="Expire Date"
                                name="cardExpirationDate"
                                placeholder="MM/YY"
                              />
                            </Grid>
                            <Grid
                              item
                              sm={6}
                              xs={12}
                            >
                              <FormikField
                                required
                                fullWidth
                                label="Security Code"
                                name="cardSecurityCode"
                              />
                            </Grid>
                          </>
                        ) : (
                          <Grid
                            item
                            sx={{mt: 3}}
                            xs={12}
                          >
                            <PayPalCheckoutButton cart={cart} handleTotal={handleTotal} buyer={buyer}/>
                          </Grid>
                        )}
                      </Grid>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Grid
                        container
                        spacing={3}
                      >
                        <Grid item xs={12}>
                          <Typography
                            sx={{
                              mt: 3,
                              textAlign: 'center'
                            }}
                            variant="h5"
                          >
                            Summary
                          </Typography>
                        </ Grid>
                        <Grid item xs={12}>
                          <List sx={{ ml: 3, mr: 3 }}>
                            {cart.map(product => (
                              <ListItem
                                disableGutters
                                key={product.attributes.id}
                              >
                                <Grid container>
                                  <Grid xs={6} sm={6} item>
                                    <ListItemText
                                      primary={(
                                        <Typography
                                          sx={{ fontWeight: 'fontWeightBold' }}
                                          variant="subtitle1"
                                        >
                                          {product.attributes.title}
                                        </Typography>
                                      )}
                                    />
                                  </Grid>
                                  <Grid xs={6} sm={6} item sx={{ textAlign: 'right' }}>
                                    <ListItemText
                                      secondary={(
                                        <Typography
                                          color="textSecondary"
                                          variant="subtitle1"
                                        >
                                          {product.quantity}x ${numeral(product.attributes.price).format('0.00')}
                                        </Typography>
                                      )}
                                    />
                                  </Grid>
                                </Grid>
                              </ListItem>
                            ))}
                            <Divider sx={{ my: 2 }} />
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                mt: 2
                              }}
                            >
                              <Typography variant="subtitle1">
                                Subtotal
                              </Typography>
                              <Typography variant="subtitle1">
                                $
                                {numeral(handleTotal()).format('0.00')}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                mt: 2
                              }}
                            >
                              <Typography variant="subtitle1">
                                Shipping Tax
                              </Typography>
                              <Typography variant="subtitle1">
                                $
                                {numeral(3).format('0.00')}
                              </Typography>
                            </Box>
                            <Divider sx={{ my: 2 }} />
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between'
                              }}
                            >
                              <Typography variant="body1">
                                Total
                              </Typography>
                              <Typography variant="body1">
                                $
                                {numeral(handleTotal() + 3).format('0.00')}
                              </Typography>
                            </Box>
                          </List>
                        </ Grid>
                      </ Grid>
                    </ Grid>
                  </Grid>
                  <Box
                    sx={{
                      display: 'flex',
                      width: '100%',
                      mt: 3
                    }}
                    >
                    <Button
                      component={Link}
                      to="/checkout/success"
                      type="submit"
                      variant="contained"
                      sx={{ width: '100%', height: '50px', fontSize: '25px'}}
                      disabled={!dirty || !isValid}
                      >
                      Pay now
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
                      component={Link}
                      to="/checkout/information"
                      type="submit"
                      variant="outlined"
                      sx={{ width: '100%', height: '50px', fontSize: '25px'}}
                      >
                      Return to shipping
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Form>
          </Box>
        )}
      </Formik>
    </motion.div>
  );
};

export default PaymentInformation;
