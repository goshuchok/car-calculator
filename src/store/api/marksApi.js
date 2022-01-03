import axios from 'axios';
import { API_URL } from '../config';

const key = 'xMjRSheumFDOR3KhqDuV81Ytp9OZSAhRpQRsZo5A';
const API_MARKS = '/auto/categories';
const MARKS_ID = 1;
export const getMarks = () => {
  // return axios.get(`${API_URL}${API_MARKS}/${id}/marks?api_key=${key}`);
  return axios.get(`${API_URL}${API_MARKS}${MARKS_ID}/marks?api_key=${key}`);
  // return axios.get(`${API_URL}/auto/info?api_key=${key}&auto_id=19050985`);
};

export default API_MARKS;
