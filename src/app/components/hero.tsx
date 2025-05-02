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
        end: "bottom top",
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
      <div className="absolute top-0 h-full w-full flex flex-col items-center justify-center">
        <h1 className="anim text-6xl font-bold">
          Hegra-AlUla Retreat Development
        </h1>
        <p className="anim opacity-60 tracking-wider uppercase font-bold">
          Development Vision, Benchmark Inspiration, and Naming
        </p>
      </div>
      <div className="absolute bottom-0 w-full flex">
        <div className="bg-amber-500/20 border-2 border-amber-400 text-amber-400 p-6 mx-auto rounded-full aspect-square flex items-center justify-center mb-4 text-center text-sm/4">
          SCROLL
          <br />
          DOWN
        </div>
      </div>
    </AnimatedSection>
  );
}
