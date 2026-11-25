import Cta from "@/components/ui/Cta";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { solution } from "@/lib/content";

/** Section 3 – The solution: coaching plus the three courses. */
export default function Solution() {
  return (
    <section id="programme" aria-labelledby="programme-title" className="section bg-paper">
      <div className="container">
        <Reveal>
          <SectionHeading id="programme-title" eyebrow={solution.eyebrow} title={solution.title} lead={solution.lead} />
        </Reveal>

        <Reveal as="ol" stagger className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {solution.parts.map((p, i) => (
            <li key={p.title} className="flex gap-5 border-t-2 border-night/80 py-6">
              <span className="w-7 shrink-0 font-display text-3xl leading-none text-gold-deep">{i + 1}</span>
              <div>
                <h3 className="text-xl font-bold text-night">{p.title}</h3>
                <p className="mt-1.5 text-ink-soft">{p.body}</p>
              </div>
            </li>
          ))}
        </Reveal>

        <Reveal className="mt-8">
          <Cta label={solution.cta} href="#included" />
        </Reveal>
      </div>
    </section>
  );
}
