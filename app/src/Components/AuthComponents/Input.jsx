import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { FaEye } from "react-icons/fa6";
import { LuEyeClosed } from "react-icons/lu";

export default function Input({
  register,
  name,
  label,
  type = 'text',
  error = false,
  helperText = '',
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const isPasswordType = type === 'password';
  const registerProps = typeof register === 'function' ? register(name) : {};

  return (
    <TextField
      {...registerProps}
      {...props}
      type={isPasswordType ? (showPassword ? 'text' : 'password') : type}
      label={label}
      error={error}
      helperText={helperText}
      variant="outlined"
      name={name}
      fullWidth
      slotProps={{
        input: {
          endAdornment: isPasswordType ? (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                edge="end"
                aria-label="toggle password visibility"
              >
                {showPassword ? <LuEyeClosed /> : <FaEye />}
              </IconButton>
            </InputAdornment>
          ) : null,
        },
      }}
    />
  );
}