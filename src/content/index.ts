import { en } from "./en";
import type { SiteContent } from "./types";

export type Locale = "en";

const content: Record<Locale, SiteContent> = { en };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}

export type * from "./types";
