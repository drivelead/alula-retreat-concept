import React from "react";
import Image from "next/image";
import SectionWrapper from "./section-snap";

type Props = {};

export default function Opportunity({}: Props) {
  return (
    <SectionWrapper
      id="opportunity"
      className="bg-amber-100 relative flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-24">
          <h1 className="text-6xl font-bold text-amber-950">The Opportunity</h1>
          <p className="opacity-80 uppercase font-bold mb-12">
            A Rare Canvas at the Heart of Hegra, near AlUla
          </p>
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
        <div className="grid grid-cols-2 w-full gap-8 p-8">
          <div className="col-span-2">
            <Image
              src="/photos/location/dji_fly_20250415_080054_960_1744694126900_photo_optimized.JPG"
              width={1024}
              height={768}
              className="w-full h-full object-cover border-20 border-white shadow-2xl rotate-1"
            />
          </div>
          <div>
            <Image
              src="/photos/location/IMG_2333.JPG"
              width={1024}
              height={768}
              className="w-full h-full object-cover border-20 border-white shadow-2xl -rotate-2"
            />
          </div>
          <div className="bg-amber-500 h-full">
            <Image
              src="/photos/location/IMG_2932.JPG"
              width={1024}
              height={768}
              className="w-full h-full object-cover border-20 border-white shadow-2xl"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
