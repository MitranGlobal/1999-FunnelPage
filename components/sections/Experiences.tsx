import Cta from "@/components/ui/Cta";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import StudentVideo from "@/components/ui/StudentVideo";
import VslPlayer from "@/components/ui/VslPlayer";
import { experiences } from "@/lib/content";

/** Section 4 – Student experiences: the featured VSL, then the student testimonial videos. */
export default function Experiences() {
  return (
    <section id="stories" aria-labelledby="stories-title" className="section bg-white">
      <div className="container">
        <Reveal>
          <SectionHeading id="stories-title" eyebrow={experiences.eyebrow} title={experiences.title} lead={experiences.lead} align="center" />
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-3xl">
          <VslPlayer id="video" />
          <p className="mt-4 text-center text-sm font-semibold text-ink-faint">{experiences.videoLabel}</p>
        </Reveal>

        <Reveal className="mt-16 border-t border-paper-line pt-12">
          <h3 className="text-center font-display text-display-md text-night">{experiences.studentsTitle}</h3>
        </Reveal>
        <Reveal as="ul" stagger className="mt-8 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {experiences.students.map((s) => (
            <li key={s.driveId}>
              <StudentVideo student={s} />
            </li>
          ))}
        </Reveal>

        <Reveal className="mt-12">
          <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-ink-faint">{experiences.moreTitle}</h4>
        </Reveal>
        <Reveal as="ul" stagger className="mt-4 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">
          {experiences.more.map((s) => (
            <li key={s.driveId}>
              <StudentVideo student={s} size="sm" />
            </li>
          ))}
        </Reveal>

        <Reveal className="mt-14">
          <Cta label={experiences.cta} note align="center" />
        </Reveal>
      </div>
    </section>
  );
}
