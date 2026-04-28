import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="group overflow-hidden rounded-2xl border shadow-md hover:shadow-xl transition duration-300">
      
      {/* Image Section */}
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <Image
          src={photo.imageUrl}
          fill
          alt={photo.title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

        {/* Category */}
        <Chip
          size="sm"
          className="absolute top-3 right-3 bg-black/60 text-white backdrop-blur"
        >
          {photo.category}
        </Chip>

        {/* Stats Overlay */}
        <div className="absolute bottom-3 left-3 flex items-center gap-4 text-white text-sm opacity-0 group-hover:opacity-100 transition">
          <div className="flex items-center gap-1">
            <FaHeart className="text-red-400" />
            <span>{photo.likes}</span>
          </div>

          <div className="flex items-center gap-1">
            <BiDownload />
            <span>{photo.downloads}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h2 className="font-semibold text-lg line-clamp-1">
          {photo.title}
        </h2>

        {/* Button */}
        <Link href={`/all-photos/${photo.id}`}>
          <Button
            variant="flat"
            className="w-full group-hover:bg-black group-hover:text-white transition"
          >
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default PhotoCard;