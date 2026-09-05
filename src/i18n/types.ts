/** The two languages the site is published in. Spanish is the default. */
export type Locale = 'es' | 'en';

export const LOCALES: Locale[] = ['es', 'en'];
export const DEFAULT_LOCALE: Locale = 'es';

/** A string that exists in both languages. */
export type Translated = Record<Locale, string>;

/** Dietary/preparation badges. Keys are translated in `src/i18n/ui.ts`. */
export type TagKey =
  | 'vegetarian'
  | 'vegan'
  | 'glutenFree'
  | 'raw'
  | 'spicy'
  | 'signature';

export type DayKey =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

/** Day keys in display order, Monday first. */
export const DAY_ORDER: DayKey[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

/** schema.org expects English day names regardless of the page language. */
export const SCHEMA_DAY: Record<DayKey, string> = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
};

/** Maps `Date.getDay()` (0 = Sunday) onto our day keys. */
export const DAY_BY_INDEX: DayKey[] = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

/** Root-relative path for a locale, e.g. "/" for Spanish, "/en/" for English. */
export function localeHome(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
}
