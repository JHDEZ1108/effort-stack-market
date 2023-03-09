import React from 'react';
import { Grid, Typography, Button, useTheme, Box } from '@mui/material';

function Product({ product, handleAddToCart }) {
  const theme = useTheme();
  const defaultB = theme.palette.background.alt;
  const defaultA = theme.palette.background.aux;
  const primaryMain = theme.palette.primary.main;
  const primaryLight = theme.palette.primary.light;

  return (
    <Grid
      container
      alignItems="center"
      sx={{ minHeight: 250, height: '100%', backgroundColor: defaultB, borderRadius: 3 }}
    >
      <Grid item>
        <img src={product.image} alt={product.title} style={{ maxWidth: 200 }} />
      </Grid>
      <Grid item xs sx={{ height: '100%' }}>
        <Grid container direction="column" sx={{ height: '100%', backgroundColor: defaultA, borderRadius: 3 }}>
          <Box sx={{ p: 3 }}>
            <Grid item sx={{ pt: 2, fontWeight: 'bold' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {product.title}
              </Typography>
            </Grid>
            <Grid item sx={{ pt: 1 }}>
              <Typography variant="subtitle1">{`$${product.price}`}</Typography>
            </Grid>
            <Grid item sx={{ pt: 2 }}>
              <Typography variant="body1">{product.description}</Typography>
            </Grid>
            <Grid item sx={{ pt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button
                variant="contained"
                onClick={() =>handleAddToCart(product)}
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
  );
}

export default Product;
