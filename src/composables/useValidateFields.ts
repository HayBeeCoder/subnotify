import type { Validator } from '@/types'
import validateField from '@/utils/helpers/validateField'

export default function useValidateFields() {
  const errors: { [key: string | number]: string } = {}
  function validateForm(
    form: { [key: string]: string | number },
    rules: { [key: string]: Array<Validator> },
  ) {
    for (const field in rules) {
      const error = validateField(form[field], rules[field])
      if (error) errors[field] = error
      else delete errors[field]
    }
  }

  return {
    validateForm,
    errors,
  }
  // const errors = validateForm(form, rules)
}
