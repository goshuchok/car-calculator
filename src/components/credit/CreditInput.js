import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { getMarksAction } from '../../store/actions/marksAction';
import { getModelAction } from '../../store/actions/modelAction';

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
  const [brandCar, setBrandCar] = useState([]);
  const [modelCar, setModelCar] = useState([]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };
  const handleChangeBrand = (event) => {
    setBrandCar(event.target.value);
  };
  const handleChangeModel = (event) => {
    setModelCar(event.target.value);
  };

  const { search } = useSelector((state) => state.searchData);
  const { marks } = useSelector((state) => state.marksData);
  const { model } = useSelector((state) => state.modelData);
  console.log(search);
  // console.log('model', model);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMarksAction());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getModelAction());
  }, [dispatch]);

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      // onSubmit={handleSubmit}
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          // value={brandCar}
          defaultValue=""
          onChange={handleChangeBrand}
          variant="filled"
        >
          {marks.map((mark, id) => (
            <MenuItem key={id} value={mark.name}>
              {mark.name}
            </MenuItem>
          ))}
        </TextField>
        <p>werwerwer {brandCar}</p>
        {/* <TextField
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
              {brandCar}
            </option>
          ))}
        </TextField> */}
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          // value={brandCar}
          defaultValue=""
          onChange={handleChangeModel}
          variant="filled"
        >
          {model.map((model, id) => (
            <MenuItem key={id} value={model.name}>
              {model.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
export default CreditInput;
