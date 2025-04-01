import type { CardType } from "./components/DashboardCards/type";
import { NUMBER_OF_DAYS_PER_DURATION } from "./constants"

export type Validator = {
  $validator: (value: string | number) => boolean,
  $message: string
}

type SubscriptionsResponse = {
  provider: string;
  type: string;
  description: string;
  start_date: number;
  end_date: number;
  user_timezone: string;
};

export type CreateSubscriptionResponse = {
  message: string;
  subscription_id: number;
  data: SubscriptionsResponse;
};

export type GetSubscriptionsResponse = {data: CardType[]}

export type TNUMBER_OF_DAYS_PER_DURATION = keyof typeof NUMBER_OF_DAYS_PER_DURATION
