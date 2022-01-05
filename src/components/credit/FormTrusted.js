import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSubmitAction } from '../../store/actions/formSubmitAction';

function FormTrusted() {
  const [trustPhone, setTrustPhone] = useState('');
  const [trustPerson, setTrustPerson] = useState('');

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitAction();
  };
  useEffect(() => {
    dispatch({
      type: 'SET_TRUST_PERSON',
      payload: trustPerson,
    });
    dispatch({
      type: 'SET_TRUST_PHONE',
      payload: trustPhone,
    });
  });

  const handleInputChangePerson = (e) => {
    setTrustPerson(e.target.value);
  };
  const handleInputChangePhone = (e) => {
    setTrustPhone(e.target.value);
  };

  return (
    <div>
      <h4 className="trusted_persons">Доверенные лица</h4>
      <form onSubmit={submitForm}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="ФИО"
              variant="outlined"
              fullWidth={true}
              type="text"
              value={trustPerson}
              onChange={handleInputChangePerson}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="outlined-basic"
              label="Мобильный телефон"
              variant="outlined"
              fullWidth={true}
              type="tel"
              value={trustPhone}
              onChange={handleInputChangePhone}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl variant="filled" style={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem>Ten</MenuItem>
                <MenuItem>Twenty</MenuItem>
                <MenuItem>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default FormTrusted;
