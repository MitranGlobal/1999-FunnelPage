"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";

/**
 * Slim enrol bar pinned to the bottom of the screen once the visitor has
 * scrolled past the hero. It steps aside while the price box or the final
 * call to action is on screen, so the page never shows two enrol buttons at once.
 */
export default function StickyBar() {
  const [pastHero, setPastHero] = useState(false);
  const [offerVisible, setOfferVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const hero = document.getElementById("top");
    const offers = ["price", "enrol"].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const seen = new Set<Element>();

    const heroObs = new IntersectionObserver(([e]) => setPastHero(!e.isIntersecting && e.boundingClientRect.top < 0), { threshold: 0 });
    const offerObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)));
        setOfferVisible(seen.size > 0);
      },
      { threshold: 0.15 },
    );
    if (hero) heroObs.observe(hero);
    offers.forEach((o) => offerObs.observe(o));
    return () => {
      heroObs.disconnect();
      offerObs.disconnect();
    };
  }, []);

  const show = pastHero && !offerVisible;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-40 border-t border-night-line bg-night/95 text-ivory backdrop-blur"
          initial={reduced ? { opacity: 0 } : { y: "100%" }}
          animate={reduced ? { opacity: 1 } : { y: 0 }}
          exit={reduced ? { opacity: 0 } : { y: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="container flex items-center justify-between gap-4 py-3">
            <div className="min-w-0">
              <p className="truncate font-bold">
                <span className="sm:hidden">{site.name}</span>
                <span className="hidden sm:inline">{site.fullName}</span>
              </p>
              <p className="hidden truncate text-sm text-ivory/70 sm:block">One-to-one guidance for children aged 11–17</p>
            </div>
            <a href={site.registerUrl} data-cta={site.leadGate ? "" : undefined} className="btn-primary min-h-[46px] shrink-0 whitespace-nowrap px-5 sm:px-7">
              Enrol now
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
