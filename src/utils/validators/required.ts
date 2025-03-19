export default function required(){
  return{
    $validator: (value: string | number) => value != "" ,
    $message: "This field is required!"
  }
}
