import Cta from "@/components/ui/Cta";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { included } from "@/lib/content";

/** Section 6 – What's included, as one plain list. */
export default function Included() {
  return (
    <section id="included" aria-labelledby="included-title" className="section bg-white">
      <div className="container max-w-[880px]">
        <Reveal>
          <SectionHeading id="included-title" eyebrow={included.eyebrow} title={included.title} align="center" />
        </Reveal>

        <Reveal as="ul" stagger className="rule-list mt-10 border-y border-paper-line">
          {included.items.map((item) => (
            <li key={item.title} className="flex gap-4 py-6">
              <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-leaf/10 text-leaf" aria-hidden="true">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-night">
                  {item.bonus && <span className="mr-2 rounded bg-gold px-2 py-0.5 align-middle text-xs font-extrabold uppercase tracking-wider text-night">Bonus</span>}
                  {item.title}
                </h3>
                {item.body && <p className="mt-1 text-body-lg text-ink-soft">{item.body}</p>}
                {item.courses && (
                  <ul className="mt-3 space-y-3">
                    {item.courses.map((c) => (
                      <li key={c.name} className="flex flex-col border-l-2 border-gold/70 pl-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                        <span className="font-semibold text-ink">{c.name}</span>
                        <span className="text-[15px] text-ink-faint">{c.meta}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </Reveal>

        <Reveal className="mt-10">
          <Cta label={included.cta} priceInButton note align="center" />
        </Reveal>
      </div>
    </section>
  );
}
