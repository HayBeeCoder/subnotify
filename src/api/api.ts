import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

// Default config for the axios instance
const axiosParams: AxiosRequestConfig = {
  // Set different base URL based on the environment
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '/',
  // Alternative if you have more environments
  // baseURL: process.env.VUE_APP_API_BASE_URL
}

// Create axios instance with default params
const axiosInstance: AxiosInstance = axios.create(axiosParams)

// Define the interface for the API function
interface Api {
  get: <T>(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
  post: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
  patch: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
  delete: <T>(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
}

// Main api function
const api = (axios: AxiosInstance): Api => {
  // Wrapper functions around axios
  return {
    get: <T>(url: string, config?: AxiosRequestConfig) => axios.get<T>(url, config),
    post: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) =>
      axios.post<T>(url, body, config),
    patch: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) =>
      axios.patch<T>(url, body, config),
    delete: <T>(url: string, config?: AxiosRequestConfig) => axios.delete<T>(url, config),
  }
}

export const didUserAbortRequest = (error: unknown) => axios.isCancel(error)
export const getCancelSource = () => axios.CancelToken.source()

// Type definition for the abortable function
export const abortable = <T extends (...args: unknown[]) => unknown>(
  fn: T,
): {
  abort: () => void // Exposes the abort method
  fn: (...args: Parameters<T>) => ReturnType<T> // The wrapped function
} => {
  // Create cancel functionality
  const { cancel, token } = getCancelSource()

  return {
    abort: cancel, // Expose the cancel method
    fn: (...args: Parameters<T>): ReturnType<T> => {
      // Ensure the last argument is an AxiosRequestConfig object
      const config = args[args.length - 1] as AxiosRequestConfig
      if (typeof config !== 'object') {
        throw new Error('The last argument must be a config object!')
      }

      // Inject cancelToken into the Axios configuration
      args[args.length - 1] = {
        ...config,
        cancelToken: token,
      }

      // Call the original function with updated arguments
      return fn(...args) as ReturnType<T>
    },
  }
}

// Initialise the api function and pass axiosInstance to it
export default api(axiosInstance)
