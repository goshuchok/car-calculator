import { combineReducers } from 'redux';
import usersData from './users';
import carsData from './cars';
import modelData from './model';

export default combineReducers({
  usersData,
  carsData,
  modelData,
});
