import { ref, computed, type ComputedRef, type Ref } from 'vue'
import upperFirst from '../helpers/upperFirst'
import { apiStatus } from '../constants/apiStatus'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { TConfig, TDelete, TGet, TPatch, TPossibleRequestMethods, TPost } from '../types'

const { IDLE, SUCCESS, PENDING, ERROR } = apiStatus

type TNormalizedApiStatuses<T extends string> = {
  [K in T]: ComputedRef<boolean>;
};

const createNormalisedApiStatuses = <T extends Record<string, symbol>>(
  status: Ref<symbol>,
  apiName: string
  // apiStatus: T
): TNormalizedApiStatuses<`${string}Status${Capitalize<keyof T & string>}`> => {
  const normalisedApiStatuses = {} as TNormalizedApiStatuses<
    `${string}Status${Capitalize<keyof T & string>}`
  >;

  for (const [statusKey, statusValue] of Object.entries(apiStatus)) {
    let propertyName = '';

    // Create a property name for each computed status
    if (apiName) {
      propertyName = `${apiName}Status${upperFirst(statusKey.toLowerCase())}`;
    } else {
      propertyName = `status${statusKey.toLowerCase()}`;
    }

    // Create a computed that returns true/false based on the currently selected status
    normalisedApiStatuses[propertyName as keyof typeof normalisedApiStatuses] = computed(
      () => statusValue === status.value
    );
  }

  return normalisedApiStatuses;
};
/**
 * @param {string} apiName
 * @param {function} fn
 * @param {object} config
 */
export const useApi = <T>(apiName: string, fn: TPossibleRequestMethods, config?: TConfig) => {
  const { initialData, responseAdapter } = config as TConfig
  // Reactive values to store data and API status
  const data = ref(initialData as T)
  const status = ref(IDLE)
  const error: Ref<null | unknown> = ref(null)
  /**
   * Initialise the api request
   */
  const exec = async (...args: Parameters<typeof fn>) => {
    try {
      // Clear current error value
      error.value = null
      // API request starts
      status.value = PENDING
      // const response = await fn<T>(...args)
      let response: AxiosResponse<T, unknown> | undefined
      const secondargItem = args[1] as AxiosRequestConfig
      const hasBody =
        args.length >= 2 && typeof args[1] !== 'object' && !('headers' in secondargItem)

      if (hasBody) {
        // POST or PATCH request: [url, body, config?]
        const [url, body, config] = args
        response = await (fn as TPost | TPatch)(url, body, config)
      } else {
        // GET or DELETE request: [url, config?]
        const [url, config] = args
        response = await (fn as TGet | TDelete)(url, config as AxiosRequestConfig)
      }
      // Before assigning the response, check if a responseAdapter
      // was passed, if yes, then use it
      data.value = typeof responseAdapter === 'function' ? responseAdapter<T>(response) : response
      // Done!
      status.value = SUCCESS
    } catch (err: unknown) {
      // Oops, there was an error
      error.value = err
      status.value = ERROR
    }
  }

  const normalized = createNormalisedApiStatuses(status, apiName)
  return {
    data,
    status,
    error,
    exec,
    ...normalized,
  }
}
