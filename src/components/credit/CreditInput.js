import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { getMarksAction } from '../../store/actions/marksAction';
import { getModelAction } from '../../store/actions/modelAction';
// import { getSearchAction } from '../../store/actions/searchAction';

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

  const { marks } = useSelector((state) => state.marksData);
  const { model } = useSelector((state) => state.modelData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMarksAction());
  }, []);

  const handleChangeBrand = (event) => {
    setBrandCar(event.target.value);
    dispatch(getModelAction(event.target.value));
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
          defaultValue=""
          onChange={handleChangeBrand}
          variant="filled"
        >
          {marks.map((mark) => (
            <MenuItem key={mark.value} value={mark.value}>
              {mark.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={modelCar}
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
