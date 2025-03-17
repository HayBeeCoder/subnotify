// input -----> a particular start  date (e.g 2025 - 03 - 04 ) and number of days to add that date

// output ---> date (in the form '2025-03-16T17:20:21.400Z' ) after particular number of days added to the start date

export default function getEndDate(startDate: string, daysToAdd: number) {

  const start = new Date(startDate);
  start.setDate(start.getDate() + daysToAdd);

  return start.toLocaleDateString('sv-SE')
}
