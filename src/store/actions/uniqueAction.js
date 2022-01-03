import { getUnique } from '../api/uniqueApi';
import { GET_UNIQUE_ERROR, GET_UNIQUE_SUCCESS } from '../constants/uniqueTypes';

export const getUniqueAction = () => (dispatch) => {
  getUnique()
    .then((response) =>
      dispatch({
        type: GET_UNIQUE_SUCCESS,
        payload: response.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: GET_UNIQUE_ERROR,
      })
    );
};
