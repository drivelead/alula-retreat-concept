import React from "react";
import SectionWrapper from "./section-snap";

type Props = {};

export default function Opportunity({}: Props) {
  return (
    <SectionWrapper
      id="opportunity"
      className="bg-amber-100 relative flex flex-col"
    >
      <div className="p-24">
        <div>
          <h1 className="text-6xl font-bold text-amber-950">The Opportunity</h1>
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
    </SectionWrapper>
  );
}
