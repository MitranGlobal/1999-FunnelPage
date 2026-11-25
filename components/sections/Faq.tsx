import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { faq } from "@/lib/content";

/** Section 9 – FAQ. Native <details>, so it works without JavaScript. */
export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section bg-paper">
      <div className="container max-w-[880px]">
        <Reveal>
          <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.title} />
        </Reveal>
        <Reveal as="div" className="rule-list mt-8 border-y border-paper-line">
          {faq.items.map((item, i) => (
            <details key={item.q} className="group" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-bold text-night [&::-webkit-details-marker]:hidden">
                {item.q}
                <Icon name="chevron-down" className="mt-1 h-5 w-5 shrink-0 text-gold-deep transition-transform group-open:rotate-180" />
              </summary>
              <p className="-mt-1 pb-6 pr-10 text-body-lg text-ink-soft">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
