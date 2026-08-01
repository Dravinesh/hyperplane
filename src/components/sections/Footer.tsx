import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/constants/site";
import Link from "next/link";
import { HyperplaneLogo } from "@/components/ui/HyperplaneLogo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--hp-border)] py-14">
      <Container className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Link href="/" className="flex items-center gap-3">
            <HyperplaneLogo variant="full" size="md" showTagline={true} />
          </Link>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-[var(--hp-text-secondary)]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="transition-colors duration-200 hover:text-white"
          >
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
