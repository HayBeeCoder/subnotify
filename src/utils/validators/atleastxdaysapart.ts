import { areatleastXdaysapart } from '../helpers'

// input -> startDate and endDate( each with format: "2025-03-16T00:00:00Z") 

export default function atleastxdaysapart(
  startDateValue: string,
  numberOfDays: number,
  checkingEndDateAgainstToday: boolean = false,
) {
  return {
    $validator: (endDateValue: string) => {
      return areatleastXdaysapart(startDateValue, numberOfDays, endDateValue)
    },
    $message: checkingEndDateAgainstToday
      ? `The end date must be at least ${numberOfDays} days from today.`
      : `The start and end date must be at least ${numberOfDays} apart.`,
  }
}
