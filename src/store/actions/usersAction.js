import { GET_USERS_SUCCESS } from '../constants/userTypes';

const users = [
  {
    id: 1,
    name: 'Ivan',
    age: 28,
  },
  {
    id: 2,
    name: 'Petro',
    age: 33,
  },
  {
    id: 1,
    name: 'Mykola',
    age: 30,
  },
];

export const getUsersAction = () => (dispatch) => {
  //   console.log('response', response);
  dispatch({
    type: GET_USERS_SUCCESS,
    payload: users,
  });
};
