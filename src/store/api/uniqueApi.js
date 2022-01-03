import axios from 'axios';
import { API_URL } from '../config';

const key = 'xMjRSheumFDOR3KhqDuV81Ytp9OZSAhRpQRsZo5A';

const UNIQUE_ID = 19050985;
export const getUnique = () => {
  return axios.get(`${API_URL}/auto/info?api_key=${key}&auto_id=${UNIQUE_ID}`);
};
