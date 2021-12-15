import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const brandModel = [
  {
    brand: 'Hyundai',
    model: 'Solaris',
  },
  {
    brand: 'Volkswagen',
    model: 'GOLF',
  },
  {
    brand: 'Ford',
    model: 'Focus',
  },
  {
    brand: 'Skoda',
    model: 'Octavia',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function CreditInput() {
  const classes = useStyles();
  const [brandCar, setBrandCar] = React.useState('Hyundai');
  const [modelCar, setModelCar] = React.useState('Solaris');

  const handleChangeBrand = (event) => {
    setBrandCar(event.target.value);
  };
  const handleChangeModel = (event) => {
    setModelCar(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={brandCar}
          onChange={handleChangeBrand}
          variant="filled"
        >
          {brandModel.map((option) => (
            <MenuItem key={option.brand} value={option.brand}>
              {option.brand}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          value={modelCar}
          onChange={handleChangeModel}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          {brandModel.map((option) => (
            <option key={option.model} value={option.model}>
              {option.model}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}
export default CreditInput;
