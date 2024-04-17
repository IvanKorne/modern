"use client";
import React from "react";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "~/components/UploadButton";

const TopNav = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4">
      <div className="text-2xl font-semibold md:text-3xl">ModGal</div>
      <div className="flex items-center justify-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />

          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
export default TopNav;
