"use client";

import React, { useRef } from "react";
import Image from "next/image";
import SectionWrapper from "./section-snap";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimatedSection from "./animatedSection";

gsap.registerPlugin(ScrollTrigger); // ✅ Only register ScrollTrigger

type Props = {};

export default function Opportunity({}: Props) {
  const sectionRef = useRef(null);

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
      className="bg-neutral-800 text-neutral-200 relative flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-24">
          <h1 className="anim text-6xl font-bold text-amber-200">
            The Opportunity
          </h1>
          <p className="anim opacity-80 uppercase font-bold mb-12">
            A Rare Canvas at the Heart of Hegra, near AlUla
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li className="anim">
              A distinctive plot with natural beauty, strategic location and
              untapped potential
            </li>
            <li className="anim">
              Approximately 1 km<sup>2</sup> of privately owned land
            </li>
            <li className="anim">
              Located minutes from Hegra and AlUla&apos;s core tourism zone
            </li>
            <li className="anim">
              Features three striking sandstone formations, lush palm groves,
              and open desert views
            </li>
            <li className="anim">
              Currently underutilized, but with the foundations for a
              transformational high-end retreat
            </li>
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
