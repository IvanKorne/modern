import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/a802fa95-411c-435f-9c20-bfd62400d866-19wb9u.jpeg",
  "https://utfs.io/f/00948d23-8338-449e-a2a1-ab1456c926d8-eyk9f7.jpg",
  "https://utfs.io/f/1791387a-c0e4-450f-867a-c8cd83aac2b1-1zbfv.png",
];

export const dynamic = "force-dynamic";
const mockImages = mockUrls.map((img, i) => ({
  id: i + 1,
  url: img,
}));
export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((img, index) => (
          <div key={img.id}>{img.name}</div>
        ))}
        {mockImages.map((img, index) => (
          <div className="w-48 " key={img.id + "-" + index}>
            <img src={img.url} alt="img" />
          </div>
        ))}
      </div>
    </main>
  );
}
