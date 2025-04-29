import React from "react";
import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

import SectionWrapper from "./section-snap";

type Props = {};

export default function Hero({}: Props) {
  // React.useEffect(() => {
  //   const section = sectionRef.current;
  //   if (!section) return;

  //   const content = section.querySelector(".animate");
  //   if (!content) return;

  //   gsap.fromTo(
  //     content,
  //     { opacity: 0, y: 50 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "top center",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );
  // }, []);

  return (
    <SectionWrapper id="hero" className="bg-amber-500 text-white relative">
      <div className="absolute top-0 h-full w-full">
        <Image
          src="/photos/neom/neom--RlktmDy3Ec-unsplash.jpg"
          width={1920}
          height={1080}
          alt="Hegra-AlUla Retreat Development"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="absolute top-0 h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">Hegra-AlUla Retreat Development</h1>
        <p className="opacity-60 tracking-wider uppercase font-bold">
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
    </SectionWrapper>
  );
}
