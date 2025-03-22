export const withAsync = async <T extends (...args: unknown[]) => unknown>(
  fn: T,
  ...args: Parameters<T>
) => {
  try {
    const response = await fn(...args)
    return {
      response,
      error: null,
    }
  } catch (error) {
    return {
      response: null,
      error,
    }
  }
}
