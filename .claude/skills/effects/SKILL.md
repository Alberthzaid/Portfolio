---
name: effects
description: "Trigger: effects, motion, animation, entrance, scroll reveal, hover feedback. Apply restrained motion-library effects in Next.js that preserve the design."
license: Apache-2.0
metadata:
  author: "Alberth Zaid"
  version: "2.0"
---

## Activation Contract

Apply smooth, restrained motion with the `motion` library (`motion/react`) in this Next.js App Router + Tailwind project. Preserve the design. Page-wide requests cover hero to footer; requests about "this", "here", or a named element stay within that target.

## Hard Rules

- Install `motion` if missing (`npm i motion`). Never use CSS keyframes or other animation libraries for entrances.
- Keep components as server components. Wrap groups in the client `Reveal` component (`assets/reveal.tsx` → `src/Components/Motion/Reveal.tsx`); never add `"use client"` to a whole section just to animate it.
- Wrap `src/app/layout.tsx` children once in `MotionProvider` (`assets/motion-provider.tsx`) so reduced-motion preferences apply to every effect.
- Easing is always `[0.22, 1, 0.36, 1]` tween. Fade opacity 0 → 1. No blur, rotation, horizontal travel, bounce, springs, or exit effects.
- Phone means below Tailwind `md` (`max-width: 767px`).

## Decision Gates

| Element | Treatment |
|---|---|
| Hero group | `<Reveal hero>`: 0.8s, no delay, starts on mount |
| Copy, mixed content, card collection | `<Reveal>`: 1s, 0.1s delay after entering view, 12px rise (8px on phone) |
| Standalone media | `<Reveal variant="media">`: scale 0.98 → 1, no travel |
| Group taller than viewport | add `tall` (threshold 0) |
| 2–4 sibling cards/visuals showing steps or progression | wrap each sibling, not the parent, with `step={0..3}` (+0.1s each; removed on phone) |
| Button or clickable card without feedback | `whileHover={{ scale: 1.01 }}`, `whileTap={{ scale: 0.99 }}`, `transition={{ duration: 0.25, ease }}` |
| Same, but scale already used by entrance/effect | opacity 0.9 on hover, 0.8 on press |
| Navigation, sticky controls, backgrounds, dividers, long article text, footer legal/utility links, inline links | no entrance, no scale |

## Execution Steps

1. Inspect the full scope, existing effects, and every breakpoint. For page-wide work, cover every eligible section, not just the first viewport. Keep effects that meet these rules; replace conflicting ones instead of layering entrances.
2. Pick non-overlapping groups: heading + copy + actions together; media and card collections separately. If one container holds all of them, animate the container or its groups, never both. Never reveal the whole page as one group or schedule lower sections from page-load delays.
3. Reveal each group together. Never stagger long lists, individual words, or related copy and actions.
4. Preserve working hover/press feedback. Feedback on a button inside a revealing group is allowed. For `next/link`, use `motion.create(Link)`. Prevent scaled feedback from clipping (check `overflow-hidden` parents).
5. Only animate elements visible at each breakpoint; never animate hidden copies (`hidden md:block` alternatives each get their own `Reveal`).
6. Run `npm run lint` and `npm run build`. Preview load, scroll, and interrupted hover/press at phone, tablet, and desktop widths when a browser is available; screenshots verify layout, not timing.

## Output Contract

Report the groups animated per section, elements deliberately left static, and any behavior not verified (timing, reduced motion, breakpoints). Completion means every eligible group was addressed, not that every element moves.

## References

- `assets/reveal.tsx` — entrance wrapper implementing timing, thresholds, phone travel, stagger, and reduced motion.
- `assets/motion-provider.tsx` — `MotionConfig reducedMotion="user"` provider for the root layout.
