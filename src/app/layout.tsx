import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";
import TopNav from "./_components/TopNav";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
          <TopNav />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
