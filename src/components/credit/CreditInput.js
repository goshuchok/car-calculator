import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { getMarksAction } from '../../store/actions/marksAction';
import { getModelAction } from '../../store/actions/modelAction';
import { getUniqueAction } from '../../store/actions/uniqueAction';
import { getSearchAction } from '../../store/actions/searchAction';

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
  }, [dispatch]);

  const handleChangeBrand = (event) => {
    setBrandCar(event.target.value);
    dispatch(getModelAction(event.target.value));
  };
  const handleChangeModel = (event) => {
    setModelCar(event.target.value);
    let data = { markaId: brandCar, modelId: event.target.value };
    dispatch(getSearchAction(data)).then((response) => {
      let ids = response.payload.result.search_result.ids;
      // eslint-disable-next-line array-callback-return
      ids.map((id) => {
        dispatch(getUniqueAction(id));
      });
    });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={brandCar}
          // defaultValue=""
          onChange={handleChangeBrand}
          variant="outlined"
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
          // defaultValue=""
          onChange={handleChangeModel}
          variant="outlined"
        >
          {model.map((model) => (
            <MenuItem key={model.value} value={model.value}>
              {model.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
export default CreditInput;
