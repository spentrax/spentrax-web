import axios from "axios";
import { setGlobalLoader } from "../services/loaderService";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY,
  },
});

api.interceptors.request.use((config) => {
  setGlobalLoader(true);

  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (res) => {
    setGlobalLoader(false);
    return res;
  },
  (err) => {
    setGlobalLoader(false);

    if (err.response?.status === 401) {
      localStorage.removeItem("token");
    }

    return Promise.reject(err);
  }
);

export default api;