import { Grid, TextField } from '@material-ui/core';
import React from 'react';

function FormBorrower() {
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
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="outlined-basic"
            label="Мобильный телефон"
            variant="filled"
            fullWidth={true}
            type="tel"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="outlined-basic"
            label="Рабочий телефон"
            variant="filled"
            fullWidth={true}
            type="tel"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-basic"
            label="Адрес фактического проживания "
            variant="filled"
            fullWidth={true}
            type="text"
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default FormBorrower;