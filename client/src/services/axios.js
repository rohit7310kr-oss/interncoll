import axios from "axios";
import config from "../config";

// Create a custom instance using Vite's import.meta.env
const API = axios.create({
  baseURL: config.baseApiUrl,
  //   timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Optional: Attach global request interceptors (e.g., passing a JWT token)
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Optional: Attach global response interceptors (e.g., global error logging)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
    }
    return Promise.reject(error);
  },
);

export default API;
