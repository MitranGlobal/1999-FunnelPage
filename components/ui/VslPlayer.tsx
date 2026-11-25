"use client";

import { useRef, useState, type ReactNode } from "react";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/content";
import { hasSignedUp } from "@/lib/leadStorage";
import { useGate } from "@/store/gate";

type Phase = "locked" | "tap" | "playing" | "error";

/**
 * The VSL, behind the sign-up popup.
 *
 * Until the visitor signs up, the video has no source at all, only its still,
 * so it can't be played from the page. The play button and the "Watch now!"
 * button both open the popup; once it's submitted the source is attached and
 * the video starts. Visitors who already signed up on this device play it
 * straight away.
 */
export default function VslPlayer({ backdrop, id }: { backdrop?: ReactNode; id?: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("locked");
  const resumeAt = useRef(0);
  const openFor = useGate((s) => s.openFor);

  // Attach the source and play. Done directly on the element (not through
  // React state) so it happens inside the visitor's click, which is what lets
  // the browser start a video with sound.
  const play = () => {
    const v = video.current;
    if (!v) return;
    if (!v.getAttribute("src") || v.error) {
      // First play, or retrying after the connection dropped: (re)attach the
      // source and pick up where the visitor left off.
      const from = resumeAt.current;
      v.src = site.vsl.src;
      v.preload = "auto";
      if (from > 0) v.addEventListener("loadedmetadata", () => (v.currentTime = from), { once: true });
    }
    v.controls = true;
    setPhase("playing");
    v.play().catch(() => {
      v.controls = false;
      // Either the video couldn't load (offer a retry), or the browser wanted
      // one more tap because the save took a while (it's unlocked now, so the
      // play button just plays).
      setPhase(v.error ? "error" : "tap");
    });
  };

  const request = (opener: HTMLElement) => {
    if (!site.leadGate || phase !== "locked" || hasSignedUp()) {
      play();
      return;
    }
    openFor(null, { onDone: play, opener });
  };

  const onWatchNow = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = frame.current?.getBoundingClientRect();
    if (rect && (rect.top < 0 || rect.bottom > window.innerHeight)) {
      frame.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    request(e.currentTarget);
  };

  return (
    <div>
      <div ref={frame} id={id} className="relative aspect-video w-full scroll-mt-24 overflow-hidden rounded-xl bg-night shadow-soft ring-1 ring-night/10">
        {backdrop}
        <video
          ref={video}
          poster={site.vsl.poster}
          preload="none"
          playsInline
          controlsList="nodownload"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
          onTimeUpdate={(e) => (resumeAt.current = e.currentTarget.currentTime)}
          onError={(e) => {
            // Network dropped or the file couldn't load. Offer a retry that resumes.
            if (!e.currentTarget.getAttribute("src")) return;
            e.currentTarget.controls = false;
            setPhase("error");
          }}
          aria-label={site.vsl.title}
          className="absolute inset-0 h-full w-full bg-transparent object-cover"
        />

        {phase !== "playing" && (
          <button
            type="button"
            onClick={(e) => request(e.currentTarget)}
            className="group absolute inset-0 grid place-items-center bg-night/30 transition-colors hover:bg-night/15 focus-visible:outline-none"
            aria-label={phase === "error" ? "Connection lost. Retry the video" : `Play the video: ${site.vsl.title}`}
          >
            <span className="relative grid h-16 w-16 place-items-center rounded-full bg-gold text-night shadow-[0_0_0_10px_rgba(242,201,76,0.25)] transition-transform duration-300 group-hover:scale-105 group-focus-visible:ring-4 group-focus-visible:ring-ivory sm:h-20 sm:w-20">
              {/* Soft pulse so the play button reads as the thing to press. */}
              <Icon name="play" className="relative ml-1 h-7 w-7 sm:h-9 sm:w-9" />
            </span>
            {phase === "error" && (
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-night/85 px-4 py-2 text-sm font-medium text-ivory sm:bottom-6">
                Connection lost. Tap to try again.
              </span>
            )}
          </button>
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <button type="button" onClick={onWatchNow} className="btn-outline">
          <Icon name="play" className="h-4 w-4" />
          {site.vsl.cta}
        </button>
      </div>
    </div>
  );
}
