import React, { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';

function FormBorrower() {
  const [name, setName] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [workPhone, setWorkPhone] = useState('');
  const [address, setAddress] = useState('');

  return (
    <form>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="Полное ФИО"
            variant="filled"
            fullWidth={true}
            type="text"
            value={name}
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
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default FormBorrower;
