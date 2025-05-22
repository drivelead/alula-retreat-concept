import React from "react";
import SectionWrapper from "./section-snap";
import Image from "next/image";

type Props = {};

export default function Section4({}: Props) {
  return (
    <SectionWrapper id="section-4" className="bg-amber-800 text-white relative">
      <div className="absolute top-0 h-full w-full">
        <Image
          src="/photos/neom/neom-kXbit_yx8t4-unsplash.jpg"
          width={1920}
          height={1080}
          alt="Hegra-AlUla Retreat Development"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="absolute top-0 h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-800/60 to-yellow-700/40">
        <h1 className="text-6xl font-bold">Who Are We Building This For?</h1>
        <p className="opacity-60 tracking-wider uppercase font-bold mb-12">
          Understanding our ideal traveler will guide our every decision
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li>Is this a destination for silence, or for activity?</li>
          <li>Are we targeting couples, solo travelers, or private groups?</li>
          <li>What does “luxury” mean to the kind of guest we want?</li>
          <li>Do they value privacy more than service?</li>
          <li>Do we design for digital detox, or curated convenience?</li>
        </ul>
        <p>
          Early thinking leans toward high-end cultural travelers, wellness
          seekers — those drawn to silence, heritage, and the texture of place.
        </p>
        <h2 className="text-2xl italic">
          It&apos;s about choosing the right guest, and building a place that
          speaks only to them.
        </h2>
      </div>
    </SectionWrapper>
  );
}
