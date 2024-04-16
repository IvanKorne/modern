import React from "react";
import { Modal } from "./modal";
import ImagePage from "~/components/ImagePage";
type Props = {
  params: {
    id: string;
  };
};

const PhotoModal = async ({ params: { id: photoId } }: Props) => {
  const imageId = parseInt(photoId);

  if (Number.isNaN(imageId)) throw new Error("Invalid Photo Id");
  return (
    <Modal>
      <ImagePage id={imageId} />
    </Modal>
  );
};

export default PhotoModal;
