import Image from "next/image";
import Cta from "@/components/ui/Cta";
import Reveal from "@/components/ui/Reveal";
import TickList from "@/components/ui/TickList";
import CoachStoryButton from "@/components/ui/CoachStoryButton";
import { coach } from "@/lib/content";

/** Section 7 – Meet the coach behind the programme. */
export default function Coach() {
  return (
    <section id="coach" aria-labelledby="coach-title" className="section bg-night text-ivory">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-xl bg-black">
              <Image src={coach.photo.src} alt={coach.photo.alt} fill sizes="(min-width: 1024px) 440px, 100vw" className="object-cover" />
            </div>
            <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.12em] text-ivory/60">{coach.recognitionTitle}</h3>
            <ul className="mt-3 space-y-2.5 text-[15px] text-ivory/85">
              {coach.recognition.map((r) => (
                <li key={r} className="border-l-2 border-gold pl-3">
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <p className="eyebrow-light">{coach.eyebrow}</p>
            <h2 id="coach-title" className="mt-3 font-display text-display-lg text-ivory">
              {coach.name}
            </h2>
            <p className="mt-2 font-semibold text-gold">{coach.role}</p>
            <p className="mt-5 text-body-lg text-ivory/85">{coach.bio}</p>
            <TickList items={coach.facts} tone="light" className="mt-6" />

            <div className="mt-10 border-t border-night-line pt-8">
              <h3 className="font-display text-display-md text-ivory">{coach.storyTitle}</h3>
              <div className="mt-4 space-y-4 text-ivory/80">
                {coach.story.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
                <p className="font-semibold text-gold">{coach.storyClose}</p>
              </div>
            </div>

            <div className="mt-8">
              {coach.storyVideo ? <CoachStoryButton /> : <Cta label={coach.cta} href="#video" variant="outline-light" noteTone="light" />}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
