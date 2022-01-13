import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { getFirstInstall } from '../../store/actions/calculatorAction';

function CheckedCar(price) {
  const [selected, setSelected] = useState(false);

  const dispatch = useDispatch();

  const handleSelected = () => {
    selected ? setSelected(false) : setSelected(true);
  };
  console.log('price', price);
  useEffect(() => {
    if (selected) {
      dispatch(getFirstInstall(price));
    }
  }, [dispatch, price, selected]);
  return (
    <FormControlLabel
      style={{ margin: 0 }}
      control={
        <Checkbox
          icon={<CircleUnchecked />}
          checkedIcon={<CircleChecked className="checked_circle" />}
          onClick={handleSelected}
        />
      }
      labelPlacement="start"
      label=" Выбрано это авто"
      className="form_control"
    />
  );
}

export default CheckedCar;
