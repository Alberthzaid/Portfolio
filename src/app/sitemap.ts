import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/shared";

// One-page site: sections are anchors on "/", which search engines do not index separately.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
