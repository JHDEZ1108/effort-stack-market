/* eslint-disable import/extensions */
import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from '../theme/theme.js';


import Home from '../containers/Home.jsx';
import Checkout from '../containers/Checkout/Checkout.jsx';
import Information from '../containers/Checkout/Information.jsx';
import Payment from '../containers/Checkout/Payment.jsx';
import Success from '../containers/Checkout/Success.jsx';
import NotFound from '../containers/NotFound.jsx';

function App() {
  const mode = useSelector((state) => state.ui.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  
  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/checkout/information" element={<Information />} />
          <Route exact path="/checkout/payment" element={<Payment />} />
          <Route exact path="/checkout/success" element={<Success />} />
          <Route element={NotFound} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
