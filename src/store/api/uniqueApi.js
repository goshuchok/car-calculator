import axios from 'axios';
import { API_URL } from '../config';
import { key } from './marksApi';

export function getUnique(id) {
  return axios.get(`${API_URL}/auto/info?api_key=${key}&auto_id=${id}`);
}
