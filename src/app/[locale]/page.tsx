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
import SiteAdditions from "@/components/siteAdditions";
import I18NProvider from "@/components/i18n/translations-provider";

type Props = {
  params: Promise<{ locale: string }>;
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
          <Section3 />
          <Section4 />
          <Names />
          <SiteAdditions />
          <Roadmap />
          <section className="py-24">
            <div className="px-24 mb-24">
              <h1 className="anim text-6xl font-bold">{t("welcome")}</h1>
              <p className="anim opacity-60 tracking-wider uppercase font-bold">
                Ground-Level Visual Documentation — showcasing palm groves,
                sandstone terrain, and current structures.
              </p>
            </div>
            <div className="px-24">
              <ul className="list-disc ps-6 font-light space-y-2">
                <li>
                  3-bedroom rental unit (positioned deeper into the property)
                </li>
                <li>2-bedroom rental unit (closer to the road entrance)</li>
                <li>1 staff room</li>
                <li>2 large traditional tents</li>
                <li>Irrigation system for palm grove (existing)</li>
                <li>Access road to both units</li>
                <li>Large grove of mature palm trees</li>
                <li>Naturally occurring rock formations</li>
                <li>Visible terrain gradient and cleared zones</li>
              </ul>
            </div>
          </section>
          <section className="relative bg-amber-500 text-white">
            <div className="relative py-24 z-10 bg-amber-800/40">
              <div className="px-24 mb-24">
                <h1 className="anim text-6xl font-bold">
                  Appendix A2: Unverified Inscriptions
                </h1>
                <p className="anim opacity-60 tracking-wider uppercase font-bold">
                  Possible traces of the past — yet to be verified.
                </p>
              </div>
              <div className="space-y-4 px-24">
                <p>
                  While exploring the site, several stone etchings were observed
                  across exposed sandstone surfaces. These include carvings
                  resembling camels, mounted riders, and abstract figures —
                  motifs visually similar to known petroglyphs in the AlUla
                  region.
                </p>
                <p>
                  <strong>Important Context:</strong>
                </p>
                <p>
                  These markings have not been verified by any archaeological
                  authority. Modern Arabic inscriptions were also noted in
                  proximity to these etchings which suggests at least partial
                  recent additions.
                </p>
                <p>
                  <strong>Next Steps:</strong>
                </p>
                <p>Further expert review is recommended to determine:</p>
                <ul className="list-disc ps-6 font-light space-y-2">
                  <li>Whether any of the carvings pre-date the modern era</li>
                  <li>
                    The potential historical or cultural significance of the
                    markings
                  </li>
                  <li>
                    Whether they could be incorporated as part of the site
                    narrative (if verified)
                  </li>
                </ul>
                <p>
                  If found to be authentic, these etchings could provide a rare
                  opportunity to integrate the story of ancient travel,
                  settlement, or ritual into the identity of the retreat —
                  enhancing the sense of timelessness and place.
                </p>
              </div>
            </div>
            <div className="absolute top-0 w-full h-full">
              <Image
                src={"/photos/gallery/IMG_3020.JPG"}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </section>
          <section>
            <div className="p-24">
              <h1 className="anim text-6xl font-bold">
                Appendix: Photo Gallery
              </h1>
              <p className="anim opacity-60 tracking-wider uppercase font-bold">
                On-site documentation capturing natural features, structures,
                and spatial texture.
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
        </div>
      </I18NProvider>
    </main>
  );
}
