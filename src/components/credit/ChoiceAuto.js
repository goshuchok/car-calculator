import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarsCard from './CarsCard';
import CreditInput from './CreditInput';
import { Container, Grid } from '@material-ui/core';
import { getMarksAction } from '../../store/actions/marksAction';
import { getModelAction } from '../../store/actions/modelAction';

function ChoiceAuto() {
  const { marks } = useSelector((state) => state.marksData);
  const { model } = useSelector((state) => state.modelData);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getMarksAction());
    dispatch(getModelAction());
  }, []);

  const [selected, setSelected] = useState(false);

  const handleSelected = () => {
    selected ? setSelected(false) : setSelected(true);
  };

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
        {/* <Grid container spacing={3}>
          {model.map((carApi, id) => (
            <Grid item key={id} xs={12} md={6} lg={4}>
              <CarsCard carApi={carApi} />
            </Grid>
          ))}
        </Grid> */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <CarsCard
              selected={selected}
              handleSelected={handleSelected}
              setSelected={setSelected}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ChoiceAuto;
