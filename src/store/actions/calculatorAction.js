import {
  FIRST_INSTALL,
  GET_MONTHS,
  GET_PERCENT_OFF,
  MONTHS_PRICE,
} from '../constants/calculatorTypes';

export const getPercentOff = (percentOff) => (dispatch) => {
  dispatch({
    type: GET_PERCENT_OFF,
    payload: percentOff,
  });
};

export const getMonths = (months) => (dispatch) => {
  dispatch({
    type: GET_MONTHS,
    payload: months,
  });
};

export const getMonthsPrice = (monthsPrice) => (dispatch) => {
  dispatch({
    type: MONTHS_PRICE,
    payload: monthsPrice,
  });
};

export const getFirstInstall = (firstInstall) => (dispatch) => {
  dispatch({
    type: FIRST_INSTALL,
    payload: firstInstall,
  });
};
