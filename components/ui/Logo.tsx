import Image from "next/image";
import logo from "@/public/mitran-global-logo.png";
import logoLight from "@/public/mitran-global-logo-light.png";

/** MiTran Global logo. Use `onDark` on navy surfaces. */
export default function Logo({ className = "h-9 w-auto sm:h-10", onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <a href="#top" className="inline-flex shrink-0 items-center" aria-label="MiTran Global, back to top">
      <Image src={onDark ? logoLight : logo} alt="MiTran Global" priority className={className} sizes="180px" />
    </a>
  );
}
