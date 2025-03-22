import type { AxiosRequestConfig, AxiosResponse, Canceler } from "axios"

export type TConfig = (AxiosRequestConfig & {
  initialData: unknown,
  responseAdapter?: <T>(response: unknown) => T
  abort?: (cancel: Canceler) => void
})

export type TGet = <T>(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
export type TPost =  <T>(url: string, body: unknown, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
export type TPatch = <T>(url: string, body: unknown, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
export type TDelete = <T>(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
export type TPossibleRequestMethods = TGet | TPost | TPatch | TDelete
export type TParametersforRequestMethods = Parameters<TGet | TPost | TPatch | TDelete>

export interface TApi {
  get: <T>(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
  post: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
  patch: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
  delete: <T>(url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>
}

