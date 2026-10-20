"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

const DIMMED = 0.2;

interface ScrollFocusProps {
  /** Draws a top divider that fills left to right on the same scroll progress. */
  rule?: boolean;
  className?: string;
  children: ReactNode;
}

/**
 * List item that lights up as it scrolls from the bottom of the viewport toward its middle.
 * Progress is clamped, so passed rows stay lit. Scroll-linked styles ignore MotionConfig,
 * so reduced motion is handled here by dropping the motion values entirely.
 */
export function ScrollFocus({ rule = false, className, children }: ScrollFocusProps) {
  const ref = useRef<HTMLLIElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.5"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [DIMMED, 1]);

  return (
    <li ref={ref} className={`relative ${className ?? ""}`}>
      {rule && (
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-border">
          <motion.div
            style={reduced ? undefined : { scaleX: scrollYProgress }}
            className="h-px origin-left bg-primary/40"
          />
        </div>
      )}
      <motion.div style={reduced ? undefined : { opacity }}>{children}</motion.div>
    </li>
  );
}
