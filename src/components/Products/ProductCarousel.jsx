import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Card, CardContent, CardMedia, Typography, Button, useTheme, GlobalStyles } from '@mui/material';

function ProductCarousel({ products, handleAddToCart }) {
  const theme = useTheme();
  const defaultB = theme.palette.background.alt;
  const defaultA = theme.palette.background.aux;
  const primaryMain = theme.palette.primary.main;
  const primaryLight = theme.palette.primary.light;

  return (
    <>
      <GlobalStyles
        styles={{
          '.carousel .control-dots .dot': {
            backgroundColor: theme.palette.mode === 'light' ? primaryMain : 'white'
          }
        }}
      />
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={500}
      >
        {products.map((product) => (
          <div key={product.id}>
            <Card sx={{ backgroundColor: defaultB }}>
              <CardMedia
                component="img"
                alt={product.attributes.title}
                height="140"
                image={product.attributes.image.data[0].attributes.url}
              />
              <CardContent sx={{ backgroundColor: defaultA }}>
                <Typography gutterBottom variant="h5" component="div">
                  {product.attributes.title}
                </Typography>
                <Typography variant="subtitle1">{`$${product.attributes.price}`}</Typography>
                <Button
                  variant="contained"
                  sx={{
                    mb: 2,
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
                  Add to cart
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default ProductCarousel;
