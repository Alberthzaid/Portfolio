"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";

const PULL_UP_EASE = [0.16, 1, 0.3, 1] as const;

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
  "aria-hidden"?: boolean;
}

export const WordsPullUp = ({
  text,
  className = "",
  showAsterisk = false,
  style,
  "aria-hidden": ariaHidden,
}: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style} aria-hidden={ariaHidden}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: PULL_UP_EASE }}
            className="relative inline-block"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span aria-hidden="true" className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">
                *
              </span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
}

export const WordsPullUpMultiStyle = ({ segments, className = "", style }: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: PULL_UP_EASE }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

interface HeroLink {
  label: string;
  href: string;
}

interface LanguageLink extends HeroLink {
  hrefLang: string;
  ariaLabel: string;
}

interface PrismaHeroProps {
  title: string;
  /** Accessible full heading; when set, the animated title is hidden from assistive tech. */
  heading?: string;
  description: string;
  navLabel: string;
  navItems: HeroLink[];
  languageSwitch?: LanguageLink;
  primaryCta: HeroLink;
  secondaryCta?: HeroLink;
  videoSrc?: string;
  posterSrc?: string;
}

// Self-hosted clip re-cut so its last 1.5s crossfade into its first frames, making `loop` seamless.
// The poster is the clip's first frame, so nothing jumps when playback starts.
const DEFAULT_VIDEO = "/videos/hero-loop.mp4";
const DEFAULT_POSTER = "/videos/hero-poster.jpg";

export const PrismaHero = ({
  title,
  heading,
  description,
  navLabel,
  navItems,
  languageSwitch,
  primaryCta,
  secondaryCta,
  videoSrc = DEFAULT_VIDEO,
  posterSrc = DEFAULT_POSTER,
}: PrismaHeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  // Progress 0 -> 1 while the hero scrolls out of the viewport.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={sectionRef} id="top" className="h-svh w-full p-2 pb-20 md:p-3">
      {/* Phone: floating bottom dock that scrolls sideways. md+: top-centered tab. */}
      <nav
        aria-label={navLabel}
        className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 overflow-hidden rounded-full border border-border bg-black/85 backdrop-blur md:inset-x-auto md:top-0 md:bottom-auto md:left-1/2 md:-translate-x-1/2 md:overflow-visible md:rounded-none md:rounded-b-3xl md:border-0 md:bg-black md:backdrop-blur-none"
      >
        <div className="flex snap-x items-center overflow-x-auto px-2 [scrollbar-width:none] mask-[linear-gradient(to_right,transparent,black_1rem,black_calc(100%-1rem),transparent)] [&::-webkit-scrollbar]:hidden md:gap-12 md:overflow-visible md:px-8 md:py-2 md:mask-none lg:gap-14">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 snap-start px-4 py-3 text-sm whitespace-nowrap text-primary/80 transition-colors hover:text-primary md:p-0"
            >
              {item.label}
            </a>
          ))}
          {languageSwitch && (
            <a
              href={languageSwitch.href}
              hrefLang={languageSwitch.hrefLang}
              lang={languageSwitch.hrefLang}
              aria-label={languageSwitch.ariaLabel}
              className="shrink-0 snap-start px-4 py-3 text-sm whitespace-nowrap text-primary/80 transition-colors hover:text-primary md:p-0"
            >
              {languageSwitch.label}
            </a>
          )}
        </div>
      </nav>

      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black md:rounded-[2rem]">
        {/* Background moves slower than the page; reduced motion pins it via CSS. */}
        <motion.div aria-hidden="true" style={{ y: videoY }} className="absolute inset-0 motion-reduce:transform-none!">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            poster={posterSrc}
            className="absolute inset-0 h-full w-full object-cover"
            src={videoSrc}
          />
        </motion.div>
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <motion.div
          style={{ opacity: contentOpacity, scale: contentScale }}
          className="absolute right-0 bottom-0 left-0 origin-bottom px-4 pb-2 motion-reduce:transform-none! motion-reduce:opacity-100! sm:px-6 md:px-10"
        >
          <div className="grid grid-cols-12 items-end gap-4">
            <motion.div style={{ y: titleY }} className="col-span-12 motion-reduce:transform-none! lg:col-span-8">
              <h1 className="text-[26vw] leading-[0.85] font-medium tracking-[-0.07em] text-primary sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]">
                {heading && <span className="sr-only">{heading}</span>}
                <WordsPullUp text={title} showAsterisk aria-hidden={heading ? true : undefined} />
              </h1>
            </motion.div>
            <Reveal hero className="col-span-12 flex flex-col gap-5 pb-6 lg:col-span-4 lg:pb-10">
              <p className="text-sm text-primary/70 md:text-base" style={{ lineHeight: 1.2 }}>
                {description}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={primaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary py-1 pr-1 pl-5 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
                >
                  {primaryCta.label}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" />
                  </span>
                </a>
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary/10 sm:text-base"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    {secondaryCta.label}
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
