import { Box, Grid, Slider, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';

function SliderContribution() {
  const [value, setValue] = useState('30');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TextField
        label="Первый взнос"
        value={`${value}%`}
        size="medium"
        readOnly
        fullWidth
        max={50}
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
      />

      <Slider
        onChange={handleChange}
        aria-labelledby="continuous-slider"
        defaultValue={30}
        max={50}
      />
      <Grid container>
        <Grid item xs={6} sm={6}>
          <Typography>0 %</Typography>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Typography align="right">50%</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default SliderContribution;
