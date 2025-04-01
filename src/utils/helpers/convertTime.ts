import { DateTime } from "luxon";

export default function convertTimezone(timestamp: number, fromTimeZone: string, toTimeZone: string =   Intl.DateTimeFormat().resolvedOptions().timeZone) {
    return DateTime.fromSeconds(timestamp, { zone: fromTimeZone })
        .setZone(toTimeZone).toFormat("d MMM, yyyy");
}
