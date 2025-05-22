import { AllowedLocales, EqvLocale, Locale, I18NConfig } from "../types/i18n";

export const defaultLocale = "en";

export const allowedLocales: AllowedLocales = [defaultLocale, "ar"];

export const localesEqv: Record<Locale, EqvLocale> = {
  en: "en-GB",
  ar: "ar-SA",
};

const i18nConfig: I18NConfig = {
  locales: allowedLocales,
  defaultLocale,
  prefixDefault: false,
};

export { i18nConfig };