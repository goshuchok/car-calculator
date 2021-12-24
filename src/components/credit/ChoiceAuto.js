import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarsCard from './CarsCard';
import CreditInput from './CreditInput';
import { Container, Grid } from '@material-ui/core';
import { getMarksAction } from '../../store/actions/marksAction';

function ChoiceAuto() {
  const { marks } = useSelector((state) => state.marksData);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getMarksAction());
  // }, []);
  return (
    <div>
      <Container>
        <h4 className="choice_title">Выберите авто</h4>
        <CreditInput />
        {/* <Grid container spacing={3}>
          {cars.map((carApi, id) => (
            <Grid item key={id} xs={12} md={6} lg={4}>
              <CarsCard carApi={carApi} />
            </Grid>
          ))}
        </Grid> */}
      </Container>
    </div>
  );
}

export default ChoiceAuto;
