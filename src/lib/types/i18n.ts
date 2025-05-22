// lib/types/i18n.ts
export type Locale = "en" | "ar";

export type EqvLocale = "en-GB" | "ar-SA";

export type AllowedLocales = Locale[];

export type I18NConfig = {
  locales: string[];
  defaultLocale: string;
  prefixDefault: boolean;
};