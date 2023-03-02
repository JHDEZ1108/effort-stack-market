/* eslint-disable import/prefer-default-export */

import React from 'react';
import { Grid } from '@mui/material'

import Navbar from '../components/Navbar';



function Home() {
  // const loading = useSelector((state) => state.ui.isLoading, shallowEqual);
  
  return (      
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
    </Grid>
  );
}

export default Home;