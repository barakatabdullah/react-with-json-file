import axios from 'axios';
import { getUserToken } from '../stores/user';


const api = axios.create({

  baseURL: "/api",

  // Request timeout
  timeout: 60000,

  // Request headers
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getUserToken()}`
  },
});

export default api;
