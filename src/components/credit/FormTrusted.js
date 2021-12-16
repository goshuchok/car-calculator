import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import React from 'react';

function FormTrusted() {
  return (
    <div>
      <h4 className="borrower_information">Доверенные лица</h4>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="ФИО"
              variant="outlined"
              fullWidth={true}
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="outlined-basic"
              label="Мобильный телефон"
              variant="outlined"
              fullWidth={true}
              type="tel"
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
