import React, { useEffect } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthsPrice } from '../../store/actions/calculatorAction';

import calculate from '../../store/calculate/index';

function SliderCalculation() {
  const { months } = useSelector((state) => state.calculator);
  const { monthsPrice } = useSelector((state) => state.calculator);
  const { firstInstall } = useSelector((state) => state.calculator);
  const { percentOff } = useSelector((state) => state.calculator);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMonthsPrice(calculate(firstInstall, months, percentOff)));
  }, [dispatch, firstInstall, months, percentOff]);

  console.log('months', months);
  console.log('monthsPrice', monthsPrice);
  console.log('firstInstall.price', firstInstall);
  console.log('percentOff', percentOff);

  const ifPayNaN = (value) => {
    if (isNaN(value)) {
      return 0;
    }
    return value.toFixed(0);
  };

  return (
    <Container>
      <Box borderTop={1}>
        <Grid container direction="row" spacing={4}>
          <Grid item lg={3} md={3} sm={6}>
            <p className="car_cost">Стоимость авто</p>
            <p className="car_sum">{firstInstall || 0} UA</p>
          </Grid>
          <Grid item lg={3} md={3} sm={6}>
            <p className="car_cost">Ежемесячный платёж</p>
            <p className="car_sum">{ifPayNaN(monthsPrice)} UA</p>
          </Grid>

          <Grid item lg={6} md={6} sm={12} />
        </Grid>
      </Box>
    </Container>
  );
}

export default SliderCalculation;
