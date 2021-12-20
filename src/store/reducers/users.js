import { GET_USERS_ERROR, GET_USERS_SUCCESS } from '../constants/userTypes';

const initialState = {
  users: [],
  usersFetchError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        usersFetchError: false,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        users: [],
        usersFetchError: true,
      };
    default:
      return state;
  }
};

export default reducer;
