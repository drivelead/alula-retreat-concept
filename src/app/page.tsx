"use client";

import Image from "next/image";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // when 20% of section is visible
            end: "bottom 20%", // when it's leaving
            toggleActions: "play reverse play reverse", // onEnter, onLeave, onEnterBack, onLeaveBack
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <main>
      <section
        ref={sectionRef}
        className="relative bg-amber-800 text-white h-dvh">
        <div className="absolute top-0 h-full w-full">
          <Image
            src="/photos/neom/neom--RlktmDy3Ec-unsplash.jpg"
            width={1920}
            height={1080}
            alt="Hegra-AlUla Retreat Development"
            className="object-cover h-full w-full"
          />
        </div>
        <div
          ref={contentRef}
          className="absolute top-0 h-full w-full flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold">
            Hegra-AlUla Retreat Development
          </h1>
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
      </section>
      <section
        ref={sectionRef}
        className="bg-amber-100 p-24 h-dvh h-dvh flex flex-col text-amber-900">
        <div ref={contentRef}>
          <div>
            <h1 className="text-6xl font-bold text-amber-950">
              The Opportunity
            </h1>
            <p className="opacity-80 uppercase font-bold mb-12">
              A Rare Canvas at the Heart of Hegra, near AlUla
            </p>
          </div>
          <div>
            <ul className="list-disc list-inside space-y-4">
              <li>
                A distinctive plot with natural beauty, strategic location and
                untapped potential
              </li>
              <li>
                Approximately 1 km<sup>2</sup> of privately owned land
              </li>
              <li>
                Located minutes from Hegra and AlUla&apos;s core tourism zone
              </li>
              <li>
                Features three striking sandstone formations, lush palm groves,
                and open desert views
              </li>
              <li>
                Currently underutilized, but with the foundations for a
                transformational high-end retreat
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        ref={sectionRef}
        className="bg-lime-950 h-dvh h-dvh flex flex-col items-center justify-center">
        <div ref={contentRef}>
          <h1 className="text-6xl font-bold">
            Natural Drama. Foundational Potential.
          </h1>
          <p className="opacity-80 uppercase font-bold mb-12">
            A rich mix of terrain, views, and greenery — ready for
            transformation.
          </p>
        </div>
      </section>
      <section
        ref={sectionRef}
        className="relative bg-amber-800 text-white h-dvh">
        <div className="absolute top-0 h-full w-full">
          <Image
            src="/photos/neom/neom-kXbit_yx8t4-unsplash.jpg"
            width={1920}
            height={1080}
            alt="Hegra-AlUla Retreat Development"
            className="object-cover h-full w-full"
          />
        </div>
        <div
          ref={contentRef}
          className="absolute top-0 h-full w-full flex flex-col items-center justify-center bg-gradient-to-b from-amber-800/40 to-">
          <h1 className="text-6xl font-bold">Who Are We Building This For?</h1>
          <p className="opacity-60 tracking-wider uppercase font-bold mb-12">
            Understanding our ideal traveler will guide our every decision
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>Is this a destination for silence, or for activity?</li>
            <li>
              Are we targeting couples, solo travelers, or private groups?
            </li>
            <li>What does “luxury” mean to the kind of guest we want?</li>
            <li>Do they value privacy more than service?</li>
            <li>Do we design for digital detox, or curated convenience?</li>
          </ul>
          <p>
            Early thinking leans toward high-end cultural travelers, wellness
            seekers — those drawn to silence, heritage, and the texture of
            place.
          </p>
          <h2 className="text-2xl italic">
            It&apos;s about choosing the right guest, and building a place that
            speaks only to them.
          </h2>
        </div>
        <div className="absolute bottom-0 w-full flex">
          <div className="bg-amber-500/20 border-2 border-amber-400 text-amber-400 p-6 mx-auto rounded-full aspect-square flex items-center justify-center mb-4 text-center text-sm/4">
            SCROLL
            <br />
            DOWN
          </div>
        </div>
      </section>
    </main>
  );
}
