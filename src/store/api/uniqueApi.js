import axios from 'axios';
import { API_URL } from '../config';
import { key } from './marksApi';

// const UNIQUE_ID = 19050985;
export const getUnique = (modelsId) => {
  // return axios.get(`${API_URL}/auto/info?api_key=${key}&auto_id=${UNIQUE_ID}`);
  return axios.get(`${API_URL}/auto/info?api_key=${key}&auto_id=${modelsId}`);
  // return axios.get(`${API_URL}/auto/info?api_key=${key}`, {
  //   params: {
  //     auto_id: uniqueId,
  //   },
  // });
};
