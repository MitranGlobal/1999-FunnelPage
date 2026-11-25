import Icon from "@/components/ui/Icon";
import { formatINR, site } from "@/lib/content";

type CtaProps = {
  label: string;
  /** Defaults to the checkout link. Pass "#section" for an on-page link. */
  href?: string;
  variant?: "primary" | "outline" | "outline-light";
  /** Show "~~₹4,999~~ ₹1,999" inside the button, after the label. */
  priceInButton?: boolean;
  /** Short line under the button (no price — the price is shown only in a few deliberate places). */
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
export default function Cta({ label, href, variant = "primary", priceInButton = false, note = false, noteTone = "dark", className = "", align = "left" }: CtaProps) {
  const target = href ?? site.registerUrl;
  const toCheckout = !target.startsWith("#");
  const cls = variant === "primary" ? "btn-primary" : variant === "outline" ? "btn-outline" : "btn-outline-light";
  const noteText = typeof note === "string" ? note : "One-time payment · Sessions online";

  return (
    <div className={`flex flex-col gap-2.5 ${align === "center" ? "items-center text-center" : "items-start"} ${className}`}>
      <a href={target} data-cta={toCheckout && site.leadGate ? "" : undefined} className={`${cls} w-full sm:w-auto`}>
        <span>
          {label}
          {priceInButton && (
            <>
              {" – "}
              <s className="font-semibold opacity-60">{formatINR(site.was)}</s> {formatINR(site.price)}
            </>
          )}
        </span>
        <Icon name="arrow-right" className="h-4 w-4 shrink-0" />
      </a>
      {note && (
        <p className={`flex flex-wrap items-baseline gap-x-2 text-sm ${align === "center" ? "justify-center" : ""} ${noteTone === "light" ? "text-ivory/70" : "text-ink-faint"}`}>
          <span>{noteText}</span>
        </p>
      )}
    </div>
  );
}
