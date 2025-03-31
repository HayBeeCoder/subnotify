// INPUT -> "vintage"
// OUTPUT -> "Vintage"

export default function upperFirst(text: string){
  return text[0].toUpperCase() + text.slice(1)

}
