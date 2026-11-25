"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import { useLightbox } from "@/store/lightbox";

type Student = { name: string; grade: string; caption: string; driveId: string; src: string; poster: string };

/**
 * A student's testimonial video: still frame with a play button, then name,
 * grade and a one-line summary. Tapping it opens the popup player. The still
 * comes from Cloudinary (or Drive for Drive-hosted videos); if it can't load, a plain navy frame with
 * the student's initials is shown instead.
 */
export default function StudentVideo({ student, size = "lg" }: { student: Student; size?: "lg" | "sm" }) {
  const open = useLightbox((s) => s.open);
  const [thumbFailed, setThumbFailed] = useState(false);
  const img = useRef<HTMLImageElement>(null);
  // An image that failed before React hydrated never fires onError, so check once on mount.
  useEffect(() => {
    const el = img.current;
    if (el && el.complete && el.naturalWidth === 0) setThumbFailed(true);
  }, []);
  const title = student.grade ? `${student.name}, ${student.grade}` : student.name;
  const initials = student.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  const play = () => (student.src ? open({ kind: "video", src: student.src, title, poster: student.poster || undefined }) : open({ kind: "drive", id: student.driveId, title }));

  return (
    <div>
      <button type="button" onClick={play} className="group relative block aspect-video w-full overflow-hidden rounded-lg bg-night" aria-label={`Play ${title}’s video`}>
        {!thumbFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={img}
            src={student.poster || `https://drive.google.com/thumbnail?id=${student.driveId}&sz=w800`}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setThumbFailed(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center font-display text-4xl text-ivory/25" aria-hidden="true">
            {initials}
          </span>
        )}
        <span className="absolute inset-0 bg-night/20 transition-colors group-hover:bg-night/5" aria-hidden="true" />
        <span
          className={`absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-night shadow-[0_0_0_8px_rgba(242,201,76,0.25)] transition-transform group-hover:scale-105 ${size === "lg" ? "h-14 w-14" : "h-11 w-11"}`}
          aria-hidden="true"
        >
          <Icon name="play" className={`${size === "lg" ? "h-6 w-6" : "h-5 w-5"} ml-0.5`} />
        </span>
      </button>
      <p className={`mt-3 font-bold text-night ${size === "lg" ? "text-lg" : "text-base"}`}>
        {student.name}
        {student.grade && <span className="font-semibold text-gold-text"> · {student.grade}</span>}
      </p>
      {student.caption && <p className={`mt-1 text-ink-soft ${size === "sm" ? "text-[15px] leading-relaxed" : ""}`}>{student.caption}</p>}
    </div>
  );
}
