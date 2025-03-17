export default function required(){
  return{
    $validator: (value: string | number) => !!value || value=== 0,
    $message: "This field is required!"
  }
}
