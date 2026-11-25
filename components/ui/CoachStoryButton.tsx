"use client";

import Icon from "@/components/ui/Icon";
import { coach } from "@/lib/content";
import { useLightbox } from "@/store/lightbox";

/** "Watch his story" when coach.storyVideo is set: plays it in the popup player. */
export default function CoachStoryButton() {
  const open = useLightbox((s) => s.open);
  return (
    <button type="button" className="btn-outline-light" onClick={() => open({ kind: "video", src: coach.storyVideo, title: "Vidyashankar Guru’s story" })}>
      <Icon name="play" className="h-4 w-4" />
      {coach.cta}
    </button>
  );
}
