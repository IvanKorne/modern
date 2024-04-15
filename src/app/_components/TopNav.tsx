import React from "react";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

const TopNav = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4">
      <div className="text-2xl font-semibold md:text-3xl">ModGal</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
export default TopNav;
