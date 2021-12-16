import { Box, Slider, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function SliderContribution() {
  const [value, setValue] = useState('30%');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TextField
        label="Первый взнос"
        // autoFocus
        value={value}
        size="medium"
        readOnly
        fullWidth
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
      />

      <Slider onChange={handleChange} aria-labelledby="continuous-slider" />
    </Box>
  );
}
export default SliderContribution;
