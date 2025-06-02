import React from "react";
import { Locale } from "@/lib/types/i18n";
import { serverSideTranslation } from "@/lib/i18n";
import Image from "next/image";

type Props = { locale: Locale };

export default async function AppendixA2({ locale }: Props) {
  const { t } = await serverSideTranslation(locale, ["home"], {
    keyPrefix: "content.appendix-a2",
  });

  return (
    <section className="relative bg-amber-500 text-white">
      <div className="relative py-24 z-10 bg-amber-800/40">
        <div className="px-24 mb-24">
          <h1 className="anim text-6xl font-bold">{t("title")}</h1>
          <p className="anim opacity-60 tracking-wider uppercase font-bold">
            {t("description")}
          </p>
        </div>
        <div className="space-y-4 px-24">
          <p>{t("text")}</p>
          <p>
            <strong>{t("important-context.label")}</strong>
          </p>
          <p>{t("important-context.text")}</p>
          <p>
            <strong>{t("next-steps.label")}</strong>
          </p>
          <p>{t("next-steps.text")}</p>
          <ul className="list-disc ps-6 font-light space-y-2">
            {(t("next-steps.items", { returnObjects: true }) as string[]).map(
              (item, idx) => (
                <li key={idx}>{item}</li>
              )
            )}
          </ul>
          <p>{t("next-steps.text2")}</p>
        </div>
      </div>
      <div className="absolute top-0 w-full h-full">
        <Image
          src={"/photos/gallery/IMG_3020.JPG"}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
