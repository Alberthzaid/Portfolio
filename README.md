# Alberth Zaid Portfolio

Personal portfolio built with [Next.js](https://nextjs.org) (App Router, TypeScript) and [Tailwind CSS v4](https://tailwindcss.com).

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # run ESLint
```

## Project structure

- `src/app/` — one-page home, root layout and `globals.css` (Tailwind + shadcn theme tokens). Legacy `/Projects`, `/Certifications` and `/Contact` redirect to home anchors (`next.config.ts`).
- `src/content/profile.ts` — all portfolio copy (hero, experience, projects, stack, certifications, socials).
- `src/components/` — `ui/` (hero), `sections/` (page sections), `motion/` (Reveal + MotionProvider).
- `src/lib/` — `cn` helper and contact form submission.
- `public/` — static files (CV and certification PDFs).

## Environment variables

The contact form posts to `${NEXT_PUBLIC_URL_BASE_CONTACT}/${NEXT_PUBLIC_ENDPOINT_CONTACT}`.
Create a `.env.local` (or `.env`) file with:

```bash
NEXT_PUBLIC_URL_BASE_CONTACT=
NEXT_PUBLIC_ENDPOINT_CONTACT=
```

> **Migration note:** these variables were previously named `VITE_URL_BASE_CONTACT` and
> `VITE_ENDPOINT_CONTACT` when the project used Vite. Rename them in any existing `.env`
> files and in your hosting provider's settings. `NEXT_PUBLIC_*` values are inlined at
> build time, so rebuild after changing them.
>
> 
