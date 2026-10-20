import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "boxicons/css/boxicons.min.css";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { siteUrl } from "@/content/shared";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const description =
  "Alberth Zaid Pantoja — Software Engineer focused on backend, full-stack, and AI applications. Technical lead at Refacciones.com and co-founder & CTO at Salto Angel.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zaid Pantoja — AI & Software Engineer",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Zaid Pantoja — AI & Software Engineer",
    description,
    url: "/",
    siteName: "Zaid Pantoja",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
        <Script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="f7c86922-447b-4bfa-916f-8e258d1f7a10"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
