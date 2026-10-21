// Locale routing data. Kept dependency-free so client components can import it without pulling in page copy.

export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];

export const localePaths: Record<Locale, string> = { en: "/", es: "/es" };

export const htmlLang: Record<Locale, string> = { en: "en", es: "es-CO" };

// Each language named in itself, as language pickers conventionally do.
export const localeNames: Record<Locale, string> = { en: "English", es: "Español" };
