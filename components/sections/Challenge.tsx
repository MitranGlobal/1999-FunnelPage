import Image from "next/image";
import Cta from "@/components/ui/Cta";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { challenge } from "@/lib/content";

/** Section 2 – The challenge. */
export default function Challenge() {
  return (
    <section id="challenge" aria-labelledby="challenge-title" className="section bg-white">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <Reveal>
            <SectionHeading id="challenge-title" eyebrow={challenge.eyebrow} title={challenge.title} lead={challenge.lead} />
            <ul className="rule-list mt-8 border-y border-paper-line">
              {challenge.signs.map((s, i) => (
                <li key={s} className="flex items-baseline gap-4 py-4">
                  <span className="w-7 shrink-0 font-display text-lg text-gold-text">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-body-lg font-medium text-ink">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="relative hidden min-h-[420px] overflow-hidden rounded-xl lg:block" delay={0.1}>
            <Image src={challenge.image.src} alt={challenge.image.alt} fill sizes="480px" className="object-cover" />
          </Reveal>
        </div>

        <Reveal className="mt-14 sm:mt-16">
          <h3 className="font-display text-display-md text-night">{challenge.quotesTitle}</h3>
          <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {challenge.quotes.map((q) => (
              <figure key={q.title} className="border-l-4 border-gold pl-5">
                <figcaption className="font-bold text-night">{q.title}</figcaption>
                <p className="mt-1.5 text-ink-soft">{q.text}</p>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14 rounded-xl bg-paper-deep px-6 py-8 sm:px-10 sm:py-10">
          <p className="max-w-3xl font-display text-display-md text-night">{challenge.closing}</p>
          <Cta label={challenge.cta} className="mt-7" />
        </Reveal>
      </div>
    </section>
  );
}
