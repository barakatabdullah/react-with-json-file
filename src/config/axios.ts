import axios from 'axios';

const api = axios.create({

  baseURL: "/data",

  // Request timeout
  timeout: 60000,

  // Request headers
  // headers: {
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${getUserToken()}`
  // },
});

export default api;
