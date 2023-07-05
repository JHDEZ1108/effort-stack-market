import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Button, useTheme } from '@mui/material';
import heroImage from '../../assets/hero.jpg';

function Hero() {
  const theme = useTheme(); 
  const primaryMain = theme.palette.primary.main;
  const primaryLight = theme.palette.primary.light;
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 2,
      }
    }
  }
  
  

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
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
          <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Welcome to Our Clothing Store
            </Typography>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }} // Añadimos un delay para que aparezca después del título
          >
            <Typography variant="h4" gutterBottom>
              The finest apparel for every occasion
            </Typography>
          </motion.div>
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.5, delay: 1 }} // Añadimos un delay para que aparezca después del texto
          >
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
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
}

export default Hero;
