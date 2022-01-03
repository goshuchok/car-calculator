import axios from 'axios';
import { API_URL } from '../config';

const key = 'xMjRSheumFDOR3KhqDuV81Ytp9OZSAhRpQRsZo5A';

const searchParam = [
  {
    additional_params: {
      lang_id: 2,
      page: 0,
      view_type_id: 0,
      target: 'search',
      section: 'auto',
      catalog_name: '',
      elastica: true,
      nodejs: true,
      with_photo: 1,
      price_ot: 1000,
      price_do: 60000,
      s_yers: 2021, // Years !!!!!!!!!!!!!!!! &(s_yers[1]=2021)
    },
  },
];

export const getSearch = () => {
  return axios.get(`${API_URL}/auto/search?api_key=${key}&${searchParam}`);
};

// `${API_URL}/auto/search?api_key=${key}&(category_id=1)&(bodystyle[0]=3&bodystyle[4]=2)&(s_yers[1]=2021)&(price_ot=1000&price_do=60000)&(currency=1)&(with_photo=1)`
