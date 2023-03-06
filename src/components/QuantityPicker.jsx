import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <FormControl>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 0.5,
        }}
      >
        <IconButton onClick={handleDecrease} sx={{ mr:0.5}}>
          <Remove sx={{ fontSize: "small" }} />
        </IconButton>
        <Typography variant="h5">{quantity}</Typography>
        <IconButton onClick={handleIncrease} sx={{ ml:0.5}}>
          <Add sx={{ fontSize: "small" }} />
        </IconButton>
      </Box>
    </FormControl>
  );
}

export default QuantityPicker;
