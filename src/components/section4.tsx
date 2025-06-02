import React from "react";
import SectionWrapper from "./section-snap";
import Image from "next/image";
import { Locale } from "@/lib/types/i18n";
import { serverSideTranslation } from "@/lib/i18n";

type Props = { locale: Locale };

export default async function Section4({ locale }: Props) {
  const { t } = await serverSideTranslation(locale, ["home"], {
    keyPrefix: "content.section-4",
  });

  return (
    <SectionWrapper id="section-4" className="bg-amber-800 text-white relative">
      <div className="absolute top-0 h-full w-full">
        <Image
          src="/photos/neom/neom-kXbit_yx8t4-unsplash.jpg"
          width={1920}
          height={1080}
          alt="Hegra-AlUla Retreat Development"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="absolute top-0 h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-800/60 to-yellow-700/40">
        <h1 className="text-6xl font-bold">{t("title")}</h1>
        <p className="opacity-60 tracking-wider uppercase font-bold mb-12">
          {t("description")}
        </p>
        <ul className="list-disc list-inside space-y-4">
          {(t("items", { returnObjects: true }) as string[]).map(
            (item, idx) => (
              <li key={idx} className="anim">
                {item}
              </li>
            )
          )}
        </ul>
        <p>{t("text")}</p>
        <h2 className="text-2xl italic">{t("text2")}</h2>
      </div>
    </SectionWrapper>
  );
}
