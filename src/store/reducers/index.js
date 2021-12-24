import { combineReducers } from 'redux';
import usersData from './users';
import searchData from './search';
import marksData from './marks';
import modelData from './model';

export default combineReducers({
  usersData,
  searchData,
  marksData,
  modelData,
});
