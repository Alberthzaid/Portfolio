"use client";

import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
import { Children, useLayoutEffect, useRef, type ReactNode } from "react";

interface HorizontalScrollProps {
  /** Static heading content rendered in the sticky viewport. */
  heading: ReactNode;
  /** Accessible label for the list of cards. */
  label: string;
  /** One child per card; each is wrapped in a snap-aligned list item. */
  children: ReactNode;
}

const PAD = "px-4 sm:px-6 md:px-10 xl:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]";

/**
 * Vertical scroll drives a horizontal track. The outer section height is set from the measured
 * track overflow (ResizeObserver, written straight to the DOM) so the scroll length equals the
 * horizontal travel. Reduced motion is pure CSS: the section collapses to auto height, the
 * sticky viewport becomes static, and the track becomes a native snap-scrolling row.
 */
export function HorizontalScroll({ heading, label, children }: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const distance = useMotionValue(0);
  const items = Children.toArray(children);
  const total = items.length;

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform([scrollYProgress, distance], ([progress, travel]: number[]) => -progress * travel);
  const counter = useTransform(scrollYProgress, (progress) =>
    String(Math.min(total, Math.floor(progress * total) + 1)).padStart(2, "0"),
  );

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !viewport || !track) return;

    const measure = () => {
      const travel = Math.max(0, track.scrollWidth - viewport.clientWidth);
      distance.set(travel);
      section.style.height = `calc(100vh + ${travel}px)`;
    };

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);
    measure();
    return () => observer.disconnect();
  }, [distance]);

  return (
    <div ref={sectionRef} className="relative motion-reduce:h-auto!">
      <div className="sticky top-0 flex h-screen flex-col justify-center gap-8 overflow-hidden py-16 motion-reduce:static motion-reduce:h-auto motion-reduce:py-24 md:gap-12 md:motion-reduce:py-32">
        <div className="mx-auto flex w-full max-w-7xl items-end justify-between gap-6 px-4 sm:px-6 md:px-10">
          <div>{heading}</div>
          <p className="shrink-0 text-xs tracking-[0.2em] text-muted-foreground tabular-nums motion-reduce:hidden">
            <motion.span className="text-primary">{counter}</motion.span> / {String(total).padStart(2, "0")}
          </p>
        </div>

        <div
          ref={viewportRef}
          className="motion-reduce:snap-x motion-reduce:snap-mandatory motion-reduce:overflow-x-auto"
        >
          <motion.ol
            ref={trackRef}
            aria-label={label}
            style={{ x }}
            className={`flex w-max items-stretch gap-4 md:gap-6 motion-reduce:transform-none! ${PAD}`}
          >
            {items.map((item, index) => (
              <li key={index} className="flex w-[85vw] shrink-0 snap-start scroll-mx-4 md:w-[42vw] xl:w-[32vw]">
                {item}
              </li>
            ))}
          </motion.ol>
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 motion-reduce:hidden sm:px-6 md:px-10">
          <div className="h-px w-full bg-border">
            <motion.div style={{ scaleX: scrollYProgress }} className="h-px origin-left bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
