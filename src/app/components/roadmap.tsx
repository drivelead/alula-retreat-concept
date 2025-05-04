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
    title: "Phase 1 Construction & Launch",
    descriptionPoints: [
      "Execute entry road and arrival zone enhancement.",
      "Construct initial pool, footpaths, and 2–4 showcase units.",
      "Install lighting, irrigation, and signage.",
      "Prepare brand, website, and early content for soft launch or pre-bookings.",
      "Define post-launch measurement KPIs and guest feedback tools.",
    ],
  },
];

export const roadmapAr = [
  {
    title: "مسح الأرض",
    description:
      "إجراء مسح طبوغرافي وجغرافي لتحديد المناطق القابلة للبناء والمعالم الطبيعية وحدود الموقع.",
  },
  {
    title: "خطة العمل",
    description:
      "تحديد عدد الغرف، والمطاعم، وأنواع الضيوف المستهدفة، والإيرادات المتوقعة.",
  },
  {
    title: "النموذج المالي",
    description:
      "تقدير تكاليف البناء والتشغيل، ووضع نموذج للعوائد الزمنية والعائد على الاستثمار.",
  },
  {
    title: "المخطط العام والتصميم المفاهيمي",
    description:
      "تخطيط المباني والممرات والمسبح وتدفق تجربة الضيف، مستوحاة من الطبيعة وهوية العلامة.",
  },
  {
    title: "نموذج التشغيل",
    description:
      "تحديد هيكل التشغيل (ذاتي، شراكة، تأجير)، ووضع معايير الخدمة والعلامة التجارية.",
  },
  {
    title: "بناء المرحلة الأولى",
    description:
      "بناء المسبح والممرات والوحدات الأولى وتجهيز الهوية والمحتوى للانطلاق التجريبي.",
  },
];

export default function Roadmap() {
  const sectionRef = useRef();
  const containerRef = useRef();

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
          end: () => `+=${containerRef.current.offsetWidth}`,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-amber-800 text-white">
      <div
        ref={containerRef}
        className="flex h-full w-[400vw] items-center space-x-24 px-24">
        {roadmapEn.map((phase, index) => (
          <div
            key={index}
            className="roadmap-phase w-screen flex-shrink-0 snap-center">
            <h2 className="text-4xl font-bold text-amber-400 mb-4">
              {phase.title}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/90">
              {phase.descriptionPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
