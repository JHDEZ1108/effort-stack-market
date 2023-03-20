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
import numeral from 'numeral';
import { Link } from "react-router-dom";
import PaymentSuccess from '../../assets/PaymentSuccess.svg';


function PaymentSuccesfull({ cart, buyer }){
  /* ---------- Theme configuration -----------*/
  const theme = useTheme();
  const defaultA = theme.palette.background.alt;
  const defaultB = theme.palette.background.aux;

  return(
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
                      <Box>
                        <Typography
                        sx={{ fontWeight: 'fontWeightBold' }}
                        variant="subtitle2"
                        >
                          Gracias por su compra {buyer.firstName}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid xs={12} item>
                      <List sx={{ ml: 3, mr: 3 }}>
                        {cart.map((product) => (
                          <ListItem
                            disableGutters
                            key={product.id}
                          >
                            <Grid container>
                              <Grid xs={6} sm={6} item>
                                <ListItemText
                                  primary={(
                                    <Typography
                                      sx={{ fontWeight: 'fontWeightBold' }}
                                      variant="subtitle2"
                                    >
                                      {product.title}
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
                                      {product.quantity}x ${numeral(product.price).format('0.00')}
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
                          <Typography variant="subtitle2">
                            Subtotal
                          </Typography>
                          <Typography variant="subtitle2">
                            $
                            {numeral(1).format('0.00')}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mt: 2
                          }}
                        >
                          <Typography variant="subtitle2">
                            Shipping Tax
                          </Typography>
                          <Typography variant="subtitle2">
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
                          <Typography variant="subtitle2">
                            Total
                          </Typography>
                          <Typography variant="subtitle2">
                            $
                            {numeral(1 + 3).format('0.00')}
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
                  sx={{ width: '100%', height: '50px', fontSize: '15px'}}
                  >
                  Homepage
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
  );
};

export default PaymentSuccesfull;