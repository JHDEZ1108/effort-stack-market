import React, { useContext } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Product from './Product';
import AppContext from '../../context/AppContext';
import LazyLoading from '../../utils/LazyLoading';

function Products() {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => {
    addToCart(product);
  }
  
  return (
    <Box id="products">
      <Typography variant="h2" align="center" gutterBottom sx={{ mt: 5, mb: 2, fontWeight: 'bold' }}>
        Our Products
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom sx={{ mb: 5 }}>
        A wide selection of high-quality products just for you.
      </Typography>
      <Grid container sx={{ p: 4 }}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} md={6} lg={4} sx={{ p: 3 }}>
            <LazyLoading>
              <Product product={product} handleAddToCart={handleAddToCart}/>
            </LazyLoading>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;
