"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimatedSection from "./animatedSection";
import { useTranslation } from "react-i18next";
import { Trans } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger); // ✅ Only register ScrollTrigger

type Props = {};

export default function Opportunity({}: Props) {
  const sectionRef = useRef(null);

  const { t } = useTranslation("home", {
    keyPrefix: "content.opportunity",
  });

  useGSAP(
    () => {
      gsap.from(".anim", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <AnimatedSection
      id="opportunity"
      className="bg-neutral-800 text-neutral-200 relative flex flex-col"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-24">
          <h1 className="anim text-6xl font-bold text-amber-200">
            {t("title")}
          </h1>
          <p className="anim opacity-80 uppercase font-bold mb-12">
            {t("description")}
          </p>
          <ul className="list-disc list-inside space-y-4">
            {(t("items", { returnObjects: true }) as string[]).map((_, idx) => (
              <li key={idx} className="anim">
                <Trans
                  i18nKey={`content.opportunity.items.${idx}`}
                  namespace="home"
                  values={{}}
                  components={[<sup key={0} />]}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 w-full gap-8 p-8">
          <div className="col-span-2">
            <Image
              src="/photos/location/dji_fly_20250415_080054_960_1744694126900_photo_optimized.JPG"
              width={1024}
              height={768}
              className="anim w-full h-full object-cover border-10 border-white shadow-2xl rotate-1"
              alt="hegra-location-photo"
            />
          </div>
          <div>
            <Image
              src="/photos/location/IMG_2333.JPG"
              width={1024}
              height={768}
              className="anim w-full h-full object-cover border-10 border-white shadow-2xl -rotate-2"
              alt="hegra-location-photo"
            />
          </div>
          <div className="h-full">
            <Image
              src="/photos/location/IMG_2932.JPG"
              width={1024}
              height={768}
              className="anim w-full h-full object-cover border-10 border-white shadow-2xl"
              alt="hegra-location-photo"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
