import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { setSubmitAction } from '../../store/actions/formSubmitAction';

function FormSubmit() {
  const dispatch = useDispatch();

  return (
    <Grid
      container
      className="form_submit"
      direction="row"
      alignItems="center"
      spacing={4}
    >
      <Grid item xs={12} sm={6}>
        <Typography>
          Отправляя заявку вы соглашатесь с условями обработки{' '}
          <a href="/autocredit" style={{ color: '#07b1fd' }}>
            персональных данных
          </a>
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
        <button
          className="submit_button"
          onClick={(e) => dispatch(setSubmitAction())}
        >
          Отправить заявку
        </button>
      </Grid>
    </Grid>
  );
}

export default FormSubmit;
