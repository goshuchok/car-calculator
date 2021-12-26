import axios from 'axios';
import { API_URL } from '../config';

const key = 'xMjRSheumFDOR3KhqDuV81Ytp9OZSAhRpQRsZo5A';
const API_MARKS = '/auto/categories';
export const getMarks = (id) => {
  // return axios.get(`${API_URL}${API_MARKS}/${id}/marks?api_key=${key}`);
  return axios.get(`${API_URL}${API_MARKS}=${id}/marks?api_key=${key}`);
  // return axios.get(`${API_URL}/auto/info?api_key=${key}&auto_id=19050985`);
};

export default API_MARKS;
