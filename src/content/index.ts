import { en } from "./en";
import { es } from "./es";
import type { Locale } from "./locales";
import type { SiteContent } from "./types";

export type { Locale } from "./locales";

const content: Record<Locale, SiteContent> = { en, es };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}

export type * from "./types";
