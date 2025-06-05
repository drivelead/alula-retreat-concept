import React from "react";
import { Locale } from "@/lib/types/i18n";
import { serverSideTranslation } from "@/lib/i18n";
import Image from "next/image";

type Props = { locale: Locale };

export default async function Booking({ locale }: Props) {
  const { t } = await serverSideTranslation(locale, ["home"], {
    keyPrefix: "content.appendix-a1",
  });

  return (
    <section className="py-24">
      <div className="px-24 mb-24">
        <h1 className="anim text-6xl font-bold">{t("title")}</h1>
        <p className="anim opacity-60 tracking-wider uppercase font-bold">
          {t("description")}
        </p>
      </div>
      <div className="px-24 grid grid-cols-2 gap-8">
        <div className="aspect-video overflow-scroll border-20 border-neutral-900 my-8 rounded-xl">
          <Image
            src="/screens/airbnbcom_hegraviews.png"
            width={1920}
            height={1280}
            alt="airbnb site"
          />
        </div>
        <div className="aspect-video overflow-scroll border-20 border-neutral-900 my-8 rounded-xl">
          <Image
            src="/screens/bookingcom_hegraviews.png"
            width={1920}
            height={1280}
            alt="booking site"
          />
        </div>
      </div>
    </section>
  );
}
