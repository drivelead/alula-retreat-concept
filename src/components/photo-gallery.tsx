import Image from "next/image";
import React from "react";
import { Locale } from "@/lib/types/i18n";
import { serverSideTranslation } from "@/lib/i18n";
import path from "path";
import fs from "fs";

type Props = { locale: Locale };

export default async function PhotoGallery({ locale }: Props) {
  const { t } = await serverSideTranslation(locale, ["home"], {
    keyPrefix: "content.photo-gallery",
  });

  const dir = path.join(process.cwd(), "public/photos/gallery");
  const files = fs.readdirSync(dir);
  const images = files.filter((file) => /\.(jpe?g|png|webp)$/i.test(file));

  return (
    <section>
      <div className="p-24">
        <h1 className="anim text-6xl font-bold">{t("title")}</h1>
        <p className="anim opacity-60 tracking-wider uppercase font-bold">
          {t("description")}
        </p>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 px-24">
        {images.map((img) => (
          <Image
            key={img}
            loading="lazy"
            src={`/photos/gallery/${img}`}
            alt={img}
            className="w-full h-auto rounded aspect-video object-cover"
            width={1920}
            height={1080}
          />
        ))}
      </div>
    </section>
  );
}
