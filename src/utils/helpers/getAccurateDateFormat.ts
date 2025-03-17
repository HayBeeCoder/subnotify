export default function getAccurateDateFormat(date: Date) {
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0')

  const isoLikeDate = `${yyyy}-${mm}-${dd}`
  // console.log(isoLikeDate); // "2025-03-16"

  return isoLikeDate
}
