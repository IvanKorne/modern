import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getImages } from "~/server/queries";
import Link from "next/link";
export const dynamic = "force-dynamic";

const Images = async () => {
  const images = await getImages();
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((img) => (
        <div key={img.id} className="flex w-48 flex-col items-center">
          <Link href={`/img/${img.id}`}>
            <h1>{img.name}</h1>
            <Image
              src={img.url}
              alt="images url"
              style={{ objectFit: "contain" }}
              width={480}
              height={480}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="size-full text-center text-2xl">Please Sign In</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
