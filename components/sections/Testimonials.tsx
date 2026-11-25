"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";

/**
 * Text testimonials (after the price, as the PDF asks). One quote at a time,
 * with the students' names underneath as tabs, matching the PDF's reference.
 */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const reduced = useReducedMotion();
  const items = testimonials.items;
  const t = items[index];
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const go = (next: number) => {
    const n = (next + items.length) % items.length;
    setDir(n > index ? 1 : -1);
    setIndex(n);
  };

  // Keep the active name tab in view on narrow screens. Only the tab row
  // scrolls sideways; the page itself never moves. Skipped on first render.
  const tabRow = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const row = tabRow.current;
    const tab = tabs.current[index];
    if (!row || !tab) return;
    const left = tab.offsetLeft - row.offsetLeft - (row.clientWidth - tab.clientWidth) / 2;
    row.scrollTo({ left, behavior: reduced ? "auto" : "smooth" });
  }, [index, reduced]);

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="section bg-white">
      <div className="container max-w-[880px]">
        <Reveal>
          <p className="eyebrow">{testimonials.eyebrow}</p>
          <h2 id="reviews-title" className="section-title">
            {testimonials.title}
          </h2>
          <p className="section-lead">{testimonials.lead}</p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="relative min-h-[300px] rounded-xl border border-paper-line bg-paper p-6 sm:min-h-[280px] sm:p-10" aria-live="polite">
            <Icon name="quote" className="h-9 w-9 text-gold" />
            <AnimatePresence mode="wait" initial={false} custom={dir}>
              <motion.figure
                key={t.name}
                custom={dir}
                initial={reduced ? { opacity: 0 } : { opacity: 0, x: dir * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, x: dir * -24 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <blockquote className="mt-4 text-body-lg text-ink">{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-paper-line pt-5">
                  <Image src={t.photo} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-night">{t.name}</p>
                    <p className="text-sm text-ink-faint">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <div ref={tabRow} className="relative flex flex-1 gap-2 overflow-x-auto pb-1 [scrollbar-width:none]" role="tablist" aria-label="Choose a testimonial">
              {items.map((it, i) => (
                <button
                  key={it.name}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  onClick={() => go(i)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    i === index ? "border-gold bg-gold text-night" : "border-paper-line bg-white text-ink-soft hover:border-ink-faint"
                  }`}
                >
                  {it.name.split(" ")[0]}
                </button>
              ))}
            </div>
            <div className="flex shrink-0 gap-2">
              <button type="button" onClick={() => go(index - 1)} className="grid h-11 w-11 place-items-center rounded-full border border-paper-line bg-white text-night hover:border-night" aria-label="Previous testimonial">
                <Icon name="arrow-left" className="h-5 w-5" />
              </button>
              <button type="button" onClick={() => go(index + 1)} className="grid h-11 w-11 place-items-center rounded-full border border-paper-line bg-white text-night hover:border-night" aria-label="Next testimonial">
                <Icon name="arrow-right" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
