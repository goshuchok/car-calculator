import axios from 'axios';
import { API_URL } from '../config';
import API_MARKS from './marksApi';

const key = 'xMjRSheumFDOR3KhqDuV81Ytp9OZSAhRpQRsZo5A';
export const getModel = (id = 9) => {
  return axios.get(
    `${API_URL}${API_MARKS}/1/marks/${id}/models?api_key=${key}`
  );
  // return axios.get(
  //   `${API_URL}/auto/categories/${id}/marks/${id}/models?api_key=${key}`
  // );
};
