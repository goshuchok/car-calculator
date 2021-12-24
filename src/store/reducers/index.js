import { combineReducers } from 'redux';
import usersData from './users';
import marksData from './marks';
import modelData from './model';

export default combineReducers({
  usersData,
  marksData,
  modelData,
});
