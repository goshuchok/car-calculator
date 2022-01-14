import React, { useEffect, useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {
  setFormAddress,
  setFormMobilePhone,
  setFormName,
  setFormWorkPhone,
  setSubmitAction,
} from '../../store/actions/formSubmitAction';

function FormBorrower() {
  const [name, setName] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [workPhone, setWorkPhone] = useState('');
  const [address, setAddress] = useState('');

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitAction();
  };

  useEffect(() => {
    dispatch(setFormName(name));
    dispatch(setFormMobilePhone(mobilePhone));
    dispatch(setFormWorkPhone(workPhone));
    dispatch(setFormAddress(address));
  });

  const handleInputChangeName = (e) => {
    setName(e.target.value);
  };

  const handleInputChangeMobilePhone = (e) => {
    setMobilePhone(e.target.value);
  };

  const handleInputChangeWorkPhone = (e) => {
    setWorkPhone(e.target.value);
  };
  const handleInputChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  return (
    <form onSubmit={submitForm}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="Полное ФИО"
            variant="outlined"
            fullWidth={true}
            type="text"
            value={name}
            onChange={handleInputChangeName}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="outlined-basic"
            label="Мобильный телефон"
            variant="outlined"
            fullWidth={true}
            type="tel"
            value={mobilePhone}
            onChange={handleInputChangeMobilePhone}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="outlined-basic"
            label="Рабочий телефон"
            variant="outlined"
            fullWidth={true}
            type="tel"
            value={workPhone}
            onChange={handleInputChangeWorkPhone}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-basic"
            label="Адрес фактического проживания "
            variant="outlined"
            fullWidth={true}
            type="text"
            value={address}
            onChange={handleInputChangeAddress}
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default FormBorrower;
