import { Container } from '@material-ui/core';
import React from 'react';
import CreditInput from './CreditInput';

function ChoiceAuto() {
  return (
    <div>
      <Container>
        <h4 className="choice_title">Выберите авто</h4>
        <CreditInput />
      </Container>
    </div>
  );
}

export default ChoiceAuto;
