"use client";

import Link, { LinkProps } from "next/link";
import { footer, siteConfig } from "@/lib/content";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-bg-primary">
      <Container>
        <div className="py-12 lg:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="text-xl font-semibold tracking-tight text-white hover:text-accent-purple transition-colors"
              >
                {siteConfig.name}
              </Link>
              <p className="mt-3 text-sm text-text-secondary">
                {footer.tagline}
              </p>
              <p className="mt-4 text-sm text-text-muted">
                {footer.madeIn}
              </p>
            </div>

            {/* Research Column */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                {footer.columns.research.title}
              </h3>
              <ul className="space-y-3">
                {footer.columns.research.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href as LinkProps<string>["href"]}
                      className="text-sm text-text-secondary hover:text-accent-purple transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                {footer.columns.product.title}
              </h3>
              <ul className="space-y-3">
                {footer.columns.product.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href as LinkProps<string>["href"]}
                      className="text-sm text-text-secondary hover:text-accent-purple transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                {footer.columns.contact.title}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${footer.columns.contact.email}`}
                    className="text-sm text-text-secondary hover:text-accent-purple transition-colors"
                  >
                    {footer.columns.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${footer.columns.contact.phone.replace(/\s/g, "")}`}
                    className="text-sm text-text-secondary hover:text-accent-purple transition-colors"
                  >
                    {footer.columns.contact.phone}
                  </a>
                </li>
                <li className="text-sm text-text-muted">
                  {footer.columns.contact.location}
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/[0.08]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-text-muted text-center md:text-left">
                {footer.copyright}
              </p>
              <p className="text-xs text-text-muted text-center md:text-right">
                {footer.patentsLine}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
