import React from "react";
import ImagePage from "~/components/ImagePage";
type Props = {
  params: {
    id: string;
  };
};

const PhotoPage = async ({ params: { id: photoId } }: Props) => {
  const imageId = parseInt(photoId);

  if (Number.isNaN(imageId)) throw new Error("Invalid Photo Id");
  return <ImagePage id={imageId} />;
};

export default PhotoPage;
