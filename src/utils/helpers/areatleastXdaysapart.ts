// input -> startDate and endDate( each with format: "2025-03-16" and then a value x(days apart)
// output -> boolean

export default function areatleastXdaysapart(startDate: string, x: number, endDate: string | number) {
  const date1 = new Date(startDate).getTime()
  const date2 = new Date(endDate).getTime()

  const diffInMs = date2 - date1
  if (diffInMs <= 0) return false
  // Convert milliseconds to days
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24)

  return diffInDays >= x ? true : false
}
