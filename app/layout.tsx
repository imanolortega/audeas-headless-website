import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import { Main } from "@/components/craft";

import { cn } from "@/lib/utils";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/nav/footer";
import { TopNav } from "@/components/nav/top-nav";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Audeas | Asociación Civil",
  description:
    "Somos una Asociación Civil que agrupa a instituciones universitarias que ofrecen enseñanza superior Agropecuaria y Forestal.",
  metadataBase: new URL("https://audeas.vercel.app/"),
  openGraph: {
    images: '/audeas-asociacion-civil.webp',
  },
};

// Revalidate content every hour
export const revalidate = 3600;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <TopNav />
        <Nav />
        <Main>{children}</Main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
