import { getUsers } from '../api/usersApi';
import { GET_USERS_ERROR, GET_USERS_SUCCESS } from '../constants/userTypes';

export const getUsersAction = () => (dispatch) => {
  getUsers()
    .then((response) =>
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: response.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: GET_USERS_ERROR,
      })
    );
};
