export default function Gallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((img) => (
        <img
          key={img}
          src={`/gallery/${img}`}
          alt={img}
          className="w-full h-auto object-cover rounded shadow"
        />
      ))}
    </div>
  );
}
