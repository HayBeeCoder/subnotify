import type { CardType } from "@/components/DashboardCards/type";

export default function areFormsDetailsEqual(formA: CardType, formB: Omit<CardType, "duration"> ): boolean {
  return (
    formA.provider === formB.provider &&
    formA.type === formB.type &&
    formA.start_date === formB.start_date &&
    formA.end_date === formB.end_date &&
    formA.description === formB.description &&
    formA.user_timezone === formB.user_timezone
  );
}
