import Cta from "@/components/ui/Cta";
import Reveal from "@/components/ui/Reveal";
import TickList from "@/components/ui/TickList";
import { formatINR, price, saving, site } from "@/lib/content";

/** Section 8 – Programme price. One plain offer box. */
export default function Price() {
  return (
    <section id="price" aria-labelledby="price-title" className="section bg-paper">
      <div className="container">
        <Reveal className="mx-auto max-w-read text-center">
          <p className="eyebrow">{price.eyebrow}</p>
          <h2 id="price-title" className="section-title">
            {price.title}
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-[560px] rounded-xl border-2 border-night bg-white p-6 shadow-soft sm:p-10">
          <p className="text-center font-display text-xl text-night">{price.name}</p>
          <div className="mt-5 flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1">
            <span className="font-display text-6xl text-night">{formatINR(site.price)}</span>
            <s className="text-2xl text-ink-faint" aria-label={`Was ${formatINR(site.was)}`}>
              {formatINR(site.was)}
            </s>
          </div>
          <p className="mt-3 text-center">
            <span className="inline-block rounded bg-gold px-3 py-1 text-sm font-extrabold uppercase tracking-wider text-night">Save {formatINR(saving)}</span>
          </p>

          <div className="mt-8 border-t border-paper-line pt-6">
            <p className="font-bold text-night">{price.includesTitle}</p>
            <TickList items={price.includes} className="mt-4" />
          </div>

          <div className="mt-8 border-t border-paper-line pt-6">
            <p className="mb-3 text-center text-sm font-bold uppercase tracking-[0.12em] text-ink-faint">{price.paymentNote}:</p>
            <Cta label={price.cta} align="center" className="[&_a]:w-full" note="Sessions conducted online" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
