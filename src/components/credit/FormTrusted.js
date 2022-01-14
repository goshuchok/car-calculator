import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSubmitAction } from '../../store/actions/formSubmitAction';
import {
  SET_TRUST_PERSON,
  SET_TRUST_PHONE,
} from '../../store/constants/formTypes';

function FormTrusted() {
  const [trustPhone, setTrustPhone] = useState('');
  const [trustPerson, setTrustPerson] = useState('');

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitAction();
  };

  useEffect(() => {
    dispatch({
      type: SET_TRUST_PERSON,
      payload: trustPerson,
    });
    dispatch({
      type: SET_TRUST_PHONE,
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
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Кем приходится
              </InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                label="Age"
                inputProps={{
                  name: 'age',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Родственник</option>
                <option value={20}>Брат</option>
                <option value={30}>Сестра</option>
                <option value={30}>Сосед</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default FormTrusted;
