import axios from 'axios';
import { API_URL } from '../config';

export const getUsers = () => {
  return axios.get(`${API_URL}/users`);
};
