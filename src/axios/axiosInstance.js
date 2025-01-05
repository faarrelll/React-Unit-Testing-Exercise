import axios from "axios";

const axiosInstanceinstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: { "X-Custom-Header": "jsonPlaceholderTest" },
});

export const auth = axios.create({
  baseURL: 'https://react-backend-three.vercel.app/api/v1/'
});

auth.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstanceinstance;
