"use client";

import { motion } from "motion/react";
import { whatsappUrl } from "@/content/profile";

const EASE = [0.22, 1, 0.36, 1] as const;

// Floating contact shortcut. Sticky controls get press feedback only, no entrance.
export function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.25, ease: EASE }}
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/40 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:right-8 md:bottom-8"
    >
      <i className="bx bxl-whatsapp text-3xl" aria-hidden="true" />
    </motion.a>
  );
}
