import { Box, Container, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import SliderCalculation from './SliderCalculation';
import SliderContribution from './SliderContribution';
import SliderTerm from './SliderTerm';

function Slider() {
  const [value, setValue] = useState('30');
  const [valueMonth, setValueMonth] = useState(0);
  return (
    <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <SliderTerm />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SliderContribution />
          </Grid>
          <Grid item xs={12} sm={12}>
            <SliderCalculation value={value} valueMonth={valueMonth} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Slider;
