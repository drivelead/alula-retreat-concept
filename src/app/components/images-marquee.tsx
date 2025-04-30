"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Marquee, { MarqueeProps } from "react-fast-marquee";

const rotations = [
  "rotate-2",
  "-rotate-2",
  "rotate-2",
  "rotate-2",
  "-rotate-2",
];

function MarqueeImage({
  idx,
  src,
  alt,
}: {
  idx: number;
  src: string;
  alt?: string;
}) {
  return (
    <div
      className={cn(
        `image-card w-48 md:w-60 rounded overflow-hidden`,
        rotations[idx % rotations.length]
      )}
    >
      <div className="relative w-full aspect-[5/7]">
        <Image
          src={src}
          alt={alt || ""}
          className={cn("w-full h-full object-cover")}
          fill
        />
      </div>
    </div>
  );
}

interface Props extends MarqueeProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

export default function ImagesMarquee({ images, pauseOnHover, speed }: Props) {
  return (
    <div>
      <Marquee pauseOnHover={pauseOnHover} speed={speed ?? 50}>
        <div className="flex gap-5 md:gap-8 pe-5 md:pe-8 py-4">
          {images.map((entry, i) => (
            <MarqueeImage key={i} idx={i} src={entry.src} alt={entry.alt} />
          ))}
        </div>
      </Marquee>
    </div>
  );
}
