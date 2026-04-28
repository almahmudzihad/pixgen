import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://pixgen-teal.vercel.app/data.json");
  const photos = await res.json();

  const photo = photos.find((p) => p.id == id);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Card className="overflow-hidden shadow-xl rounded-2xl border">
        {/* Image Section */}
        <div className="relative w-full flex justify-center bg-black/5">
          <Image
            src={photo.imageUrl}
            width={800}
            height={1000}
            alt={photo.title}
            className="object-contain w-full h-auto max-h-[80vh]"
          />

          <Chip
            size="sm"
            className="absolute top-4 right-4 bg-black/60 text-white backdrop-blur"
          >
            {photo.category}
          </Chip>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h1 className="text-2xl font-bold">{photo.title}</h1>

          {/* Stats */}
          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaHeart className="text-red-500" />
              <span>{photo.likes}</span>
            </div>

            <Separator orientation="vertical" />

            <div className="flex items-center gap-2">
              <BiDownload />
              <span>{photo.downloads}</span>
            </div>
          </div>

          {/* Prompt */}
          <div>
            <h3 className="font-semibold mb-1">Prompt</h3>
            <p className="text-gray-600 text-sm bg-gray-100 p-3 rounded-lg">
              {photo.prompt}
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p>
              <span className="font-semibold">Model:</span> {photo.model}
            </p>
            <p>
              <span className="font-semibold">Resolution:</span>{" "}
              {photo.resolution}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {photo.tags.map((tag, i) => (
              <Chip key={i} variant="flat" size="sm">
                #{tag}
              </Chip>
            ))}
          </div>

          {/* Action Button */}
          <Button
            className="w-full mt-4 flex items-center gap-2 justify-center"
            color="primary"
          >
            <BiDownload />
            Download Image
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PhotoDetailsPage;
