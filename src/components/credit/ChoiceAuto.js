import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CarsCard from './CarsCard';
import CreditInput from './CreditInput';
import { Container, Grid } from '@material-ui/core';

function ChoiceAuto() {
  const { model } = useSelector((state) => state.modelData);

  const [selected, setSelected] = useState(false);

  const handleSelected = () => {
    selected ? setSelected(false) : setSelected(true);
  };

  return (
    <div>
      <Container>
        <h4 className="choice_title">Выберите авто</h4>
        <CreditInput />
        <Grid container spacing={3}>
          {model.map((carApi, id) => (
            <Grid item key={id} xs={12} md={6} lg={4}>
              <CarsCard
                carApi={carApi}
                selected={selected}
                handleSelected={handleSelected}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ChoiceAuto;
