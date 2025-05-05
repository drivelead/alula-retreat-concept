import React from "react";
import SectionWrapper from "./section-snap";
import AnimatedSection from "./animatedSection";

type Props = {};

const proposedNames = [
  {
    nameAr: "نُزل الحِجر",
    nameEn: "Nuzl AlHijr",
    meaningAr: "نُزل: مكان الإقامة المؤقت. الحِجر: المنطقة الصخرية",
    meaningEn: "A place of temporary lodging in Al-Hijr",
    commentEn:
      "A grounded and poetic name that evokes timeless hospitality, carved into nature.",
  },
  {
    nameAr: "الحِجر فيوز",
    nameEn: "AlHijr Views",
    meaningAr: "الحِجر: المنطقة الصخرية. فيوز: الإطلالات",
    meaningEn: "The views of Al-Hijr",
    commentEn:
      "Feels contemporary, clear, and descriptive — ideal for a destination known for scenery.",
  },
  {
    nameAr: "مَهوى",
    nameEn: "Mahwa",
    meaningAr: "مكان تهوي إليه النفس أو القلب",
    meaningEn: "The place where the heart longs to land.",
    commentEn:
      "A poetic, emotional name that speaks of longing, return, and spiritual arrival.",
  },
  {
    nameAr: "سرايا الحِجر",
    nameEn: "SarayAlHijr",
    meaningAr: "جمع سُرية، أو مبنى فخم للضيافة والإقامة",
    meaningEn: "The noble guest houses or chambers of Al-Hijr.",
    commentEn:
      "Elegant, timeless, premium, historic, and dignified — a name with hospitality heritage.",
  },
  {
    nameAr: "مَكمن",
    nameEn: "Makman",
    meaningAr: "المكان الخفي أو المستتر أو الكامن",
    meaningEn: "The concealed location",
    commentEn:
      "A mysterious, powerful name perfect for a retreat built into stone: privacy, silence & depth.",
  },
];

export default function Names({}: Props) {
  return (
    <AnimatedSection
      id="section-5"
      className="bg-emerald-900 text-white relative">
      <div className="w-full h-full">
        <div className="p-24">
          <h1 className="anim text-6xl font-bold">Proposed Names</h1>
          <p className="anim opacity-80 uppercase font-bold mb-12">
            A few early ideas inspired by the essence of the place.
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
