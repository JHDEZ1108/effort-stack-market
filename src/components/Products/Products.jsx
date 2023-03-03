import React from 'react';
import { Grid } from '@mui/material';
import Product from './Product';

function Products({ products }) {
  return (
    <Grid container sx={{ p: 5 }}>
      {products.map(product => (
        <Grid item key={product.id} xs={12} md={6} lg={4} sx={{ p: 3 }}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
