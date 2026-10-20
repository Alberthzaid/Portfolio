"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Children, useRef, type CSSProperties, type ReactNode } from "react";

const STACK_SCALE = 0.94;
const STACK_DIM = 0.55;

interface StackItemProps {
  index: number;
  total: number;
  progress: MotionValue<number>;
  children: ReactNode;
}

// Each item sticks; while the next one scrolls over it, it scales down and dims.
function StackItem({ index, total, progress, children }: StackItemProps) {
  const span = 1 / Math.max(1, total - 1);
  const isLast = index === total - 1;
  // Scroll-linked values may be hardware-accelerated, which requires offsets within [0, 1].
  // The last item never shrinks, so it gets a valid full range with constant output.
  const range = isLast ? [0, 1] : [index * span, (index + 1) * span];
  const scale = useTransform(progress, range, [1, isLast ? 1 : STACK_SCALE]);
  const dim = useTransform(progress, range, [0, isLast ? 0 : STACK_DIM]);

  return (
    <li
      style={{ "--stack-offset": `${index * 1.25}rem` } as CSSProperties}
      className="sticky top-0 flex h-screen items-start pt-[calc(5rem+var(--stack-offset))] motion-reduce:static md:pt-[calc(14vh+var(--stack-offset))] motion-reduce:h-auto motion-reduce:pt-0"
    >
      <motion.div
        style={{ scale }}
        className="relative w-full origin-top overflow-hidden rounded-3xl motion-reduce:h-full motion-reduce:transform-none!"
      >
        {children}
        <motion.div
          aria-hidden="true"
          style={{ opacity: dim }}
          className="pointer-events-none absolute inset-0 bg-black motion-reduce:hidden"
        />
      </motion.div>
    </li>
  );
}

/**
 * Stacked sticky cards driven by one useScroll on the list. Reduced motion is pure CSS:
 * items lose sticky/full-height and the list becomes a regular responsive grid.
 */
export function StickyStack({ label, children }: { label: string; children: ReactNode }) {
  const listRef = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start start", "end end"] });
  const items = Children.toArray(children);

  return (
    <ul
      ref={listRef}
      aria-label={label}
      className="flex flex-col motion-reduce:grid motion-reduce:gap-4 md:motion-reduce:grid-cols-2 md:motion-reduce:gap-6 lg:motion-reduce:grid-cols-3"
    >
      {items.map((item, index) => (
        <StackItem key={index} index={index} total={items.length} progress={scrollYProgress}>
          {item}
        </StackItem>
      ))}
    </ul>
  );
}
