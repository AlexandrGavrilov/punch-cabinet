import axios from 'axios';

import { BASE_URL, REQUEST_TIMEOUT } from '../config/server';

export const httpClient = axios.create({
  baseURL: `${BASE_URL}/api`,
  timeout: REQUEST_TIMEOUT,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
});
