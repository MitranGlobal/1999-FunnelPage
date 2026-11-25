import Icon from "@/components/ui/Icon";
import { formatINR, site } from "@/lib/content";

type CtaProps = {
  label: string;
  /** Defaults to the checkout link. Pass "#section" for an on-page link. */
  href?: string;
  variant?: "primary" | "outline" | "outline-light";
  /** Small line under the button: price and "one-time payment". */
  note?: boolean | string;
  noteTone?: "dark" | "light";
  className?: string;
  align?: "left" | "center";
};

/**
 * Every Register / Enrol button on the page. Checkout links carry `data-cta`
 * so the sign-up popup (components/LeadGate.tsx) can step in first when
 * `site.leadGate` is on. Without JavaScript they are plain links.
 */
export default function Cta({ label, href, variant = "primary", note = false, noteTone = "dark", className = "", align = "left" }: CtaProps) {
  const target = href ?? site.registerUrl;
  const toCheckout = !target.startsWith("#");
  const cls = variant === "primary" ? "btn-primary" : variant === "outline" ? "btn-outline" : "btn-outline-light";
  const noteText = typeof note === "string" ? note : `${formatINR(site.price)} · One-time payment · Sessions online`;

  return (
    <div className={`flex flex-col gap-2.5 ${align === "center" ? "items-center text-center" : "items-start"} ${className}`}>
      <a href={target} data-cta={toCheckout && site.leadGate ? "" : undefined} className={`${cls} w-full sm:w-auto`}>
        {label}
        <Icon name="arrow-right" className="h-4 w-4" />
      </a>
      {note && <p className={`text-sm ${noteTone === "light" ? "text-ivory/70" : "text-ink-faint"}`}>{noteText}</p>}
    </div>
  );
}
