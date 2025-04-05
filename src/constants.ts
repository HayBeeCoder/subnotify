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

const SUBSCRIPTION_CARDS = [
  {
    provider: '',
    type: '',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: '',
    type: '',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: '',
    type: '',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: '',
    type: '',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: '',
    type: '',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'Google',
    type: 'Google TV',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'Google',
    type: 'Google TV',
    description: '',
    start_date: 1743379200,
    end_date: 1743638400,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'Apple',
    type: 'Apple TV+',
    description: '',
    start_date: 1743379200,
    end_date: 1743984000,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'Apple',
    type: 'Apple TV',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'Netflix',
    type: 'Standard',
    description: '',
    start_date: 1743379200,
    end_date: 1743638400,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'NYC',
    type: 'NCCC',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'NYC',
    type: 'NCCC',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'NYC',
    type: 'NCCC',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'NYC',
    type: 'NCCC',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'NYC',
    type: 'NCCC',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'NYC',
    type: 'NCCC',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'NYC',
    type: 'NCCC',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'NYC',
    type: 'NCCC',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'NYC',
    type: 'NCCC',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'NYC',
    type: 'NCCC',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'able',
    type: 'able',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
  {
    provider: 'Netflix',
    type: 'Netflix',
    description: '',
    start_date: 1743379200,
    end_date: 1745971200,
    user_timezone: 'Africa/Lagos',
  },
]


const PASTEL_DARK_PAIRS = [
  { pastel: '#FFE8D6', dark: '#CC9A66' }, // Peach Cream → Dark Peach
  { pastel: '#FFD6E0', dark: '#B35A72' }, // Soft Pink → Dark Rose
  { pastel: '#D6F8FF', dark: '#4D9EBE' }, // Pale Blue → Deep Teal
  { pastel: '#D6FFD6', dark: '#4A925A' }, // Mint Green → Dark Forest Green
  { pastel: '#FFF5BA', dark: '#B39B00' }, // Soft Yellow → Goldenrod
  { pastel: '#F8C8DC', dark: '#8A2A4D' }, // Blush Pink → Deep Burgundy
  { pastel: '#B5EAD7', dark: '#1B5F48' }, // Aqua Green → Dark Teal
  { pastel: '#E5D4FF', dark: '#663399' }, // Lavender Purple → Deep Purple
  { pastel: '#C1E1FF', dark: '#005A9C' }, // Baby Blue → Navy Blue
  { pastel: '#FDE2E4', dark: '#992233' }, // Light Coral → Dark Maroon
]

export {
  SUBSCRIPTION_PROVIDER,
  SUBSCRIPTION_TYPE,
  SUBSCRIPTION_DESCRIPTION,
  SUBSCRIPTION_START_DATE,
  SUBSCRIPTION_END_DATE,
  SUBSCRIPTION_USER_TIMEZONE,
  NUMBER_OF_DAYS_PER_DURATION,
  DURATION_OPTIONS,
  SUBSCRIPTION_CARDS,
  PASTEL_DARK_PAIRS
}
