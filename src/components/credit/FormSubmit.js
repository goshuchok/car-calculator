import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';

function FormSubmit() {
  return (
    <Grid
      container
      direction="row"
      // justifyContent="space-around"
      alignItems="center"
      spacing={4}
    >
      <Grid item xs={12} sm={6}>
        <Typography>
          Отправляя заявку вы соглашатесь с условями обработки персональных
          данных
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        container
        direction="row"
        justifyContent="flex-end"
      >
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </Grid>
    </Grid>
  );
}

export default FormSubmit;
