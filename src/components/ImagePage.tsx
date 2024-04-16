import { clerkClient } from "@clerk/nextjs/server";
import React from "react";
import { getImage } from "~/server/queries";
import { Button } from "./ui/button";
import { deleteImage } from "~/server/delete";
type Props = {
  id: number;
};

const ImagePage = async ({ id }: Props) => {
  const image = await getImage(id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <section className="flex h-full w-full min-w-0  ">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} alt="image" className=" object-fit flex-shrink " />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col gap-2 border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col px-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col px-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleString()}</span>
        </div>
        <div className="flex flex-col px-2">
          <form
            action={async () => {
              "use server";
              await deleteImage(id);
            }}
          >
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ImagePage;
