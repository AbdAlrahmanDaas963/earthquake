import React from "react";
import { TextField } from "@mui/material";

function AppTextInput({
  id,
  name,
  label,
  value,
  onChange,
  error,
  helperText,
  ...props
}) {
  return (
    <TextField
      fullWidth
      id={id}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      className="form-input"
      {...props}
    />
  );
}

export default AppTextInput;
