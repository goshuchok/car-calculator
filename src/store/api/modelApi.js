import axios from 'axios';
import { API_URL } from '../config';
import API_MARKS from './marksApi';

const key = 'xMjRSheumFDOR3KhqDuV81Ytp9OZSAhRpQRsZo5A';
// const MARKS_ID = 1;
// const MODEL_ID = 9;
export const getModel = (markId) => {
  return axios.get(
    `${API_URL}${API_MARKS}/1/marks/${markId}/models?api_key=${key}`
  );

  // return axios.get(
  //   `${API_URL}/auto/categories/${id}/marks/${id}/models?api_key=${key}`
  // );
};
