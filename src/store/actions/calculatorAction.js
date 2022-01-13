import { GET_MONTHS, GET_PERCENT_OFF } from '../constants/calculatorTypes';

export const getPercentOff = () => (dispatch) => {
  dispatch({
    type: GET_PERCENT_OFF,
  });
};

export const getMonths = () => (dispatch) => {
  dispatch({
    type: GET_MONTHS,
  });
};
