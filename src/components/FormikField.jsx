import React from "react";
import { ErrorMessage, Field, useFormikContext } from "formik";
import { TextField, Box, useTheme } from "@mui/material";

function FormikField ({ name, label, type = "text", required = false}) {
  const theme = useTheme();
  const errorColor = theme.palette.neutral.warning;
  const { errors, touched } = useFormikContext();
  const hasError = touched[name] && errors[name];

  
  return (
    <Box>
      <Field
        helperText={<ErrorMessage name={name} />}
        required={required}
        as={TextField}
        label={label}
        name={name}
        type={type}
        variant="outlined"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderColor: hasError ? errorColor : undefined,
          },
          "& .MuiFormLabel-root": {
            color: hasError ? errorColor : undefined,
          },
          "& .MuiFormHelperText-root": {
            color: hasError ? errorColor : undefined,
          },
        }}
      />
    </Box>
  );
};

export default FormikField;
