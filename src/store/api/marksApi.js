import axios from 'axios';
import { API_URL } from '../config';

export const key = 'xMjRSheumFDOR3KhqDuV81Ytp9OZSAhRpQRsZo5A';
export const categoriesUrl = '/auto/categories';

export const getMarks = (marksId = 1) => {
  return axios.get(`${API_URL}${categoriesUrl}${marksId}/marks?api_key=${key}`);
};
