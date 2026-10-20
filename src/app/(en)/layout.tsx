import type { Metadata } from "next";
import { RootShell } from "@/components/RootShell";
import { siteUrl } from "@/content/shared";

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

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="en">{children}</RootShell>;
}
