import React from "react";

type Props = {};

export default function SiteAdditions({}: Props) {
  return (
    <section className="px-8 py-16 min-h-dvh bg-neutral-950 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Potential Site Additions
      </h2>
      <div className="relative">
        {siteAdditions.map((item, i) => (
          <div
            key={i}
            className="w-[80vw] absolute top-0 bg-neutral-900 rounded-xl shadow-lg overflow-hidden border border-white/10">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <span className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  {item.cost}
                </span>
              </div>
              <p className="text-white/80 text-sm mb-4">{item.description}</p>

              <div className="mb-2">
                <div className="flex flex-wrap gap-2">
                  {item.pros.map((pro, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-emerald-700/40 text-emerald-200 px-2 py-1 rounded-full">
                      &#43;&nbsp;{pro}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <div className="flex flex-wrap gap-2">
                  {item.cons.map((con, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-rose-700/40 text-rose-200 px-2 py-1 rounded-full">
                      &#8722;&nbsp;{con}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
