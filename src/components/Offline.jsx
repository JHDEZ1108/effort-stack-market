import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import WifiOffIcon from '@mui/icons-material/WifiOff'

function Offline(){
  const theme = useTheme();
  const errorColor = theme.palette.neutral.warning;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      p={2}
    >
      <WifiOffIcon sx={{ fontSize: 80, color: errorColor }} />
      <Typography sx={{ color: errorColor, pb: 3 }} variant="h4" color="error" align="center">
        Sin conexión a Internet
      </Typography>
      <Typography variant="body1" align="center">
        Parece que no estás conectado a Internet. Por favor, revisa tu conexión y vuelve a intentarlo.
      </Typography>
      <Typography variant="body1" align="center">
        Si el problema persiste, prueba reiniciando tu router o contactando a tu proveedor de Internet.
      </Typography>
    </Box>
  );
}

export default Offline;
