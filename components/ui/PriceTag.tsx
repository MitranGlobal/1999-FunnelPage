import { formatINR, saving, site } from "@/lib/content";

/**
 * ₹1,999 with ₹4,999 struck through beside it — used everywhere the price
 * appears, so the saving is always visible.
 */
export default function PriceTag({ size = "md", tone = "dark", save = false, className = "" }: { size?: "sm" | "md" | "lg" | "xl"; tone?: "dark" | "light"; save?: boolean; className?: string }) {
  const now = { sm: "text-base", md: "text-xl", lg: "text-3xl", xl: "text-6xl" }[size];
  const was = { sm: "text-sm", md: "text-base", lg: "text-xl", xl: "text-2xl" }[size];
  return (
    <span className={`inline-flex flex-wrap items-baseline gap-x-2 gap-y-1 ${className}`}>
      <s className={`${was} font-medium ${tone === "light" ? "text-ivory/55" : "text-ink-faint"}`} aria-label={`Was ${formatINR(site.was)}`}>
        {formatINR(site.was)}
      </s>
      <strong className={`${now} font-display font-normal leading-none ${tone === "light" ? "text-gold" : "text-night"}`} aria-label={`Now ${formatINR(site.price)}`}>
        {formatINR(site.price)}
      </strong>
      {save && <span className="self-center rounded bg-gold px-2 py-0.5 text-xs font-extrabold uppercase tracking-wider text-night">Save {formatINR(saving)}</span>}
    </span>
  );
}
