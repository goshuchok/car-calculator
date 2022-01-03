import { GET_SEARCH_ERROR, GET_SEARCH_SUCCESS } from '../constants/searchTypes';

const initialState = {
  search: [],
  searchFetchError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_SUCCESS:
      return {
        ...state,
        // search: [...state.search, action.payload],
        // search: [action.payload],
        search: action.payload,
        searchFetchError: false,
      };

    case GET_SEARCH_ERROR:
      return {
        ...state,
        search: [],
        searchFetchError: true,
      };

    default:
      return state;
  }
};

export default reducer;
