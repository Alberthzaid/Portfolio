"use client";

import { motion, useScroll, useTransform, type HTMLMotionProps } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type ParallaxProps = Omit<HTMLMotionProps<"div">, "style" | "ref"> & {
  /** Max vertical offset in px; travels +offset -> -offset across the element's scroll range. */
  offset?: number;
};

// Scroll-linked y offset. Reduced motion is handled in CSS (`motion-reduce:transform-none!`)
// so server and client markup are identical and nothing flashes or mismatches on hydration.
export function Parallax({ offset = 40, className, ...props }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return <motion.div {...props} ref={ref} style={{ y }} className={cn("motion-reduce:transform-none!", className)} />;
}
