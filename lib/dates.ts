type MonthStyle = 'long' | 'short';

interface FormatOptions {
  month?: MonthStyle;
  includeDay?: boolean;
}

const LONG_MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const SHORT_MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

/**
 * Format a date in the European day–month–year order (e.g. "4 August 2023").
 *
 * Month names come from fixed arrays rather than `toLocaleDateString` so the
 * output is fully deterministic: the build-time Node runtime ships English-only
 * ICU (and abbreviates September as "Sept"), while browsers use full ICU ("Sep")
 * — relying on the locale would cause an SSR/client hydration mismatch. All
 * parts are read in UTC to match the stored ISO timestamps.
 */
export function formatEuropeanDate(
  dateString: string,
  { month = 'long', includeDay = true }: FormatOptions = {}
): string {
  const date = new Date(dateString);
  const monthName = (month === 'short' ? SHORT_MONTHS : LONG_MONTHS)[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  if (!includeDay) return `${monthName} ${year}`;
  return `${date.getUTCDate()} ${monthName} ${year}`;
}
