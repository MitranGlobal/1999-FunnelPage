import { create } from "zustand";

/**
 * The popup video player. `video` plays a hosted .mp4; `drive` plays a Google
 * Drive file through Drive's own embedded player.
 */
type LightboxContent = { kind: "video"; src: string; title: string; poster?: string } | { kind: "drive"; id: string; title: string } | null;

type LightboxState = {
  content: LightboxContent;
  open: (content: NonNullable<LightboxContent>) => void;
  close: () => void;
};

export const useLightbox = create<LightboxState>((set) => ({
  content: null,
  open: (content) => set({ content }),
  close: () => set({ content: null }),
}));
