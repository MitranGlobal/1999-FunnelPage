# Positivity Hub – ₹1,999 funnel page

Single-page sales page for **MiTran Global Positivity Hub** (one-to-one programme for children aged 11–17).
Section order and copy follow the brief *“Landing page - DP Mitran Global”* (Sections 1–10).

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS v3 — design tokens in `tailwind.config.ts`
- Framer Motion — nav, mobile drawer, testimonials, lightbox, sticky enrol bar
- GSAP + ScrollTrigger — scroll reveals (`components/ui/Reveal.tsx`)
- Zustand — lightbox state (`store/lightbox.ts`) and sign-up popup state (`store/gate.ts`)
- Vercel — deployment target

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run lint
npm run typecheck
```

## Editing content

All copy, prices, links and videos live in **`lib/content.ts`**, in page order.

| What | Where in `lib/content.ts` |
| --- | --- |
| Checkout link used by every Register / Enrol button | `site.registerUrl` |
| Price / strike-through price | `site.price`, `site.was` |
| Sign-up popup before checkout and before the VSL plays | `site.leadGate` (`true` / `false`) |
| VSL (from the Positivity Hub site) | `site.vsl` |
| Student testimonial videos (Section 4) | `experiences.students`, `experiences.more` |
| "Watch his story" video | `coach.storyVideo` (empty = scrolls to the VSL) |
| Text testimonials (after the price) | `testimonials.items` |

### Student videos

All eight testimonial videos live in the Cloudinary folder **Student Testimonials** (cloud `twteccae`).
The page plays a 720p H.264 copy of each (`c_limit,w_1280,vc_h264,q_auto`), 3–6 MB per video, which plays in every browser.
To add a video: upload it to that folder, then add an entry with its `src` / `poster` URLs in `experiences` (same pattern as the others).

## Sign-ups

When `site.leadGate` is on, CTAs open a short popup (child's name, parent's name, mobile, email).
Details are validated and posted by `app/api/leads/route.ts` to the ClarityConvert "Contact Form" (`lib/clarity.ts`), then the visitor continues to checkout.
Visitors who already signed up on that browser go straight through.

## Deploy to Vercel

Import this repository at vercel.com/new. Defaults work as-is (Framework: Next.js). No environment variables are required; see `.env.example` to point sign-ups at a different ClarityConvert form.
