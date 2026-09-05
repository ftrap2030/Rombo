import type { Locale } from './types';
import { ui, dayNames, tagNames } from './ui';

export * from './types';
export { ui, dayNames, tagNames };

/**
 * Format a 24-hour "HH:MM" string for display.
 *
 * Puerto Rico uses 12-hour time in both languages, so the shape is the same
 * either way — only the separator differs slightly in Spanish convention.
 */
export function formatTime(time: string): string {
  const [hourPart, minutePart] = time.split(':');
  const hour = Number(hourPart);
  const suffix = hour >= 12 ? 'pm' : 'am';
  // 0 and 12 both display as 12 (midnight / noon).
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  return `${displayHour}:${minutePart} ${suffix}`;
}

/** Convenience accessor so components can write `t(lang).navMenu`. */
export function t(locale: Locale) {
  return ui[locale];
}
