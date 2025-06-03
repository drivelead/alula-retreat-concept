"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import AnimatedSection from "./animatedSection";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t } = useTranslation("home", {
    keyPrefix: "content.section-1",
  });
  const bgRef = useRef(null);

  useGSAP(() => {
    gsap.to(bgRef.current, {
      y: "-20%", // Scroll slower than content
      ease: "none",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        end: "center top",
        scrub: true,
      },
    });
  }, []);

  return (
    <AnimatedSection id="hero" className="text-white relative">
      <div className="absolute top-0 h-full w-full overflow-hidden">
        <Image
          ref={bgRef}
          src="/photos/gallery/IMG_2932.jpg"
          width={1920}
          height={1080}
          alt="Hegra-AlUla Retreat Development"
          className="scale-140 object-cover h-full w-full will-change-transform"
        />
      </div>
      <div className="absolute top-0 h-full w-full bg-radial bg-radial-[at_0%_0%] from-yellow-300 via-yellow-400 to-amber-600 opacity-20" />
      <div className="absolute top-0 h-full w-full flex flex-col items-center justify-center bg-gradient-to-t from-amber-950 via-amber-800/10 via-20%">
        <h1 className="anim text-6xl font-bold mb-4">{t("title")}</h1>
        <p className="anim text-4xl tracking-wider rtl:tracking-normal uppercase font-text">
          {t("description")}
        </p>
      </div>
    </AnimatedSection>
  );
}
