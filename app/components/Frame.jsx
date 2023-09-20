import Image from 'next/image';
import { image } from "../../images";
export default function Frame({ image }) {
  return (
    <>
      <Image
        alt=""
        src={image.imagePath}
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6">
        <h3>{photo.name}</h3>
        <p>Taken by {photo.username}</p>
      </div>
    </>
  );
}
