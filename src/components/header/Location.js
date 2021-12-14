import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import cityLocation from '../../images/city.png';

const cities = [
  {
    label: 'Екатеринбург',
  },
  {
    label: 'Париж',
  },
  {
    label: 'Варшава',
  },
  {
    label: 'Прага',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '163',
    },
    display: 'flex',
    alignItems: 'center',
  },
}));

function Location() {
  const classes = useStyles();
  const [location, setLocation] = useState('Екатеринбург');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <img alt="location" src={cityLocation} />
      <div>
        <TextField
          id="standard-select-location"
          value={location}
          onChange={handleChange}
          select
          InputProps={{ disableUnderline: true }}
        >
          {cities.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}

export default Location;
