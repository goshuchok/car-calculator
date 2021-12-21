import { GET_CARS_ERROR, GET_CARS_SUCCESS } from '../constants/carsTypes';

const initialState = {
  cars: [],
  carsFetchError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS_SUCCESS:
      return {
        ...state,
        cars: action.payload,
        carsFetchError: false,
      };

    case GET_CARS_ERROR:
      return {
        ...state,
        cars: [],
        carsFetchError: true,
      };

    default:
      return state;
  }
};

export default reducer;
