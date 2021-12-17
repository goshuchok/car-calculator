import { Box, Grid, Slider, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';

function SliderTerm() {
  const [value, setValue] = useState('');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TextField
        label="Желаемый срок кредита"
        value={value}
        size="medium"
        fullWidth
        readOnly
        InputProps={{
          disableUnderline: true,
        }}
      />
      <Slider onChange={handleChange} defaultValue={30} step={10} max={96} />
      <Grid container>
        <Grid item xs={6} sm={6}>
          <Typography>1 мес</Typography>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Typography align="right">96 мес</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default SliderTerm;
