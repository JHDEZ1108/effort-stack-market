import React from "react";
import { ErrorMessage, Field } from "formik";
import { TextField, Box } from "@mui/material";

function FormikField ({ name, label, type = "text", required = false}) {
  return (
    <Box>
      <Field
        helperText={<ErrorMessage name={name} />}
        required={required}
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        type={type}
        fullWidth
      />
    </Box>
  );
};

export default FormikField;
