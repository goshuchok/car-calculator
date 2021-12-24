import { getMarks } from '../api/marksApi';
import { GET_MARKS_ERROR, GET_MARKS_SUCCESS } from '../constants/marksTypes';

export const getMarksAction = () => (dispatch) => {
  getMarks()
    .then((response) =>
      dispatch({
        type: GET_MARKS_SUCCESS,
        payload: response.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: GET_MARKS_ERROR,
      })
    );
};
