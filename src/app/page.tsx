import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="relative bg-amber-800 text-white h-dvh">
        <div className="absolute top-0 h-full w-full">
          <Image
            src="/photos/neom/neom--RlktmDy3Ec-unsplash.jpg"
            width={1920}
            height={1080}
            alt="Hegra-AlUla Retreat Development"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="absolute top-0 h-full w-full flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold">
            Hegra-AlUla Retreat Development
          </h1>
          <p className="opacity-80 uppercase font-bold">
            Development Vision, Benchmark Inspiration, and Naming
          </p>
        </div>
      </section>
      <section className="bg-purple-400 h-dvh h-dvh flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold uppercase text-purple-900">
          Section 1
        </h1>
        <p className="text-purple-700">Font test text here Proxima Nova</p>
      </section>
      <section className="bg-lime-400 h-dvh h-dvh flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold uppercase text-lime-900">
          Section 1
        </h1>
        <p className="text-lime-700">Font test text here Proxima Nova</p>
      </section>
    </main>
  );
}
