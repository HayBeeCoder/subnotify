export type Validator = {
  $validator: (value: string | number) => boolean,
  $message: string
}
