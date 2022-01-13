import { combineReducers } from 'redux';

import searchData from './search';
import marksData from './marks';
import modelData from './model';
import uniqueData from './unique';
import form from './form';
import calculator from './calculator';

export default combineReducers({
  searchData,
  marksData,
  modelData,
  uniqueData,
  form,
  calculator,
});
