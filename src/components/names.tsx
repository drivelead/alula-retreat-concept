import React from "react";
import AnimatedSection from "./animatedSection";
import { Locale } from "@/lib/types/i18n";
import { serverSideTranslation } from "@/lib/i18n";

type Props = { locale: Locale };

const proposedNames = [
  {
    nameAr: "الحِجر فيوز",
    nameEn: "Hegra Views",
    meaningAr: "الحِجر: المنطقة الصخرية. فيوز: الإطلالات",
    meaningEn: "The views of Al-Hijr",
    commentEn:
      "Feels contemporary, clear, and descriptive — ideal for a destination known for scenery.",
  },
];

export default async function Names({ locale }: Props) {
  const { t } = await serverSideTranslation(locale, ["home"], {
    keyPrefix: "content.proposed-names",
  });
  return (
    <AnimatedSection
      id="section-5"
      className="bg-emerald-900 text-white relative">
      <div className="w-full h-full">
        <div className="p-24">
          <h1 className="anim text-6xl font-bold">{t("title")}</h1>
          <p className="anim opacity-80 uppercase font-bold mb-12">
            {t("description")}
          </p>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-6 px-24">
          {proposedNames.map((proposedName) => (
            <div
              className="anim border-emerald-500 bg-emerald-950 border-2 rounded-xl p-6 space-y-4 text-center"
              key={proposedName.nameEn}>
              <h2 className="text-4xl font-black">{proposedName.nameAr}</h2>
              <p className="uppercase tracking-[0.2rem] font-bold">
                {proposedName.nameEn}
              </p>
              <p className="font-light text-lg/6">{proposedName.meaningAr}</p>
              <p className="quiverleaf text-lg/5">{proposedName.meaningEn}</p>
              <p className="text-xs/4 text-start opacity-50 font-light">
                {proposedName.commentEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
