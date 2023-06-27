import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import heroImage from '../../assets/hero.jpg'; 

function Hero() {
  const theme = useTheme(); 
  const primaryMain = theme.palette.primary.main;
  const primaryLight = theme.palette.primary.light;

  return (
    <Box
      sx={{
        position: 'relative',
        height: '80vh',
        mt:-0.6,
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome to Our Clothing Store
        </Typography>
        <Typography variant="h5" gutterBottom>
          The finest apparel for every occasion
        </Typography>
        <Button 
          variant="contained"
          onClick={() => document.getElementById("products").scrollIntoView({ behavior: 'smooth' })}
          sx={{
            mt: 2,
            color: '#000',
            fontWeight: 'bold',
            backgroundColor: primaryMain,
            transition: 'transform .2s',
            '&:hover': {
              backgroundColor: primaryLight,
              transform: 'scale(1.1)',
            },
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;
