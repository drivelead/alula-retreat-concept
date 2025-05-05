import fs from "fs";
import path from "path";

import Hero from "./components/hero";
import Names from "./components/names";
import Opportunity from "./components/opportunity";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Roadmap from "./components/roadmap";
import Image from "next/image";

export default function Home() {
  const dir = path.join(process.cwd(), "public/photos/gallery");
  const files = fs.readdirSync(dir);
  const images = files.filter((file) => /\.(jpe?g|png|webp)$/i.test(file));
  return (
    <main>
      <div className="">
        <Hero />
        <Opportunity />
        <Section3 />
        <Section4 />
        <Names />
        <Roadmap />
        <section className="py-24">
          <div className="px-24 mb-24">
            <h1 className="anim text-6xl font-bold">
              Appendix A1: Current On-Site Structures
            </h1>
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
        <section className="bg-emerald-700 py-24 text-white">
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
              resembling camels, mounted riders, and abstract figures — motifs
              visually similar to known petroglyphs in the AlUla region.
            </p>
            <p>
              <strong>Important Context:</strong>
            </p>
            <p>
              These markings have not been verified by any archaeological
              authority. In proximity to these etchings, modern Arabic
              inscriptions were also noted — including phrases like “ذكريات”
              (“memories”) — which suggests at least partial recent additions.
              This casts doubt on the full authenticity of the markings.
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
                Whether they could be incorporated as part of the site narrative
                (if verified)
              </li>
            </ul>
            <p>
              If found to be authentic, these etchings could provide a rare
              opportunity to integrate the story of ancient travel, settlement,
              or ritual into the identity of the retreat — enhancing the sense
              of timelessness and place.
            </p>
          </div>
        </section>
        <section>
          <div className="p-24">
            <h1 className="anim text-6xl font-bold">Appendix: Photo Gallery</h1>
            <p className="anim opacity-60 tracking-wider uppercase font-bold">
              On-site documentation capturing natural features, structures, and
              spatial texture. Photos taken April 2025.
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
    </main>
  );
}
