"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { Locale } from "@/lib/types/i18n";
import { getDirection } from "@/lib/utils";
import { localesEqv } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  locale: Locale;
};

type RoadmapItem = {
  title: string;
  descriptionPoints: string[];
};

export default function Roadmap({ locale }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation("home", {
    keyPrefix: "content.roadmap",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".roadmap-phase");
      const direction = getDirection(locale) === "rtl" ? 1 : -1;

      gsap.to(items, {
        xPercent: direction * 100 * (items.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (items.length - 1),
          end: () =>
            `+=${containerRef.current ? containerRef.current.offsetWidth : 0}`,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [locale]);

  const roadmap = t("map", {
    returnObjects: true,
  }) as RoadmapItem[];

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full overflow-hidden bg-amber-800 text-white"
    >
      <div className="p-24">
        <h1 className="anim text-6xl font-bold">{t("title")}</h1>
        <p className="anim opacity-80 uppercase font-bold mb-12">
          {t("description")}
        </p>
      </div>
      <div className="relative timeline">
        <div className="absolute top-0 start-0 w-full h-1 bg-amber-600 z-0"></div>

        <div
          ref={containerRef}
          className="relative flex items-top space-x-24 rtl:space-x-reverse z-10 translate-x-24 rtl:-translate-x-24"
        >
          {roadmap.map((phase, index) => (
            <div
              key={index}
              className="roadmap-phase w-96 pt-12 ps-6 flex-shrink-0 snap-center relative"
            >
              {/* Number badge */}
              <div className="absolute top-0 start-0 w-12 h-12 text-3xl -translate-y-1/2 z-20 bg-amber-600 text-white flex items-center justify-center rounded-full font-medium">
                {(index + 1).toLocaleString(localesEqv[locale])}
              </div>

              <h2 className="text-4xl font-bold text-amber-400 mb-4">
                {phase.title}
              </h2>
              <ul className="list-disc ps-6 font-light space-y-2 text-white/90">
                {phase.descriptionPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
