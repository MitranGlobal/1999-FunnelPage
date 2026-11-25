import Image from "next/image";
import Cta from "@/components/ui/Cta";
import Icon from "@/components/ui/Icon";
import TickList from "@/components/ui/TickList";
import Logo from "@/components/ui/Logo";
import { hero } from "@/lib/content";

/** Section 1 – Hero. Layout follows the reference image in the instructions PDF. */
export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative bg-night pb-14 pt-6 text-ivory sm:pb-20 sm:pt-8">
      <div className="container">
        <div className="flex justify-center">
          <Logo onDark className="h-10 w-auto sm:h-12" />
        </div>
        <div className="mx-auto mt-8 max-w-4xl text-center sm:mt-10">
          <p className="inline-block rounded-full border border-gold/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-gold sm:text-sm">{hero.audience}</p>
          <h1 id="hero-title" className="mt-6 font-display text-display-xl text-ivory">
            {hero.headline} <span className="text-gold">{hero.highlight}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-body-lg font-semibold text-ivory">{hero.sub}</p>
          <p className="mx-auto mt-3 max-w-2xl text-body text-ivory/75">
            {hero.intro.before}
            <strong className="font-semibold text-gold">{hero.intro.name}</strong>
            {hero.intro.after}
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-6 sm:mt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          <div className="relative min-h-[260px] overflow-hidden rounded-xl sm:min-h-[340px]">
            <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-[50%_30%]" />
          </div>

          <div className="flex flex-col rounded-xl border border-night-line bg-night-soft p-6 sm:p-8">
            <h2 className="font-display text-display-md text-gold">{hero.benefitsTitle}</h2>
            <TickList items={hero.benefits} tone="light" className="mt-5 border-t border-night-line pt-5" />

            <h3 className="mt-7 text-sm font-bold uppercase tracking-[0.12em] text-ivory/60">{hero.highlightsTitle}</h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3">
              {hero.highlights.map((h) => (
                <li key={h.label} className="flex items-center gap-2.5 text-[15px] font-semibold text-ivory sm:text-base">
                  <Icon name={h.icon} className="h-5 w-5 shrink-0 text-gold" />
                  {h.label}
                </li>
              ))}
            </ul>

            <Cta label={hero.cta} note noteTone="light" className="mt-8" />
          </div>
        </div>

        <div className="mt-10 border-t border-night-line pt-8 sm:mt-12">
          <p className="text-center text-sm font-bold uppercase tracking-[0.14em] text-ivory/60">{hero.trustTitle}</p>
          <dl className="mt-5 grid grid-cols-3 divide-x divide-night-line">
            {hero.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse items-center px-2 text-center">
                <dt className="mt-1 text-xs font-semibold text-gold sm:text-sm">{s.label}</dt>
                <dd className="font-display text-3xl text-ivory sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
