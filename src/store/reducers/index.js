import { combineReducers } from 'redux';
import usersData from './users';
import carsData from './cars';

export default combineReducers({
  usersData,
  carsData,
});
