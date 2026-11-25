import Cta from "@/components/ui/Cta";
import Reveal from "@/components/ui/Reveal";
import PriceTag from "@/components/ui/PriceTag";
import { finalCta } from "@/lib/content";

/** Section 10 – Final CTA. */
export default function FinalCta() {
  return (
    <section id="enrol" aria-labelledby="enrol-title" className="section bg-night text-ivory">
      <Reveal className="container max-w-read text-center">
        <h2 id="enrol-title" className="font-display text-display-lg text-ivory">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-prose text-body-lg text-ivory/80">{finalCta.lead}</p>

        <div className="mt-10 border-t border-night-line pt-10">
          <p className="font-display text-display-md text-gold">{finalCta.sub}</p>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-ivory/70">{finalCta.priceLabel}</p>
          <PriceTag size="lg" tone="light" save className="mt-2 justify-center" />
          <Cta label={finalCta.cta} align="center" className="mt-7" note="One-time payment · Sessions conducted online" noteTone="light" />
        </div>

        <p className="mt-12 italic text-ivory/60">{finalCta.tagline}</p>
      </Reveal>
    </section>
  );
}
