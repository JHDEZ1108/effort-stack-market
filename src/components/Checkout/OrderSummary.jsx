import React from 'react';
import {
  Box,
  Button,
  Card,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  useTheme,
  TextField,
  Typography,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import QuantityPicker from '../QuantityPicker';

function OrderSummary({ products }){
  const theme = useTheme();
  const defaultB = theme.palette.background.alt;
  const defaultA = theme.palette.background.aux;
  const primaryLight = theme.palette.primary.light;
  const primaryMain = theme.palette.primary.main;
  const secondary = theme.palette.primary.aux;
  const deleteC = theme.palette.neutral.error;
  
  return (
    <Box
      sx={{
        backgroundColor: defaultB,
        minHeight: '100%',
        p: 3
      }}
    >
      <form onSubmit={(event) => event.preventDefault()}>
        <Box
          sx={{
            maxWidth: 1000,
            mx: 'auto',
          }}
        >
          <Card
            sx={{
              backgroundColor: defaultA,
              maxWidth: 1000,
              p: 3,
              mx: 'auto',
            }}
            variant="outlined"
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6" sx={{ pl: 3, fontWeight: 'bold' }}>Order Summary</Typography>
              <Typography variant="h6" sx={{ flex: "0 1 auto", pr: 5, fontWeight: 'bold' }}>
                Quantity
              </Typography>
            </Box>
            <List sx={{ mt: 2 }}>
              {products.map((product) => (
                <ListItem
                  disableGutters
                  key={product.id}
                >
                  <ListItemAvatar sx={{ pr: 2 }}>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        height: 100,
                        justifyContent: 'center',
                        overflow: 'hidden',
                        width: 100,
                        '& img': {
                          width: '100%',
                          height: 'auto'
                        }
                      }}
                    >
                      <img
                        alt={product.title}
                        src={product.image}
                      />
                    </Box>
                  </ListItemAvatar>
                  <ListItemText
                    primary={(
                      <Typography
                        sx={{ fontWeight: 'fontWeightBold' }}
                        variant="subtitle2"
                      >
                        {product.title}
                      </Typography>
                    )}
                    secondary={(
                      <Typography
                        color="textSecondary"
                        sx={{ mt: 1 }}
                        variant="body1"
                      >
                        $
                        {numeral(product.price).format('00.00')}
                      </Typography>
                    )}
                    sx={{ mr: 3}}
                  />
                  <ListItemSecondaryAction>
                    <QuantityPicker />
                    <IconButton sx={{
                      '&:hover': {
                        color: deleteC,
                      },
                    }}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <Box>
              <TextField
                fullWidth
                label="Discount Code"
                variant="outlined"
                size="small"
                sx={{ mt: 2 }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                mt: 2
              }}
            >
              <Button 
                variant="outlined" 
                color="secondary" 
                style={{ borderColor: secondary, color: secondary }}
                sx={{
                  transition: 'transform .2s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                Apply Coupon
              </Button>
            </Box>
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
                {numeral(20).format('00.00')}
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
                {numeral(10).format('00.00')}
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
                {numeral(12).format('00.00')}
              </Typography>
            </Box>
          </Card>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mt: 3
            }}
          >
            <Button
              component={Link}
              to="/checkout/information"
              variant="contained"
              sx={{
                width: '100%',
                height: '50px',
                fontSize: '15px',
                backgroundColor: primaryMain,
                transition: 'transform .2s',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: primaryLight,
                  transform: 'scale(1.1)',
                  textDecoration: 'none',
                },
              }}
            >
              Complete order
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  )
};

export default OrderSummary;
