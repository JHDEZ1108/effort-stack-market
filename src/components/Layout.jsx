import React from 'react';
import { Grid, Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Grid container spacing={1} sx={{ flexGrow: 1 }}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ flexGrow: 1 }}>{children}</Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Box>
  );
}

export default Layout;
