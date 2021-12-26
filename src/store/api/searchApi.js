import axios from 'axios';
import { API_URL } from '../config';

const key = 'xMjRSheumFDOR3KhqDuV81Ytp9OZSAhRpQRsZo5A';

export const getSearch = () => {
  return axios.get(
    `${API_URL}/auto/search?api_key=${key}&(category_id=1)&(s_yers[1]=2021)`
  );
};

console.log(getSearch());
