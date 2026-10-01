import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup ,FormHelperText } from '@mui/material';

export default function GenderRadioGroup({
  register,
  formErrors,
  error=false,

}) {
  return (
    <FormControl error={!!formErrors?.gender}>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <FormHelperText>{formErrors?.gender?.message}</FormHelperText>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <FormControlLabel {...register('gender')} value="female" control={<Radio />} label="female" />
        <FormControlLabel {...register('gender')} value="male" control={<Radio />} label="male" />
        </RadioGroup>
    </FormControl>
  );
}