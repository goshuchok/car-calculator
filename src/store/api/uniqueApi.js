import axios from 'axios';
import { API_URL } from '../config';
import { key } from './marksApi';

const UNIQUE_ID = 19050985;
export const getUnique = () => {
  return axios.get(`${API_URL}/auto/info?api_key=${key}&auto_id=${UNIQUE_ID}`);
  // return axios.get(`${API_URL}/auto/info?api_key=${key}&auto_id=${uniqueId}`);
};
