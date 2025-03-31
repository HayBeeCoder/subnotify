import { ref } from 'vue'
import {  type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { apiStatus } from '../constants/apiStatus'


const {ERROR,IDLE,PENDING,SUCCESS} = apiStatus

export function useApi<T>(
  fn: (url: string, body?: unknown, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>,
  // config?: AxiosRequestConfig,
) {
  const data = ref<T | null>(null)
  const error = ref<unknown | null>(null)
  const loading = ref(false)
  const status = ref(IDLE)

  const exec = async (
    url: string,
    body: unknown = undefined,
    config: AxiosRequestConfig = {},
  ) => {
    // loading.value = true
    status.value = PENDING
    error.value = null
    try {
      const hasBody = typeof body == 'object' && typeof body != undefined
      const response = hasBody ? await fn(url, body, config) : await fn(url, config)
      data.value = response.data
      status.value = SUCCESS
    } catch (err) {
      error.value = err
      status.value = ERROR
    } finally {
      loading.value = false
      // status.value = IDLE
    }
  }

  return {
  status,
    data,
    error,
    loading,
    exec,
  }
}

// export const api = {
//   get: <T>(url: string, config?: AxiosRequestConfig) => useApi<T>(() => axiosInstance.get<T>(url, config)),
//   post: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) => useApi<T>(() => axiosInstance.post<T>(url, body, config)),
//   patch: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) => useApi<T>(() => axiosInstance.patch<T>(url, body, config)),
//   delete: <T>(url: string, config?: AxiosRequestConfig) => useApi<T>(() => axiosInstance.delete<T>(url, config)),
// }
