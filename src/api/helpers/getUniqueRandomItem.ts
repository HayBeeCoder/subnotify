

export default function getUniqueRandomItem<T>(array: T[], lastPickedIndex: number) {
  // let index: number

   const index = Math.floor(Math.random() * Math.random() * array.length)


  // const lastIndex = index;
  // return {index: array[index], lastIndex}
  return array[index]
}
