import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import Product from './Product';
import AppContext from '../../context/AppContext';

function Products() {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => {
    addToCart(product);
  }
  
  return (
    <Grid container sx={{ p: 5 }}>
      {products.map(product => (
        <Grid item key={product.id} xs={12} md={6} lg={4} sx={{ p: 3 }}>
          <Product product={product} handleAddToCart={handleAddToCart}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
