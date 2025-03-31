import { ref } from 'vue'
import {  type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { apiStatus } from '../constants/apiStatus'
import useAuthUser from '@/composables/useAuthUser'


const {ERROR,IDLE,PENDING,SUCCESS} = apiStatus

export function useApi<T>(
  fn: (url: string, body?: unknown, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>,
  // config?: AxiosRequestConfig,
) {
  const {getToken} = useAuthUser()
  const data = ref<T | null>(null)
  const error = ref<unknown | null>(null)
  const loading = ref(false)
  const status = ref(IDLE)

  const exec = async (
    url: string,
    body: unknown = undefined

) => {
    // loading.value = true
    status.value = PENDING
    error.value = null
    try {
      // const hasBody = typeof body == 'object' && typeof body != undefined
      // const response = hasBody ? await fn(url, body, ) : await fn(url, config)
      const response = await fn(url,body ,   {headers: {
        Authorization: `Bearer ${await getToken()}`
}})
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


