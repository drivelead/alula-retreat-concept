import React from "react";
import SectionWrapper from "./section-snap";
import ImagesMarquee from "./images-marquee";

type Props = {};

export default function Section3({}: Props) {
  return (
    <SectionWrapper
      id="features"
      className="bg-gradient-to-tl from-lime-900 to-lime-950 text-white relative flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">
        Natural Drama. Foundational Potential.
      </h1>
      <p className="opacity-80 uppercase font-bold mb-12">
        A rich mix of terrain, views, and greenery — ready for transformation.
      </p>

      <div className="w-full">
        <ImagesMarquee
          images={[
            {
              src: "/photos/location/dji_fly_20250415_075850_952_1744694357791_photo_optimized.JPG",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/location/dji_fly_20250416_072442_975_1744778362829_photo_optimized.JPG",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/location/dji_fly_20250416_072616_985_1744778346408_photo_optimized.JPG",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/location/IMG_2333.JPG",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/location/IMG_2349.JPG",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/location/IMG_2381.JPG",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/location/IMG_2932.JPG",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/location/IMG_2939.JPG",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/location/IMG_2955.JPG",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/location/IMG_3020.JPG",
              alt: "Hegra-AlUla Retreat Development",
            },
          ]}
        />
      </div>
    </SectionWrapper>
  );
}
