import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { AnimatePresence } from 'framer-motion';

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
  const isEmpty = Object.keys(initialState.state).length;

  return (
    isEmpty > 0 ? (
      <AppContext.Provider value={initialState}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Layout>
              <AnimatePresence mode='wait'>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/checkout/information" element={<Information />} />
                  <Route path="/checkout/payment" element={<Payment />} />
                  <Route path="/checkout/success" element={<Success />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </AppContext.Provider>
    ) : (<h1> Cargando.... </h1>)
  );
}

export default App;
