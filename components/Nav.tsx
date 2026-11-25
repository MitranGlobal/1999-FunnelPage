"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import Logo from "@/components/ui/Logo";
import { formatINR, nav, site } from "@/lib/content";

/**
 * Top bar: logo, section links and the enrol button. It sits on the navy hero
 * and turns white once the visitor scrolls. On phones the links move into a
 * drawer.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const light = scrolled || open;

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${light ? "border-b border-paper-line bg-white/95 backdrop-blur" : "bg-transparent"}`}
      initial={reduced ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container flex h-16 items-center justify-between gap-4 sm:h-[72px]">
        <Logo onDark={!light} className="h-8 w-auto sm:h-9" />

        <nav aria-label="Sections" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className={`text-[15px] font-medium transition-colors ${light ? "text-ink-soft hover:text-night" : "text-ivory/80 hover:text-ivory"}`}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.registerUrl} data-cta={site.leadGate ? "" : undefined} className="btn-primary hidden min-h-[44px] px-5 text-[15px] sm:inline-flex">
            Enrol – {formatINR(site.price)}
          </a>
          <button
            type="button"
            className={`grid h-11 w-11 place-items-center rounded-lg lg:hidden ${light ? "text-night hover:bg-paper-deep" : "text-ivory hover:bg-white/10"}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Sections"
            className="overflow-hidden border-t border-paper-line bg-white lg:hidden"
            initial={reduced ? { opacity: 0 } : { height: 0 }}
            animate={reduced ? { opacity: 1 } : { height: "auto" }}
            exit={reduced ? { opacity: 0 } : { height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ul className="container rule-list py-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={() => setOpen(false)} className="block py-4 text-lg font-medium text-night">
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="py-4">
                <a href={site.registerUrl} data-cta={site.leadGate ? "" : undefined} onClick={() => setOpen(false)} className="btn-primary w-full">
                  Enrol now – {formatINR(site.price)}
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
