/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import useAnalytics from '../hooks/useAnalytics';
import Offline from './Offline'
import ScrollTopButton from './ScrollTopButton';

function Layout({ children }) {
  useAnalytics();
  const [onLine, setOnLine] = useState(navigator ? navigator.onLine : true);

  const goOnline = () => setOnLine(true);
  const goOffline = () => setOnLine(false);

  useEffect(() => {
    if (!window) return;

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);
  
  return onLine ? (
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
        <ScrollTopButton sx={{ m: 3 }}/>
        <Footer />
      </Grid>
    </Box>
  ) : (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Grid container spacing={1} sx={{ flexGrow: 1 }}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Offline />
        </Grid>
        <Grid item xs={12}>
          <ScrollTopButton sx={{ m: 3 }}/>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Layout;
