import { convertToSeconds, getAccurateDateFormat } from "@/utils/helpers"

export default function getPercentageOfSubscriptionDuration(start_date: number, end_date: number){
  const today = convertToSeconds(getAccurateDateFormat(new Date()))

  
  const num = today - start_date
  const den = end_date - start_date
  const fraction = num /den

  return fraction
}