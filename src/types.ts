import { NUMBER_OF_DAYS_PER_DURATION } from "./constants"

export type Validator = {
  $validator: (value: string | number) => boolean,
  $message: string
}

export type TNUMBER_OF_DAYS_PER_DURATION = keyof typeof NUMBER_OF_DAYS_PER_DURATION
