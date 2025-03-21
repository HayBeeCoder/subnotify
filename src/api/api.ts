import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Default config for the axios instance
const axiosParams: AxiosRequestConfig = {
  // Set different base URL based on the environment
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '/',
  // Alternative if you have more environments
  // baseURL: process.env.VUE_APP_API_BASE_URL
};

// Create axios instance with default params
const axiosInstance: AxiosInstance = axios.create(axiosParams);

// Define the interface for the API function
interface Api {
  get: <T>(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
  post: <T>(url: string, body?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
  patch: <T>(url: string, body?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
  delete: <T>(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;
}

// Main api function
const api = (axios: AxiosInstance): Api => {
  // Wrapper functions around axios
  return {
    get: <T>(url: string, config?: AxiosRequestConfig) => axios.get<T>(url, config),
    post: <T>(url: string, body?: any, config?: AxiosRequestConfig) => axios.post<T>(url, body, config),
    patch: <T>(url: string, body?: any, config?: AxiosRequestConfig) => axios.patch<T>(url, body, config),
    delete: <T>(url: string, config?: AxiosRequestConfig) => axios.delete<T>(url, config),
  };
};

// Initialise the api function and pass axiosInstance to it
export default api(axiosInstance);
