import type { MetadataRoute } from "next";
import { getContent } from "@/content";

export default function manifest(): MetadataRoute.Manifest {
  const { seo } = getContent("en");

  return {
    name: seo.title,
    short_name: "Zaid Pantoja",
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a09",
    theme_color: "#0a0a09",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
