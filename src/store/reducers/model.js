import { GET_MODEL_ERROR, GET_MODEL_SUCCESS } from '../constants/modelTypes';

const initialState = {
  model: [],
  modelFetchError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MODEL_SUCCESS:
      return {
        ...state,
        model: action.payload,
        modelFetchError: false,
      };

    case GET_MODEL_ERROR:
      return {
        ...state,
        model: [],
        modelFetchError: true,
      };

    default:
      return state;
  }
};

export default reducer;
