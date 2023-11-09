// axiosSingleton.js

import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: process.env.BACKEND_URL || "https://api.example.com", // Replace with your API base URL
});

// Add an interceptor to handle requests and responses
instance.interceptors.request.use(
  (config) => {
    // Check if a JWT token exists in localStorage
    const token = localStorage.getItem("jwt");

    // If a token exists, add it to the request headers
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

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
    if (error?.response?.status === 401) {
      localStorage.removeItem("jwt");
      window.location.href = "/";
      alert("You have been signed out, please sign in again");
      return Promise.reject(error);
    }

    // console.log(JSON.stringify());
    const response_data = error.response?.data as any;
    alert(response_data.message);
    console.error(response_data);
    // You can handle errors here (e.g., show error messages)
    return Promise.reject(error);
  }
);

export default instance;
