import axios from 'axios';
import { API_URL } from '../config';

const key = 'xMjRSheumFDOR3KhqDuV81Ytp9OZSAhRpQRsZo5A';
const API_CARS = '/auto/categories/1/marks';
export const getCars = () => {
  return axios.get(`${API_URL}${API_CARS}?api_key=${key}`);
  // return axios.get(`${API_URL}/auto/info?api_key=${key}&auto_id=19050985`);
};

export default API_CARS;
