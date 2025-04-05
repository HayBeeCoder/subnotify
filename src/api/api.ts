import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import type { TApi} from './types'

// Default config for the axios instance
const axiosParams: AxiosRequestConfig = {
  baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/subscription' : '/',
}

// Create axios instance with default params
const axiosInstance: AxiosInstance = axios.create(axiosParams)

const api = (axios: AxiosInstance): TApi => {
  return {
    get: <T>(url: string, body?: unknown , config?: AxiosRequestConfig) => axios.get<T>(url, config),
    post: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) => axios.post<T>(url, body, config),
    patch: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) => axios.patch<T>(url, body, config),
    put: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) => axios.put<T>(url, body, config),
    delete: <T>(url: string, body?: unknown ,config?: AxiosRequestConfig) => axios.delete<T>(url, config),
  }
}

export default api(axiosInstance)
