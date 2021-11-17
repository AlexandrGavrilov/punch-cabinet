import axios from 'axios';

import { BASE_URL, REQUEST_TIMEOUT } from '../config/server';

export const httpClient = axios.create({
  baseURL: `${BASE_URL}/api`,
  timeout: REQUEST_TIMEOUT,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use((config) => ({ ...config, headers: { ...config.headers, Auth: localStorage.getItem('token') } }));
