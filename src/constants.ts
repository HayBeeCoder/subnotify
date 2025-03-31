const SUBSCRIPTION_PROVIDER="provider"
const SUBSCRIPTION_TYPE = "type"
const SUBSCRIPTION_DESCRIPTION = "description"
const SUBSCRIPTION_START_DATE = "start_date"
const SUBSCRIPTION_END_DATE = "end_date"
const SUBSCRIPTION_USER_TIMEZONE = "user_timezone"


const NUMBER_OF_DAYS_PER_DURATION = {
  days: 1,
  weeks: 7,
  months: 30,
  year: 365
}
const DURATION_OPTIONS = [
  { label: 'Days', value: "days" },
  { label: 'Weeks', value: 'weeks' },
  { label: 'Months', value: 'months' },
]
export {
  SUBSCRIPTION_PROVIDER,
  SUBSCRIPTION_TYPE,
  SUBSCRIPTION_DESCRIPTION,
  SUBSCRIPTION_START_DATE,
  SUBSCRIPTION_END_DATE,
  SUBSCRIPTION_USER_TIMEZONE,
  NUMBER_OF_DAYS_PER_DURATION,
  DURATION_OPTIONS
}
