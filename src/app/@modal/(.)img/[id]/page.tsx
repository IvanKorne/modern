import React from "react";
import { getImage } from "~/server/queries";
type Props = {
  params: {
    id: string;
  };
};

const PhotoModal = async ({ params: { id: photoId } }: Props) => {
  const image = await getImage(parseInt(photoId));
  return (
    <div>
      <img src={image.url} alt="image" className="size-96" />
    </div>
  );
};

export default PhotoModal;
