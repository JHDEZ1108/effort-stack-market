import React from 'react';
import { Grid, Typography, Button, useTheme, Box } from '@mui/material';
import { motion } from 'framer-motion';

function Product({ product, handleAddToCart }) {
  const theme = useTheme();
  const defaultB = theme.palette.background.alt;
  const defaultA = theme.palette.background.aux;
  const primaryMain = theme.palette.primary.main;
  const primaryLight = theme.palette.primary.light;

  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      style={{ cursor: 'pointer' }} 
    >
      <Grid container alignItems="center" sx={{ backgroundColor: defaultB, maxWidth: 450, }}>
        <Grid item xs={12}>
          <Box sx={{ maxHeight: 300, display: 'flex', justifyContent: 'center' }}>
            <img
              src={product.attributes.image.data[0].attributes.url}
              alt={product.attributes.title}
              style={{ width: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ height: '100%' }}>
          <Grid container direction="column" sx={{ backgroundColor: defaultA, height: '100%' }}>
            <Box sx={{ p: 3 }}>
              <Grid item sx={{ fontWeight: 'bold' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {product.attributes.title}
                </Typography>
              </Grid>
              <Grid item sx={{ pt: 1 }}>
                <Typography variant="subtitle1">{`$${product.attributes.price}`}</Typography>
              </Grid>
              <Grid item sx={{ pt: 2 }}>
                <Typography variant="body1">{product.attributes.description}</Typography>
              </Grid>
              <Grid item sx={{ pt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  onClick={() => handleAddToCart(product)}
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
                  Add to cart
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default Product;

