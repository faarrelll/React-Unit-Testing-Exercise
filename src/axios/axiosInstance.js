import axios from "axios";

const axiosInstanceinstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: { "X-Custom-Header": "jsonPlaceholderTest" },
});

export default axiosInstanceinstance;
