import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL
    ? `${import.meta.env.VITE_BACKEND_API_URL}/api`
    : "http://localhost:5000/api",
  withCredentials: true, 
});

export default API;
