import { GET_MARKS_ERROR, GET_MARKS_SUCCESS } from '../constants/marksTypes';

const initialState = {
  marks: [],
  marksFetchError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MARKS_SUCCESS:
      return {
        ...state,
        marks: action.payload,
        marksFetchError: false,
      };

    case GET_MARKS_ERROR:
      return {
        ...state,
        marks: [],
        marksFetchError: true,
      };

    default:
      return state;
  }
};

export default reducer;
