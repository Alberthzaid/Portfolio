import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "boxicons/css/boxicons.min.css";
import "@/app/globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

// Shared <html>/<body> for every locale root layout; each layout only sets its own `lang`.
export function RootShell({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang} className={cn("font-sans", geist.variable)}>
      <body>
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
        <Script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="f7c86922-447b-4bfa-916f-8e258d1f7a10"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
