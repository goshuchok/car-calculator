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

  // const [searchCar, setSearchCar] = useState([]);

  const [brandCar, setBrandCar] = useState([]);

  const [modelCar, setModelCar] = useState([]);

  // const { search } = useSelector((state) => state.searchData);
  const { marks } = useSelector((state) => state.marksData);
  const { model } = useSelector((state) => state.modelData);

  const dispatch = useDispatch();
  // useEffect(()=>{
  //    dispatch(getSearchAction());
  // },[dispatch])
  useEffect(() => {
    dispatch(getMarksAction());
  }, []);

  // useEffect(() => {
  //   dispatch(getModelAction());
  // }, []);

  // console.log(brandCar);

  // const handleChangeSearch = (event) => {
  //   setSearchCar(event.target.value);
  // };

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
        {/* <p>brand: {brandCar}</p> */}

        {/* <p>search : {search.result}</p> */}
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
          // value={modelCar}
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
        {/* <p>model: {modelCar}</p> */}
        {/* <TextField
          id="outlined-select-currency"
          select
          label="Search"
          value={searchCar}
          defaultValue="searchCar"
          onChange={handleChangeSearch}
          variant="filled"
          SelectProps={{
            multiple: true,
            value: [],
          }}
        >
          {search.map((ser, id) => (
            <MenuItem key={id} value={ser.id}>
              {ser.id}
            </MenuItem>
          ))}
        </TextField> */}
        {/* {search.search_result_common?.map((ser) => (
          <ul key={ser}>
            <li>{ser.type}</li>
          </ul>
        ))} */}
      </div>
    </form>
  );
}
export default CreditInput;
