import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';

function SliderCalculation() {
  return (
    <Container>
      <Box borderTop={1}>
        <Grid container direction="row" spacing={4}>
          <Grid item lg={3} md={3} sm={6}>
            <p className="car_cost">Стоимость авто</p>
            <p className="car_sum">349 000 ₽</p>
          </Grid>
          <Grid item lg={3} md={3} sm={6}>
            <p className="car_cost">Ежемесячный платёж</p>
            <p className="car_sum">15 000 ₽</p>
          </Grid>

          <Grid item lg={6} md={6} sm={12} />
        </Grid>
      </Box>
    </Container>
  );
}

export default SliderCalculation;
