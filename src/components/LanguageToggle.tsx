"use client";

import type { MouseEvent } from "react";
import { htmlLang, localeNames, localePaths, locales, type Locale } from "@/content/locales";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  locale: Locale;
  label: string;
}

// Plain links (not client-side translation) so each language stays a separate, crawlable URL.
export function LanguageToggle({ locale, label }: LanguageToggleProps) {
  // Both versions share section ids, so carry the current anchor across.
  const keepSection = (event: MouseEvent<HTMLAnchorElement>) => {
    const { hash } = window.location;
    if (!hash) return;
    event.preventDefault();
    window.location.assign(event.currentTarget.pathname + hash);
  };

  return (
    <div role="group" aria-label={label} className="flex shrink-0 items-center rounded-full border border-border p-0.5 text-xs">
      {locales.map((target) => {
        const active = target === locale;
        return (
          <a
            key={target}
            href={localePaths[target]}
            hrefLang={htmlLang[target]}
            lang={htmlLang[target]}
            title={localeNames[target]}
            aria-current={active ? "page" : undefined}
            onClick={active ? undefined : keepSection}
            className={cn(
              "rounded-full px-2.5 py-1 font-medium transition-colors",
              active ? "bg-primary text-black" : "text-primary/70 hover:text-primary",
            )}
          >
            <span aria-hidden="true">{target.toUpperCase()}</span>
            <span className="sr-only">{localeNames[target]}</span>
          </a>
        );
      })}
    </div>
  );
}
