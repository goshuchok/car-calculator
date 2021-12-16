import React from 'react';
import ChoiceAuto from '../components/credit/ChoiceAuto';
import CreditTitle from '../components/credit/CreditTitle';
import FormInformation from '../components/credit/FormInformation';
import Slider from '../components/credit/Slider';

function AutoCredit() {
  return (
    <>
      <CreditTitle />
      <ChoiceAuto />
      <Slider />
      <FormInformation />
    </>
  );
}

export default AutoCredit;
