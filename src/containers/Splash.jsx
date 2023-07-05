import React from 'react';
import { motion } from 'framer-motion';
import { Box, Button, Typography } from '@mui/material';
import heroImage from '../assets/hero.jpg';

function Splash({ onExit }) {

  const container = {
    hidden: { opacity: 0, scale: 1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 2,
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0,
      transition: {
        duration: 2,
        onComplete: () => {
          // Llamar a onExit cuando la animación se complete
          onExit();
        }
      }
    }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden" 
      animate="visible" 
      exit="exit"
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxHeight: '100vh',
        }}
      >
        <Box
          sx={{
            height: '60vh', 
            width: '60%', 
            position: 'relative',
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mt: 10,
            alignItems: 'center',
            borderRadius: '5px', 
            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
            '::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              borderRadius: '5px', 
              boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          <Button variant="outlined" onClick={onExit} sx={{ fontSize: '25px'}}>
            Click Here
          </Button>
          <Box
            sx={{
              position: 'absolute',
              bottom: '-55px',
              left: 0,
              padding: '16px',
            }}
          >
            <Typography variant="h6" sx={{ color: 'text.primary' }}>Powered by</Typography>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: '-55px',
              right: 0,
              padding: '16px',
            }}
          >
            <Typography variant="h6" sx={{ color: 'text.primary' }}>Effort Stack</Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default Splash;
