"use client";
import React from "react";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

const TopNav = () => {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between border-b p-4">
      <div className="text-2xl font-semibold md:text-3xl">ModGal</div>
      <div className="flex items-center justify-center gap-2">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />

          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
export default TopNav;
