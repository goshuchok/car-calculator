import axios from 'axios';
import { API_URL } from '../config';

const key = 'xMjRSheumFDOR3KhqDuV81Ytp9OZSAhRpQRsZo5A';
export const getCars = () => {
  return axios.get(`${API_URL}/auto/categories/1/marks?api_key=${key}`);
};
