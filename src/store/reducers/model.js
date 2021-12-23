import { GET_MODEL_ERROR, GET_MODEL_SUCCESS } from '../constants/modelTypes';

const initialState = {
  model: [],
  carsFetchError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MODEL_SUCCESS:
      return {
        ...state,
        model: action.payload,
        carsFetchError: false,
      };

    case GET_MODEL_ERROR:
      return {
        ...state,
        model: [],
        carsFetchError: true,
      };

    default:
      return state;
  }
};

export default reducer;
