import type { MetadataRoute } from "next";
import { absoluteUrl, languageAlternates, localePaths } from "@/lib/seo";

const languages = Object.fromEntries(
  Object.entries(languageAlternates).map(([lang, path]) => [lang, absoluteUrl(path)]),
);

// One page per locale: sections are anchors, which search engines do not index separately.
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(localePaths).map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === localePaths.en ? 1 : 0.9,
    alternates: { languages },
  }));
}
