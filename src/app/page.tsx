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
        <section>
          <div className="p-24">
            <h1 className="anim text-6xl font-bold">Appendix: Photo Gallery</h1>
            <p className="anim opacity-60 tracking-wider uppercase font-bold">
              Ground-Level Visual Documentation — showcasing palm groves,
              sandstone terrain, and current structures.
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
