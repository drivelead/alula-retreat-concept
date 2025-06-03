import fs from "fs";
import path from "path";
import Image from "next/image";

import { serverSideTranslation } from "@/lib/i18n";

import Hero from "@/components/hero";
import Names from "@/components/names";
import Opportunity from "@/components/opportunity";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Roadmap from "@/components/roadmap";
import SiteAdditions from "@/components/site-additions";
import I18NProvider from "@/components/i18n/translations-provider";
import { Locale } from "@/lib/types/i18n";
import AppendixA1 from "@/components/appendix-a1";
import AppendixA2 from "@/components/appendix-a2";
import PhotoGallery from "@/components/photo-gallery";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const ns = ["home"];
  const { t, resources } = await serverSideTranslation(locale, ns);
  const dir = path.join(process.cwd(), "public/photos/gallery");
  const files = fs.readdirSync(dir);
  const images = files.filter((file) => /\.(jpe?g|png|webp)$/i.test(file));

  return (
    <main>
      <I18NProvider locale={locale} namespaces={ns} resources={resources}>
        <div className="">
          <Hero />
          <Opportunity />
          <Section3 locale={locale} />
          <Names locale={locale} />
          <SiteAdditions locale={locale} />
          <Roadmap />
          <AppendixA1 locale={locale} />
          <AppendixA2 locale={locale} />
          <PhotoGallery locale={locale} />
        </div>
      </I18NProvider>
    </main>
  );
}
