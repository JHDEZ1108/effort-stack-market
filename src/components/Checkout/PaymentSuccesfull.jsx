import React from 'react';
import {
  Box,
  Grid,
  Button,
  Divider,
  useTheme,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { motion } from 'framer-motion';
import numeral from 'numeral';
import { Link } from "react-router-dom";
import PaymentSuccess from '../../assets/PaymentSuccess.svg';


function PaymentSuccesfull({ cart, handleTotal, firstName, lastName }){

  /* ---------- Theme configuration -----------*/
  const theme = useTheme();
  const defaultA = theme.palette.background.alt;
  const defaultB = theme.palette.background.aux;
  const primaryMain = theme.palette.primary.main;
  

  return(
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          backgroundColor: defaultA,
          minHeight: '100%',
          p: 3
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
            <Grid container spacing= {3}>
              <Grid xs={12} sm={6} item>
                <Grid container>
                  <Grid xs={12} item>
                    <Box>
                      <Typography
                      sx={{
                        mt: 3,
                        textAlign: 'center',
                        fontWeight: 'bold'
                      }}
                      variant="h5"
                      >
                        Payment Successful
                      </Typography>
                    </Box>
                    <Box sx={{ pt: 2, pb: 2 }}>
                      <Typography
                        sx={{ pt: 2, textAlign: 'center' }}
                        variant="h4"
                      >
                        Gracias por su compra{' '}
                        <Typography
                          component="span"
                          variant="h4"
                          sx={{
                            fontWeight: 'bold',
                            color: primaryMain,
                          }}
                        >
                          {firstName} {' '} {lastName}
                        </Typography>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={12} item>
                    <List sx={{ ml: 3, mr: 3 }}>
                      {cart.map((product) => (
                        <ListItem
                          disableGutters
                          key={product.attributes.id}
                        >
                          <Grid container>
                            <Grid xs={6} sm={6} item>
                              <ListItemText
                                primary={(
                                  <Typography
                                    sx={{ fontWeight: 'bold' }}
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
                                    variant="body1"
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
                  </Grid>
                  
                </Grid>

              </ Grid>
              <Grid xs={12} sm={6} item>
                <img alt="PaymentSuccess" src={PaymentSuccess} />
              </Grid>
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
                to="/"
                type="submit"
                variant="contained"
                sx={{ width: '100%', height: '50px', fontSize: '25px'}}
                >
                Homepage
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ motion.div>
  );
};

export default PaymentSuccesfull;