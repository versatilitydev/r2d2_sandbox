import axios, { AxiosInstance } from "axios";
import { API_BASE_URL } from "../settings/constants";

// Define a type for your Axios instance with custom configuration
type ApiInstance = AxiosInstance;

const apiInstance: ApiInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // timeout after 5 seconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default apiInstance;
