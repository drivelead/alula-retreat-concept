import React from "react";
import { Locale } from "@/lib/types/i18n";
import { serverSideTranslation } from "@/lib/i18n";

type Props = { locale: Locale };

export default async function AppendixA1({ locale }: Props) {
  const { t } = await serverSideTranslation(locale, ["home"], {
    keyPrefix: "content.appendix-a1",
  });

  return (
    <section className="py-24">
      <div className="px-24 mb-24">
        <h1 className="anim text-6xl font-bold">{t("title")}</h1>
        <p className="anim opacity-60 tracking-wider uppercase font-bold">
          {t("description")}
        </p>
      </div>
      <div className="px-24">
        <ul className="list-disc ps-6 font-light space-y-2">
          {(t("items", { returnObjects: true }) as string[]).map(
            (item, idx) => (
              <li key={idx} className="anim">
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
