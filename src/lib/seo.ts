import type { Metadata } from "next";
import { getContent, type Locale } from "@/content";
import { htmlLang, localePaths } from "@/content/locales";
import { contactEmail, fullName, siteUrl, socials } from "@/content/shared";

export { localePaths };

const SITE_NAME = "Zaid Pantoja";

// hreflang map shared by page metadata and the sitemap. English is the fallback for other languages.
export const languageAlternates = {
  en: localePaths.en,
  es: localePaths.es,
  "es-CO": localePaths.es,
  "x-default": localePaths.en,
};

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata(locale: Locale): Metadata {
  const { seo } = getContent(locale);
  const path = localePaths[locale];
  const alternateLocale = (Object.keys(localePaths) as Locale[])
    .filter((other) => other !== locale)
    .map((other) => getContent(other).seo.ogLocale);

  return {
    metadataBase: new URL(siteUrl),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: fullName, url: siteUrl }],
    creator: fullName,
    applicationName: SITE_NAME,
    alternates: { canonical: path, languages: languageAlternates },
    openGraph: {
      type: "profile",
      firstName: "Alberth Zaid",
      lastName: "Pantoja",
      title: seo.title,
      description: seo.description,
      url: path,
      siteName: SITE_NAME,
      locale: seo.ogLocale,
      alternateLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export function buildJsonLd(locale: Locale) {
  const { seo } = getContent(locale);
  const pageUrl = absoluteUrl(localePaths[locale]);
  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;
  const bogota = {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressRegion: "Bogotá D.C.",
    addressCountry: "CO",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: fullName,
        alternateName: ["Zaid Pantoja", "Alberth Pantoja"],
        givenName: "Alberth Zaid",
        familyName: "Pantoja",
        jobTitle: seo.jobTitle,
        description: seo.description,
        url: siteUrl,
        email: `mailto:${contactEmail}`,
        address: bogota,
        homeLocation: { "@type": "Place", name: "Bogotá, Colombia", address: bogota },
        knowsLanguage: ["es", "en"],
        knowsAbout: [
          "Artificial Intelligence",
          "Large Language Models",
          "AI agents",
          "Multi-agent systems",
          "Backend development",
          "Full-stack development",
          "Go",
          "NestJS",
          "Next.js",
          "Python",
          "FastAPI",
          "PostgreSQL",
          "AWS",
        ],
        worksFor: [
          { "@type": "Organization", name: "Refacciones.com" },
          { "@type": "Organization", name: "Salto Angel", url: "https://www.saltoangel.co" },
        ],
        alumniOf: { "@type": "CollegeOrUniversity", name: "Jala University" },
        sameAs: socials.filter((social) => social.label !== "WhatsApp").map((social) => social.href),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: SITE_NAME,
        inLanguage: Object.values(htmlLang),
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profilepage`,
        url: pageUrl,
        name: seo.title,
        description: seo.description,
        inLanguage: htmlLang[locale],
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
    ],
  };
}
