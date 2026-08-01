import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--hp-border)] py-12">
      <Container className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <div className="flex items-center gap-2.5">
            <FooterMark />
            <span className="font-display text-[1.05rem] font-medium text-white">
              Hyperplane
            </span>
          </div>
          <p className="text-sm text-[var(--hp-accent-secondary)]/80">
            {site.tagline}
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-[var(--hp-text-secondary)]">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="hover:text-white">
            {site.email}
          </a>
        </nav>
      </Container>

      <Container className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--hp-border)] pt-6 text-xs text-[var(--hp-text-tertiary)] md:flex-row">
        <p>© {new Date().getFullYear()} Hyperplane. All rights reserved.</p>
        <p>Built with engineering, not templates.</p>
      </Container>
    </footer>
  );
}

function FooterMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="footmark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <path
        d="M6 3v18M6 3l12 8-12 8M18 3v18"
        stroke="url(#footmark)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
