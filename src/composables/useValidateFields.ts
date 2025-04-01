import type { Validator } from '@/types'
import validateField from '@/utils/helpers/validateField'
import { ref, type Ref } from 'vue'

export default function useValidateFields() {
  const errors: Ref<{ [key: string | number]: string }> = ref({})
  function validateForm(
    form: { [key: string]: string | number },
    rules: { [key: string]: Array<Validator> },
  ) {
    for (const field in rules) {
      const error = validateField(form[field], rules[field])
      if (error) errors.value[field] = error
      else delete errors.value[field]
    }
  }

  return {
    validateForm,
    errors,
  }
  // const errors = validateForm(form, rules)
}
