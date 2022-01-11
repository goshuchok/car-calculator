import { getModel } from '../api/modelApi';
import { GET_MODEL_ERROR, GET_MODEL_SUCCESS } from '../constants/modelTypes';

export const getModelAction = (marksId) => (dispatch) => {
  getModel(marksId)
    .then((response) =>
      dispatch({
        type: GET_MODEL_SUCCESS,
        payload: response.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: GET_MODEL_ERROR,
      })
    );
};
