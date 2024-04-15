import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export const getImages = async () => {
  const user = auth();
  if (!user.userId) {
    throw new Error("Unauthorized");
  }
  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
};

export const getImage = async (imageId: number) => {
  const user = auth();
  if (!user) throw new Error("Unauthorized");
  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, imageId),
  });

  if (!image) throw new Error("Could not find image");

  if (image.userId !== image.userId) throw new Error("Unauthorized");

  return image;
};
