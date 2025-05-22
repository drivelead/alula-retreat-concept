"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimatedSection from "./animatedSection";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

export default function Hero({}: Props) {
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
          src="/photos/neom/neom--RlktmDy3Ec-unsplash.jpg"
          width={1920}
          height={1080}
          alt="Hegra-AlUla Retreat Development"
          className="scale-150 object-cover h-full w-full will-change-transform"
        />
      </div>
      <div className="absolute top-0 h-full w-full flex flex-col items-center justify-center bg-gradient-to-t from-neutral-800 via-neutral-800/10 via-20%">
        <h1 className="anim text-6xl font-bold">
          Hegra-AlUla Retreat Development
        </h1>
        <p className="anim opacity-60 tracking-wider uppercase font-bold">
          Development Vision, Benchmark Inspiration, and Naming
        </p>
      </div>
    </AnimatedSection>
  );
}
