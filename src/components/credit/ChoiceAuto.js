import React from 'react';

import CarsCard from './CarsCard';
import CreditInput from './CreditInput';
import { Container } from '@material-ui/core';

function ChoiceAuto() {
  return (
    <div>
      <Container>
        <h4 className="choice_title">Выберите авто</h4>
        <CreditInput />
        <CarsCard />
      </Container>
    </div>
  );
}

export default ChoiceAuto;
