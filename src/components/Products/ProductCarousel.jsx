import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import { Card, CardContent, CardMedia, Typography, Button, useTheme, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 

function ProductCarousel({ products, handleAddToCart }) {
  const theme = useTheme();
  const defaultB = theme.palette.background.alt;
  const defaultA = theme.palette.background.aux;
  const primaryMain = theme.palette.primary.main;
  const primaryLight = theme.palette.primary.light;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Box sx={{ position: 'relative', overflow: 'visible' }}>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        showDots={false} 
        arrows={false}
      >
        {products.map((product) => (
          <Box key={product.id} sx={{ maxWidth: '400px', margin: 'auto'}}>
            <Card sx={{ backgroundColor: defaultB, display: 'flex' }}>
              <CardMedia
                component="img"
                alt={product.attributes.title}
                height="250"
                image={product.attributes.image.data[0].attributes.url}
                sx={{ minWidth: 200, objectFit: 'cover' }} 
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: defaultA, flexGrow: 1 }}> {/* Agrega un Box para disponer los elementos verticalmente */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold'}}>
                    {product.attributes.title}
                  </Typography>
                  <Typography variant="subtitle1">{`$${product.attributes.price}`}</Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      fontWeight: 'bold',
                      backgroundColor: primaryMain,
                      transition: 'transform .2s',
                      '&:hover': {
                        backgroundColor: primaryLight,
                        transform: 'scale(1.1)',
                      },
                    }}
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCartIcon />
                  </Button>
                </CardContent>
              </Box>
            </Card>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default ProductCarousel;
