import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { Inter } from "next/font/google";
import TopNav from "./_components/TopNav";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "sonner";
import { CSPostHogProvider } from "~/lib/provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "ModGal",
  description: "Modern Gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <CSPostHogProvider>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <body className={`font-sans ${inter.variable} dark`}>
            <div className="grid h-screen grid-rows-[auto,1fr]">
              <TopNav />
              <main className="overflow-y-scroll">{children}</main>
            </div>
            {modal}
            <div id="modal-root" />
            <Toaster className="dark" />
          </body>
        </CSPostHogProvider>
      </ClerkProvider>
    </html>
  );
}
