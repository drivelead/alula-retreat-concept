"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

export const roadmapEn = [
  {
    title: "Land Survey",
    descriptionPoints: [
      "Commission a full geospatial and topographic survey.",
      "Identify usable land vs. protected or unbuildable zones.",
      "Mark key natural assets: rock formations, palm clusters, elevation shifts, and drainage paths.",
      "Output: site boundary map, elevation model, and zone suitability plan.",
    ],
  },
  {
    title: "Business Plan",
    descriptionPoints: [
      "Define the retreat’s accommodation mix (number of units, type: carved rooms, villas, tents, suites).",
      "Determine sizes, privacy levels, and access logic.",
      "Define scope of F&B (restaurant, café, in-room dining).",
      "Estimate average daily rate (ADR), occupancy targets, and projected annual revenue.",
      "Clarify guest archetypes and length of stay assumptions.",
    ],
  },
  {
    title: "Financial Modeling",
    descriptionPoints: [
      "Estimate capital expenditure (site works, unit construction, infrastructure).",
      "Estimate operational expenditure (staffing, maintenance, utilities, marketing).",
      "Build 3–5 year P&L projections.",
      "Run sensitivity analysis on occupancy and ADR scenarios.",
      "Determine investment needed and possible break-even timeframe.",
    ],
  },
  {
    title: "Masterplanning & Concept Design",
    descriptionPoints: [
      "Translate guest experience into site layout: arrival, movement, privacy, views, noise buffer zones.",
      "Define unit positioning, F&B locations, paths, pool, shared facilities.",
      "Confirm phasing logic — Phase 1 vs Phase 2 rollout.",
      "Align architecture with identity (materials, tones, local inspiration).",
    ],
  },
  {
    title: "Operational & Ownership Model",
    descriptionPoints: [
      "Decide structure: owner-operated, leased to brand, JV with hospitality group, or hybrid.",
      "Define required skillsets for operations team.",
      "Clarify brand and guest service standards from day one.",
      "Align the operator model with target guest expectations.",
    ],
  },
  {
    title: "Construction & Launch",
    descriptionPoints: [
      "Execute entry road and arrival zone enhancement.",
      "Construct initial pool, footpaths, and 2–4 showcase units.",
      "Install lighting, irrigation, and signage.",
      "Prepare brand, website, and early content for soft launch or pre-bookings.",
      "Define post-launch measurement KPIs and guest feedback tools.",
    ],
  },
];

export default function Roadmap() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".roadmap-phase");

      gsap.to(items, {
        xPercent: -100 * (items.length - 1),
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full overflow-hidden bg-amber-800 text-white">
      <div className="p-24">
        <h1 className="anim text-6xl font-bold">Roadmap</h1>
        <p className="anim opacity-80 uppercase font-bold mb-12">
          A few early ideas inspired by the essence of the place.
        </p>
      </div>
      <div className="relative timeline">
        {/* Connecting line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-amber-600 z-0"></div>

        <div
          ref={containerRef}
          className="relative flex items-top space-x-24 z-10 translate-x-24">
          {roadmapEn.map((phase, index) => (
            <div
              key={index}
              className="roadmap-phase w-96 pt-12 ps-6 flex-shrink-0 snap-center relative">
              {/* Number badge */}
              <div className="absolute top-0 left-0 w-12 h-12 text-3xl -translate-y-1/2 z-20 bg-amber-600 text-amber-800 flex items-center justify-center rounded-full font-medium">
                {index + 1}
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
