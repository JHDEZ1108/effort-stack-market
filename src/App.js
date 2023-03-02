/* eslint-disable import/extensions */
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme/theme.js';

import { Home } from './containers/Home';

function App() {
  const mode = useSelector((state) => state.ui.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
