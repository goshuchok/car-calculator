let apiDomain;

if (process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  apiDomain = 'https://developers.ria.com';
} else {
  apiDomain = './api';
}

export const API_URL = apiDomain;
