import  getEndDate  from './getEndDate'

export default function calculateEndDateFromDuration(startDate: string, number_of_days: number) {
  return getEndDate(startDate, number_of_days)
}
