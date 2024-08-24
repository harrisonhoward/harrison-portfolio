import dayjs, { type Dayjs } from "dayjs";

/**
 * Converts provided dates into year and if possible month.\
 * For instance, 10/2022 - 08/2024 -> 1 year 10 months
 */
export function toRelativeTime(start: Dayjs, end: Dayjs = dayjs()): string {
    // Offset by one month since dayjs doesn't count the starting month
    let offsetStart = start.clone().subtract(1, "month");

    const years = end.diff(offsetStart, "year");
    offsetStart = offsetStart.add(years, "year");
    const months = end.diff(offsetStart, "month");

    let output = "";

    if (years > 0) {
        output += `${years} yr${years > 1 ? "s" : ""} `;
    }

    if (months > 0) {
        output += `${months} mo${months > 1 ? "s" : ""} `;
    }

    return output;
}
