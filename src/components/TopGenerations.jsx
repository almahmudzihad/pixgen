import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
  const res = await fetch("https://pixgen-teal.vercel.app/data.json");
  const data = await res.json();
  const topPhotos = data.slice(0, 8);

  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold my-5">Top Generations</h1>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopGenerations;
