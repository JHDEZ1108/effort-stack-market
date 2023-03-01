import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const App = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Box sx={{ p: 2, bgcolor: "#cfe8fc" }}>
          <Typography variant="h6" align="center">
            Effort Stack Market
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
