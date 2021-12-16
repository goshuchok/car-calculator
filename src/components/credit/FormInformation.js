import { Container } from '@material-ui/core';
import React from 'react';
import FormBorrower from './FormBorrower';
import FormSubmit from './FormSubmit';
import FormTrusted from './FormTrusted';

function FormInformation() {
  return (
    <Container>
      <h4 className="borrower_information">Информация о заёмщике</h4>
      <FormBorrower />
      <FormTrusted />
      <FormSubmit />
    </Container>
  );
}

export default FormInformation;
