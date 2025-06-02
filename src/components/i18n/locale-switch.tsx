"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { i18nConfig } from "@/lib/i18n/index";

export default function LocaleSwitch() {
  const { i18n } = useTranslation();
  const activeLocale = i18n.language;

  const router = useRouter();
  const currentPathname = usePathname();

  const onLocaleChange = () => {
    const newLocale = activeLocale === "en" ? "ar" : "en";

    // Set a cookie for next-i18n-router to read the new locale
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // Compute new path with updated locale
    if (
      activeLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${activeLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  return (
    <div className="widget locale-switch-widget">
      <button
        className="w-auto cursor-pointer bg-transparent"
        onClick={onLocaleChange}>
        <span className="rtl:text-xs rtl:tracking-wide rtl:uppercase px-4">
          {activeLocale === "en" ? "عربي" : "English"}
        </span>
      </button>
    </div>
  );
}
