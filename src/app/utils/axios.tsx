// axiosSingleton.js

import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: process.env.BACKEND_URL || "https://api.example.com", // Replace with your API base URL
});

// Add an interceptor to handle requests and responses
instance.interceptors.request.use(
  (config) => {
    // You can modify the request config here (e.g., add headers)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // You can handle successful responses here
    return response;
  },
  (error: AxiosError) => {
    const response_data = error.response?.data as any;
    alert(response_data.message);
    // You can handle errors here (e.g., show error messages)
    return Promise.reject(error);
  }
);

export default instance;
