import React, { useEffect, useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setSubmitAction } from '../../store/actions/formSubmitAction';

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
    dispatch({
      type: 'SET_NAME',
      payload: name,
    });
    dispatch({
      type: 'SET_MOBILE_PHONE',
      payload: mobilePhone,
    });
    dispatch({
      type: 'SET_WORK_PHONE',
      payload: workPhone,
    });
    dispatch({
      type: 'SET_ADDRESS',
      payload: address,
    });
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
            variant="filled"
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
            variant="filled"
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
            variant="filled"
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
            variant="filled"
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
