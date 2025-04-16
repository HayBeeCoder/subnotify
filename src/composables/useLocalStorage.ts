export default function useLocalStorage(folder: string, subfolder: string) {
  const storeLocation = `${folder}_${subfolder}`
  const read = () => {
    const retrieved = window.localStorage.getItem(storeLocation)
    if (retrieved == null) {
        return null
    }else{
        return JSON.parse(retrieved)
    }
}
  const write = (itemToSave: string) => {
    window.localStorage.setItem(storeLocation, JSON.stringify(itemToSave))
  }

  return {
    read,
    write,
  }
}