import axios from 'axios';
import { API_URL } from '../config';
import { categoriesUrl, key } from './marksApi';

export const getModel = (marksId) => {
  return axios.get(
    `${API_URL}${categoriesUrl}/1/marks/${marksId}/models?api_key=${key}`
  );
};
