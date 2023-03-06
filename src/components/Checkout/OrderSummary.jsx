import React from 'react';
import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Select,
  useTheme,
  TextField,
  Typography
} from '@mui/material';
import numeral from 'numeral';

function OrderSummary({ products }){
  const theme = useTheme();
  const defaultB = theme.palette.background.alt;
  const defaultA = theme.palette.background.aux;
  const primaryLight = theme.palette.primary.light;
  const primaryMain = theme.palette.primary.main;
  const secondary = theme.palette.primary.aux;
  
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
            <Typography variant="h6">
              Order Summary
            </Typography>
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
                  />
                  <ListItemSecondaryAction>
                    <FormControl
                      size="small"
                      variant="outlined"
                    >
                      <Select value={2}>
                        <MenuItem value={1}>
                          1
                        </MenuItem>
                        <MenuItem value={2}>
                          2
                        </MenuItem>
                      </Select>
                    </FormControl>
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
              type="submit"
              variant="contained"
              sx={{
                fontWeight: 'bold',
                backgroundColor: primaryMain,
                transition: 'transform .2s',
                '&:hover': {
                  backgroundColor: primaryLight,
                  transform: 'scale(1.1)',
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
