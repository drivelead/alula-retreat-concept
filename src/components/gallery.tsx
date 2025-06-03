import Image from "next/image";

const rotations = [
  "rotate-0",
  "rotate-1",
  "rotate-2",
  "rotate-3",
  "-rotate-1",
  "-rotate-2",
  "-rotate-3",
];

export default function Gallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-red-500">
      {images.map((img, i) => {
        const randomRotation =
          rotations[Math.floor(Math.random() * rotations.length)];
        return (
          <div key={i} className={`transform p-3 bg-red-500 ${randomRotation}`}>
            <Image
              src={`/gallery/${img}`}
              alt={img}
              width={640}
              height={480}
              className="w-full h-auto object-cover rounded shadow"
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
}
