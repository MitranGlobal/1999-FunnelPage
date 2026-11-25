import Icon from "@/components/ui/Icon";

/** A plain list with a tick in front of each line. */
export default function TickList({ items, tone = "dark", className = "" }: { items: string[]; tone?: "dark" | "light"; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={`mt-[3px] grid h-6 w-6 shrink-0 place-items-center rounded-full ${tone === "light" ? "bg-gold text-night" : "bg-leaf/10 text-leaf"}`}
            aria-hidden="true"
          >
            <Icon name="check" className="h-3.5 w-3.5" />
          </span>
          <span className={tone === "light" ? "text-ivory/90" : "text-ink"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
