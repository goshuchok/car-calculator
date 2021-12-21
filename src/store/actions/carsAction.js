import { getCars } from '../api/carsApi';
import { GET_CARS_ERROR, GET_CARS_SUCCESS } from '../constants/carsTypes';

export const getCarsAction = () => (dispatch) => {
  getCars()
    .then((response) =>
      dispatch({
        type: GET_CARS_SUCCESS,
        payload: response.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: GET_CARS_ERROR,
      })
    );
};
