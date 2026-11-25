import type { ReactNode } from "react";

/** Eyebrow, title and lead for a section. Keeps every heading identical. */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  id?: string;
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-read text-center" : "max-w-read"}>
      {eyebrow && <p className={tone === "light" ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>}
      <h2 id={id} className={`section-title ${tone === "light" ? "!text-ivory" : ""}`}>
        {title}
      </h2>
      {lead && <p className={`section-lead ${center ? "mx-auto" : ""} ${tone === "light" ? "!text-ivory/80" : ""}`}>{lead}</p>}
    </div>
  );
}
