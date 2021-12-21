import axios from 'axios';
import { API_URL } from '../config';

const key = 'xMjRSheumFDOR3KhqDuV81Ytp9OZSAhRpQRsZo5A';
export const getCars = () => {
  // return axios.get(`${API_URL}/auto`);
  return axios.get(`${API_URL}/auto/search?api_key=${key}`);
};
