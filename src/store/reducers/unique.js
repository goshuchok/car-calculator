import { GET_UNIQUE_ERROR, GET_UNIQUE_SUCCESS } from '../constants/uniqueTypes';

const initialState = {
  unique: [],
  uniqueFetchError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UNIQUE_SUCCESS:
      return {
        ...state,
        unique: [...state.unique, action.payload],
        uniqueFetchError: false,
      };

    case GET_UNIQUE_ERROR:
      return {
        ...state,
        unique: [],
        uniqueFetchError: true,
      };

    default:
      return state;
  }
};

export default reducer;
