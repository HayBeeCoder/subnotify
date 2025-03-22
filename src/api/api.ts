import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import type { TApi, TConfig, TDelete, TGet, TPatch, TPossibleRequestMethods, TPost } from './types'

// Default config for the axios instance
const axiosParams: AxiosRequestConfig = {
  // Set different base URL based on the environment
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '/',
  // Alternative if you have more environments
  // baseURL: process.env.VUE_APP_API_BASE_URL
}

// Create axios instance with default params
const axiosInstance: AxiosInstance = axios.create(axiosParams)

const api = (axios: AxiosInstance): TApi => {
  // Wrapper functions around axios
  return {
    get: withAbort(<T>(url: string, config?: AxiosRequestConfig) => axios.get<T>(url, config)),
    post: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) =>
      axios.post<T>(url, body, config),
    patch: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) =>
      axios.patch<T>(url, body, config),
    delete: <T>(url: string, config?: AxiosRequestConfig) => axios.delete<T>(url, config),
  }
}

export const didAbort = (error: unknown) => axios.isCancel(error)
const getCancelSource = () => axios.CancelToken.source()

const withAbort =
  <T>(fn: TPossibleRequestMethods) =>
  async (...args: Parameters<typeof fn>): Promise<AxiosResponse<T>> => {
    const originalConfig = args[args.length - 1]
    // Main api function
    // Extract abort property from the config
    const { abort, ...config } = originalConfig as TConfig
    // Create cancel token and abort method only if abort
    // function was passed
    if (typeof abort === 'function') {
      const { cancel, token } = getCancelSource()
      config.cancelToken = token
      abort(cancel)
    }
    return new Promise<AxiosResponse<T>>(async (resolve, reject) => {
      try {
        const secondArgItem = args[1] as AxiosRequestConfig
        const hasBody =
          args.length >= 2 && typeof args[1] !== 'object' && !('headers' in secondArgItem)

        let response: AxiosResponse<T>

        if (hasBody) {
          // POST or PATCH request: [url, body, config?]
          const [url, body] = args
          response = await (fn as TPost | TPatch)(url, body, config)
        } else {
          // GET or DELETE request: [url, config?]
          const [url] = args
          response = await (fn as TGet | TDelete)(url, config)
        }

        // Resolve the Promise with the response
        resolve(response)
      } catch (error) {
        // Add "aborted" property to the error if the request was cancelled
        if (didAbort(error)) {
          error = { ...error, aborted: true }
        }
        // Reject the Promise with the error
        reject(error)
      }
    })
  }
// Initialise the api function and pass axiosInstance to it
export default api(axiosInstance)
