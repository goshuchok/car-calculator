import { GET_MONTHS, GET_PERCENT_OFF } from '../constants/calculatorTypes';

const initialState = {
  months: '',
  percentOff: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MONTHS:
      return {
        ...state,
        months: action.payload,
      };
    case GET_PERCENT_OFF:
      return {
        ...state,
        percentOff: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
