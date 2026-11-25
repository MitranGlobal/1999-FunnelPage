import Logo from "@/components/ui/Logo";
import { footer, nav, site } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-night-line bg-night pb-28 pt-10 text-ivory sm:pb-24">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Logo onDark className="h-9 w-auto" />
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-ivory/75">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-gold">
                {n.label}
              </a>
            ))}
            <a href="#price" className="hover:text-gold">
              Price
            </a>
          </nav>
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ivory/55">{footer.disclaimer}</p>
        <p className="mt-3 text-sm text-ivory/55">
          © {year} {site.by}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
