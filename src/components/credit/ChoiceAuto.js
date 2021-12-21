import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarsCard from './CarsCard';
import CreditInput from './CreditInput';
import { Container, Grid } from '@material-ui/core';
import { getCarsAction } from '../../store/actions/carsAction';

function ChoiceAuto() {
  const { cars } = useSelector((state) => state.carsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarsAction());
  }, []);
  return (
    <div>
      <Container>
        <h4 className="choice_title">Выберите авто</h4>
        <CreditInput />
        <Grid container spacing={3}>
          {cars.map((carApi, id) => (
            <Grid item key={id} xs={12} md={6} lg={4}>
              <CarsCard carApi={carApi} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ChoiceAuto;
