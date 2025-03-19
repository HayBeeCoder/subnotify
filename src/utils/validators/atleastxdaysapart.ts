import { areatleastXdaysapart } from '../helpers'

// input -> startDate and endDate( each with format: "2025-03-16T00:00:00Z")

export default function atleastxdaysapart(
  startDateValue: string,
  numberOfDays: number,
  checkingEndDateAgainstToday: boolean = false,
) {
  return {
    // value here is expected to be in seconds so we multiply by 1000, to convert to ms before passing to the areatleastXdaysapart helper function
    $validator: (value: string | number) => {
      return areatleastXdaysapart(startDateValue, numberOfDays, (value as number) * 1000 )
    },
    $message: checkingEndDateAgainstToday
      ? `The end date must be at least ${numberOfDays} days from today.`
      : `The start and end date must be at least ${numberOfDays} apart.`,
  }
}
