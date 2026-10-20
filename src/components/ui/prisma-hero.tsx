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
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
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

interface PrismaHeroProps {
  title: string;
  description: string;
  navItems: HeroLink[];
  primaryCta: HeroLink;
  secondaryCta?: HeroLink;
  videoSrc?: string;
  posterSrc?: string;
}

// Placeholder clip hotlinked from a third-party CDN; replace with a self-hosted asset when available.
const DEFAULT_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";
const DEFAULT_POSTER = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=70";

export const PrismaHero = ({
  title,
  description,
  navItems,
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
    <section ref={sectionRef} id="top" className="h-svh w-full p-2 md:p-3">
      <nav aria-label="Primary" className="fixed top-0 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[10px] text-primary/80 transition-colors hover:text-primary sm:text-xs md:text-sm"
            >
              {item.label}
            </a>
          ))}
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
                <WordsPullUp text={title} showAsterisk />
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
