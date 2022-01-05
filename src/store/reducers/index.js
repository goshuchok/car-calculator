import { combineReducers } from 'redux';
import usersData from './users';
import searchData from './search';
import marksData from './marks';
import modelData from './model';
import uniqueData from './unique';
import form from './form';

export default combineReducers({
  usersData,
  searchData,
  marksData,
  modelData,
  uniqueData,
  form,
});
