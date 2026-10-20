import { RootShell } from "@/components/RootShell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("es");

export default function SpanishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="es-CO">{children}</RootShell>;
}
