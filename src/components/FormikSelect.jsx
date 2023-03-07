import React from "react";
import { Field, ErrorMessage } from "formik";
import { 
  FormHelperText, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Select,
  Box
} from "@mui/material"

function MaterialUISelectField({
  errorString,
  children,
  onChange,
  required,
  onBlur,
  value,
  label,
  name
}) {
  return (
    <FormControl fullWidth>
      <InputLabel required={required}>{label}</InputLabel>
      <Select 
        name={name} 
        value={value}
        onBlur={onBlur} 
        onChange={onChange} 
        label="Position" 
      >
        {children}
      </Select>
      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  );
}

function FormikSelect({ name, items, label, required = false }) {
  return (
    <Box>
      <Field
        fullWidth
        name={name}
        label={label}
        required={required}
        as={MaterialUISelectField}
        errorString={<ErrorMessage name={name} />}
      >
        {items.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Field>
    </Box>
  );
}

export default FormikSelect;
