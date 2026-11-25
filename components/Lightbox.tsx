"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import { useLightbox } from "@/store/lightbox";

/** Popup player for student testimonial videos (hosted .mp4 or Google Drive) and the coach's story. */
export default function Lightbox() {
  const { content, close } = useLightbox();
  const reduced = useReducedMotion();
  const closeBtn = useRef<HTMLButtonElement>(null);
  const opener = useRef<Element | null>(null);

  useEffect(() => {
    if (!content) return;
    opener.current = document.activeElement;
    const site = document.getElementById("site");
    site?.setAttribute("inert", "");
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const t = window.setTimeout(() => closeBtn.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      site?.removeAttribute("inert");
      document.documentElement.style.overflow = prev;
      (opener.current as HTMLElement | null)?.focus?.({ preventScroll: true });
    };
  }, [content, close]);

  return (
    <AnimatePresence>
      {content && (
        <motion.div
          key="lightbox"
          className="fixed inset-0 z-[90] grid place-items-center bg-night/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => e.target === e.currentTarget && close()}
          role="dialog"
          aria-modal="true"
          aria-label={content.title}
        >
          <motion.div
            className="relative w-full max-w-4xl"
            initial={reduced ? false : { scale: 0.94, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={reduced ? undefined : { scale: 0.97, y: 6 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          >
            <button
              ref={closeBtn}
              type="button"
              onClick={close}
              className="absolute -top-12 right-0 inline-flex h-10 items-center gap-2 rounded-full px-3 text-sm font-semibold text-ivory hover:bg-white/10"
            >
              <Icon name="close" className="h-4 w-4" />
              Close
            </button>
            {content.kind === "video" ? (
              <video
                src={content.src}
                poster={content.poster}
                controls
                autoPlay
                playsInline
                controlsList="nodownload"
                className="aspect-video w-full rounded-xl bg-black"
              />
            ) : (
              <iframe
                src={`https://drive.google.com/file/d/${content.id}/preview`}
                title={content.title}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="aspect-video w-full rounded-xl bg-black"
              />
            )}
            <p className="mt-3 text-center text-sm text-ivory/75">{content.title}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
