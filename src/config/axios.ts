import axios from "axios";

const api = axios.create({
  baseURL: "/data",

  // Request timeout
  timeout: 60000,
});

export default api;
