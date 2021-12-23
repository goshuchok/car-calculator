import axios from 'axios';
import { API_URL } from '../config';
import API_CARS from './carsApi';

const key = 'xMjRSheumFDOR3KhqDuV81Ytp9OZSAhRpQRsZo5A';
export const getModel = () => {
  return axios.get(`${API_URL}${API_CARS}/3/models?api_key=${key}`);
};
