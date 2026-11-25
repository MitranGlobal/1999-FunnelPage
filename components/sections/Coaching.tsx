import Image from "next/image";
import Cta from "@/components/ui/Cta";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { coaching } from "@/lib/content";

/** Section 5 – Personalised coaching: the three sessions as a simple timeline. */
export default function Coaching() {
  return (
    <section id="sessions" aria-labelledby="sessions-title" className="section bg-paper">
      <div className="container">
        <Reveal>
          <SectionHeading id="sessions-title" eyebrow={coaching.eyebrow} title={coaching.title} lead={coaching.lead} />
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <Reveal as="ol" stagger className="relative space-y-8 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-0.5 before:bg-gold/60">
              {coaching.sessions.map((s, i) => (
                <li key={s.label} className="relative flex gap-5">
                  <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-night font-display text-lg text-gold">{i + 1}</span>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-night">
                      {s.label} – <span className="text-gold-text">{s.who}</span>
                    </h3>
                    <p className="mt-1 text-body-lg text-ink-soft">{s.body}</p>
                  </div>
                </li>
              ))}
            </Reveal>

            <Reveal className="mt-8 flex items-center gap-3 border-y border-paper-line py-4 font-bold text-night">
              <Icon name="clock" className="h-5 w-5 text-gold-deep" />
              {coaching.meta}
            </Reveal>

            <Reveal className="mt-6 border-l-4 border-gold bg-white px-5 py-4">
              <h3 className="text-lg font-bold text-night">{coaching.report.title}</h3>
              <p className="mt-1 text-ink-soft">{coaching.report.body}</p>
            </Reveal>
          </div>

          <Reveal className="relative hidden min-h-[380px] overflow-hidden rounded-xl lg:block" delay={0.1}>
            <Image src={coaching.image.src} alt={coaching.image.alt} fill sizes="460px" className="object-cover" />
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <Cta label={coaching.cta} note />
        </Reveal>
      </div>
    </section>
  );
}
