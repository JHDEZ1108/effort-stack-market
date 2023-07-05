import React, { useContext } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Product from './Product';
import ProductCarousel from './ProductCarousel';
import AppContext from '../../context/AppContext';
import LazyLoading from '../../utils/LazyLoading';

function Products() {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => {
    addToCart(product);
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
  }
  
  return (
    <Box id="products">
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Typography variant="h2" align="center" gutterBottom sx={{ mt: 5, mb: 2, fontWeight: 'bold' }}>
          Our Products
        </Typography>
        <Typography variant="body1" align="center" gutterBottom sx={{ mb: 2 }}>
          A wide selection of high-quality products just for you.
        </Typography>
      </motion.div>
      <Grid container sx={{ p: 4 }}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} md={6} lg={4} sx={{ p: 3 }}>
            <LazyLoading>
              <Product product={product} handleAddToCart={handleAddToCart}/>
            </LazyLoading>
          </Grid>
        ))}
        <Grid item xs={12} sx={{ mt: 5, mb: 5 }}>
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Typography variant="h2" align="center" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
              Featured Products
            </Typography>
            <Typography variant="body1" align="center" gutterBottom sx={{ mb: 5 }}>
              Explore our carefully selected featured products.
            </Typography>
          </motion.div>
          <LazyLoading>
            <ProductCarousel products={products} handleAddToCart={handleAddToCart}/>
          </LazyLoading>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Products;
