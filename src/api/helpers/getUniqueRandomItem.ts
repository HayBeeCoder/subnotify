

export default function getUniqueRandomItem<T>(array: T[]) {
  // let index: number

   const index = Math.floor((Math.random()  * array.length / 2) + ( Math.random() * array.length/2))


  // const lastIndex = index;
  // return {index: array[index], lastIndex}
  return array[index]
}
