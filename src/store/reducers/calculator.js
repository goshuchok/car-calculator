import {
  FIRST_INSTALL,
  GET_MONTHS,
  GET_PERCENT_OFF,
  MONTHS_PRICE,
} from '../constants/calculatorTypes';

const initialState = {
  months: 0,
  percentOff: 0,
  firstInstall: 0,
  monthsPrice: 0,
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
    case MONTHS_PRICE:
      return {
        ...state,
        monthsPrice: action.payload,
      };
    case FIRST_INSTALL:
      return {
        ...state,
        firstInstall: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
