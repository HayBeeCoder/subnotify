

export default function getUniqueRandomItem<T>(array: T[], lastPickedIndex: number) {
  let index: number
  do {
   index = Math.floor(Math.random() * array.length)
  } while (index === lastPickedIndex);

  const lastIndex = index;
  return {index: array[index], lastIndex}
}
