import type { Locale } from "@/content";
import { buildJsonLd } from "@/lib/seo";

export function JsonLd({ locale }: { locale: Locale }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(locale)).replace(/</g, "\\u003c") }}
    />
  );
}
