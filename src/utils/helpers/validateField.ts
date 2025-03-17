import type { Validator } from "@/types";


export default function validateField(value:string | number, validators: Array<Validator>) {
  for (const validator of validators) {
    if (!validator.$validator(value)) {
      return validator.$message; // Return the first error message
    }
  }
  return null; // No errors
}
