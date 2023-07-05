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
import { motion } from 'framer-motion';
import DeleteIcon from '@mui/icons-material/Delete';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import QuantityPicker from '../QuantityPicker';

function OrderSummary({ cart, handleRemove, handleQuantityChange, handleTotal }){

  /* ---------- Theme configuration -----------*/
  const theme = useTheme();
  const defaultB = theme.palette.background.alt;
  const defaultA = theme.palette.background.aux;
  const primaryLight = theme.palette.primary.light;
  const primaryMain = theme.palette.primary.main;
  const secondary = theme.palette.primary.aux;
  const deleteC = theme.palette.neutral.error;
    
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          backgroundColor: defaultB,
          minHeight: '100%',
          p: 3,
          mt: 5
        }}
      >
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
            <Box sx={{ pt: 3}}>
              {cart.length > 0 ? 
                <Typography variant="h5" sx={{ flex: "0 1 auto", pr: 5 }} >Lista de pedidos:</Typography> 
                  : 
                <Typography variant="h5" sx={{ flex: "0 1 auto", pr: 5 }} >Sin pedidos...</Typography>
              }
            </Box>
            <List sx={{ mt: 2 }}>
              {cart.map(item => (       
                <ListItem
                disableGutters
                key={item.id}
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
                        alt={item.attributes.title}
                        src={`${item.attributes.image.data[0].attributes.url}`}
                      />
                    </Box>
                  </ListItemAvatar>
                  <ListItemText
                    primary={(
                      <Typography
                        sx={{ fontWeight: 'fontWeightBold' }}
                        variant="subtitle1"
                      >
                        {item.attributes.title}
                      </Typography>
                    )}
                    secondary={(
                      <Typography
                        color="textSecondary"
                        sx={{ mt: 1 }}
                        variant="body1"
                      >
                        $
                        {numeral(item.attributes.price).format('0.00')}
                      </Typography>
                    )}
                    sx={{ mr: 3}}
                  />
                  <ListItemSecondaryAction sx={{ ml: 2, mt: 2}}>
                    <QuantityPicker
                      quantity={item.quantity || 1}
                      setQuantity={value => handleQuantityChange(item, value)}
                    />
                    <IconButton 
                      sx={{
                        '&:hover': {
                          color: deleteC,
                        },
                      }}
                      onClick={handleRemove(item)}
                    >
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
              <Typography variant="subtitle1">
                Subtotal
              </Typography>
              <Typography variant="body1">
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
              <Typography variant="body1">
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
                fontSize: '25px',
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
      </Box>
    </motion.div>
  )
};

export default OrderSummary;
