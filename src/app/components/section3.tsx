import React from "react";
import SectionWrapper from "./section-snap";
import ImagesMarquee from "./images-marquee";

type Props = {};

export default function Section3({}: Props) {
  return (
    <SectionWrapper
      id="features"
      className="bg-lime-950 text-white relative flex flex-col items-center justify-center"
    >
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
              src: "/photos/neom/neom-kXbit_yx8t4-unsplash.jpg",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/neom/neom--RlktmDy3Ec-unsplash.jpg",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/neom/neom-kXbit_yx8t4-unsplash.jpg",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/neom/neom--RlktmDy3Ec-unsplash.jpg",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/neom/neom-kXbit_yx8t4-unsplash.jpg",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/neom/neom--RlktmDy3Ec-unsplash.jpg",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/neom/neom-kXbit_yx8t4-unsplash.jpg",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/neom/neom--RlktmDy3Ec-unsplash.jpg",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/neom/neom-kXbit_yx8t4-unsplash.jpg",
              alt: "Hegra-AlUla Retreat Development",
            },
            {
              src: "/photos/neom/neom--RlktmDy3Ec-unsplash.jpg",
              alt: "Hegra-AlUla Retreat Development",
            },
          ]}
        />
      </div>
    </SectionWrapper>
  );
}
