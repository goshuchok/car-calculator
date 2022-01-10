import axios from 'axios';
import { API_URL } from '../config';
import { categoriesUrl, key } from './marksApi';

export const getModel = (markId) => {
  return axios.get(
    `${API_URL}${categoriesUrl}/1/marks/${markId}/models?api_key=${key}`
  );
};
