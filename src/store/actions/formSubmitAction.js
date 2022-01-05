import { SUBMIT_FORM } from '../constants/formTypes';

export const setSubmitAction = () => (dispatch) => {
  dispatch({
    type: SUBMIT_FORM,
  });
};
