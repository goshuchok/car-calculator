import { getUnique } from '../api/uniqueApi';
import { GET_UNIQUE_ERROR, GET_UNIQUE_SUCCESS } from '../constants/uniqueTypes';

export const getUniqueAction = (id) => (dispatch) => {
  getUnique(id)
    .then((response) =>
      dispatch({
        type: GET_UNIQUE_SUCCESS,
        payload: response.data,
      })
    )
    .catch(
      (error) => console.log('error', error),
      dispatch({
        type: GET_UNIQUE_ERROR,
      })
    );
};
