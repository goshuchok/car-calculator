import { combineReducers } from 'redux';
import usersData from './users';
import searchData from './search';
import marksData from './marks';
import modelData from './model';
import uniqueData from './unique';

export default combineReducers({
  usersData,
  searchData,
  marksData,
  modelData,
  uniqueData,
});
