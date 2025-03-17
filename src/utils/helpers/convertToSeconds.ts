export default function convertToSeconds(isoDate: string) {
  const dateInMs = new Date(isoDate).getTime()

  // Convert milliseconds to seconds
  return Math.floor(dateInMs / 1000)
}
