import Image from "next/image";
import React from "react";
import { Locale } from "@/lib/types/i18n";
import { serverSideTranslation } from "@/lib/i18n";
import path from "path";
import fs from "fs";

const rotations = [
  "rotate-0",
  "rotate-1",
  "rotate-2",
  "-rotate-1",
  "-rotate-2",
];

type Props = { locale: Locale };

export default async function PhotoGallery({ locale }: Props) {
  const { t } = await serverSideTranslation(locale, ["home"], {
    keyPrefix: "content.photo-gallery",
  });

  const dir = path.join(process.cwd(), "public/photos/gallery");
  const files = fs.readdirSync(dir);
  const images = files.filter((file) => /\.(jpe?g|png|webp)$/i.test(file));

  return (
    <section className="bg-neutral-500 text-white">
      <div className="p-24">
        <h1 className="anim text-6xl font-bold bg-gradient-to-l from-yellow-400 via-yellow-500 to-amber-600 inline-block bg-clip-text text-transparent">
          {t("title")}
        </h1>
        <p className="anim opacity-60 tracking-wider uppercase font-bold">
          {t("description")}
        </p>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-2 px-24">
        {images.map((img) => {
          const randomRotation =
            rotations[Math.floor(Math.random() * rotations.length)];
          return (
            <div
              key={img}
              className={`w-full h-auto aspect-video transform p-1 bg-gradient-to-br from-neutral-50 to-white shadow-md/20 ${randomRotation} hover:rotate-0 transition-all duration-200 ease-in-out hover:z-50 hover:shadow-lg/30 hover:scale-105`}
            >
              <Image
                loading="lazy"
                src={`/photos/gallery/${img}`}
                alt={img}
                width={640}
                height={480}
                className="w-full h-full object-cover transform"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
