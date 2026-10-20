import { ogAlt, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = ogAlt.es;
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOgImage("es");
}
