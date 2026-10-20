import { ImageResponse } from "next/og";
import type { Locale } from "@/content";
import { fullName } from "@/content/shared";

export const ogSize = { width: 1200, height: 630 };

const taglines: Record<Locale, string> = {
  en: "AI Developer · Bogotá",
  es: "Desarrollador de IA · Bogotá",
};

const roles: Record<Locale, string> = {
  en: "LLM agents · Backend · Full-stack",
  es: "Agentes con LLM · Backend · Full-stack",
};

export const ogAlt: Record<Locale, string> = {
  en: `${fullName} — ${taglines.en}`,
  es: `${fullName} — ${taglines.es}`,
};

// Shared social card in the site's dark palette (near-black surface, cream text).
export function renderOgImage(locale: Locale) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0a09",
          color: "#e1e0cc",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, opacity: 0.6, textTransform: "uppercase" }}>
          zaidpantoja.tech
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 200, lineHeight: 0.85, letterSpacing: -12, fontWeight: 500 }}>Zaid</div>
          <div style={{ display: "flex", marginTop: 40, fontSize: 56, letterSpacing: -1 }}>{fullName}</div>
          <div style={{ display: "flex", marginTop: 12, fontSize: 40, opacity: 0.8 }}>{taglines[locale]}</div>
          <div style={{ display: "flex", marginTop: 12, fontSize: 28, opacity: 0.6 }}>{roles[locale]}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
