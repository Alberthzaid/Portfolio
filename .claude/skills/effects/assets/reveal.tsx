"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import { useRef, useSyncExternalStore } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
const PHONE_QUERY = "(max-width: 767px)";

function subscribeToPhoneQuery(onChange: () => void) {
  const mql = window.matchMedia(PHONE_QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

// Server snapshot is `false` so hydration matches; the client value follows right after.
function useIsPhone() {
  return useSyncExternalStore(
    subscribeToPhoneQuery,
    () => window.matchMedia(PHONE_QUERY).matches,
    () => false,
  );
}

type RevealProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "transition" | "ref"
> & {
  /** "media" scales 0.98 -> 1; "content" rises 12px (8px on phone). */
  variant?: "content" | "media";
  /** Hero groups start on mount: 0.8s, no delay. */
  hero?: boolean;
  /** Position among 2-4 progression siblings; adds 0.1s per step off phone. */
  step?: number;
  /** Groups taller than the viewport reveal as soon as any part is visible. */
  tall?: boolean;
};

export function Reveal({
  variant = "content",
  hero = false,
  step = 0,
  tall = false,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isPhone = useIsPhone();
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: hero || tall ? 0 : 0.15 });

  const hidden =
    variant === "media"
      ? { opacity: 0, scale: 0.98 }
      : { opacity: 0, y: isPhone ? 8 : 12 };
  const visible =
    variant === "media" ? { opacity: 1, scale: 1 } : { opacity: 1, y: 0 };

  const shouldShow = reduceMotion || inView;
  // Hidden-state changes (e.g. phone travel resolving after hydration) apply instantly.
  const transition =
    reduceMotion || !inView
      ? { duration: 0 }
      : {
          duration: hero ? 0.8 : 1,
          delay: (hero ? 0 : 0.1) + (isPhone ? 0 : step * 0.1),
          ease: EASE,
        };

  return (
    <motion.div
      {...props}
      ref={ref}
      initial={hidden}
      animate={shouldShow ? visible : hidden}
      transition={transition}
    />
  );
}
