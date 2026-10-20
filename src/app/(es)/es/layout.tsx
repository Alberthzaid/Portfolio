import type { Metadata } from "next";
import { RootShell } from "@/components/RootShell";
import { siteUrl } from "@/content/shared";

const description =
  "Alberth Zaid Pantoja — Desarrollador de IA e Ingeniero de Software en Bogotá: backend, full-stack y aplicaciones con IA. Líder técnico en Refacciones.com y CTO de Salto Angel.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zaid Pantoja — Desarrollador de IA e Ingeniero de Software",
  description,
  alternates: { canonical: "/es" },
  openGraph: {
    title: "Zaid Pantoja — Desarrollador de IA e Ingeniero de Software",
    description,
    url: "/es",
    siteName: "Zaid Pantoja",
    locale: "es_CO",
    type: "website",
  },
};

export default function SpanishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="es-CO">{children}</RootShell>;
}
