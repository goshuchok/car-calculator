import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

function FormSubmit() {
  const dispatch = useDispatch();
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
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => dispatch({ type: 'SUBMIT_FORM' })}
        >
          Primary
        </Button>
      </Grid>
    </Grid>
  );
}

export default FormSubmit;
