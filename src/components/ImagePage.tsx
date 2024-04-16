import React from "react";
import { getImage } from "~/server/queries";
type Props = {
  id: number;
};

const ImagePage = async ({ id }: Props) => {
  const image = await getImage(id);

  return (
    <section className="flex h-full w-full min-w-0  p-4">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} alt="image" className=" object-contain" />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col border-l ">
        <div className="text-bold text-xl">{image.name}</div>
      </div>
    </section>
  );
};

export default ImagePage;
