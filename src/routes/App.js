import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { themeSettings } from '../theme/theme';

import Layout from '../components/Layout';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout/Checkout';
import Information from '../containers/Checkout/Information';
import Payment from '../containers/Checkout/Payment';
import Success from '../containers/Checkout/Success';
import NotFound from '../containers/NotFound';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';


function App() {
  const mode = useSelector((state) => state.ui.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <ThemeProvider theme={theme}> 
        <CssBaseline />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/checkout" element={<Checkout />} />
                <Route exact path="/checkout/information" element={<Information />} />
                <Route exact path="/checkout/payment" element={<Payment />} />
                <Route exact path="/checkout/success" element={<Success />} />
                <Route element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;

