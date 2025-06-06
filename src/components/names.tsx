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
    commentEn: "hegra-views.com",
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
        <div className="p-6 py-24 lg:p-24">
          <h1 className="anim text-5xl font-bold">{t("title")}</h1>
          <p className="anim opacity-80 uppercase font-bold mb-12 ">
            {t("description")}
          </p>
        </div>
        <div className="">
          {proposedNames.map((proposedName) => (
            <div
              className="anim border-emerald-500 text-center"
              key={proposedName.nameEn}>
              <div className="m-12">
                <h2 className="quiverleaf text-[3em] lg:text-[10em]/50 font-black">
                  {proposedName.nameAr}
                </h2>
                <p className="uppercase text-[2em]/10 tracking-[1.2rem] font-bold">
                  {proposedName.nameEn}
                </p>
              </div>

              <p className="text-4xl tracking-wider opacity-50 font-light">
                {proposedName.commentEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
