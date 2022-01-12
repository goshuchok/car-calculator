import { getSearch } from '../api/searchApi';
import { GET_SEARCH_ERROR, GET_SEARCH_SUCCESS } from '../constants/searchTypes';

export const getSearchAction = (params) => (dispatch) => {
  return getSearch(params)
    .then((response) =>
      dispatch({
        type: GET_SEARCH_SUCCESS,
        payload: response.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: GET_SEARCH_ERROR,
      })
    );
};
