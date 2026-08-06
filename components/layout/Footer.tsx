import Link from "next/link";
import { MessageCircle, Mail, Phone, Contact as ContactIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

/**
 * Lucide has no brand icons (flagged in Design System §14 for WhatsApp;
 * applies equally to Instagram/LinkedIn here) — minimal custom SVGs,
 * matching Lucide's 1.5px stroke convention, rather than pulling in an
 * icon-font dependency for two glyphs.
 */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.75" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-4a2 2 0 0 1 4 0v4" />
      <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" />
    </svg>
  );
}

/**
 * Footer — expanded this round per the explicit approved link list:
 * Solutions, Industries, Results, About, Pricing, Resources, Contact,
 * Instagram, LinkedIn, WhatsApp, Email, Phone, Privacy, Terms.
 *
 * Reorganized from 5 columns into 4 + a connect row, since the approved
 * list is flatter than the previous column structure — "Solutions" here
 * is a nav label pointing to the Growth System engines, not marketing
 * copy, so it isn't the same buzzword problem flagged against body copy
 * in an earlier round (noted in the Round 2 review as a conscious,
 * flagged choice, not an oversight).
 */
const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Solutions",
    links: [
      { label: "Attract Engine", href: "/growth-system#attract" },
      { label: "Convert Engine", href: "/growth-system#convert" },
      { label: "Scale Engine", href: "/growth-system#scale" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "Results", href: "/results" },
      { label: "Portfolio", href: "/case-studies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Growth Guides", href: "/resources/guides" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

const CONNECT = [
  { label: "Contact", href: "/contact", icon: ContactIcon },
  { label: "WhatsApp", href: "https://wa.me/000000000000", icon: MessageCircle },
  { label: "Email", href: "mailto:hello@musascoconcepts.com", icon: Mail },
  { label: "Phone", href: "tel:+2340000000000", icon: Phone },
  { label: "Instagram", href: "https://instagram.com/musascoconcepts", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com/company/musascoconcepts", icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal-950)] text-white">
      <Container className="py-12 lg:py-24">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:gap-x-8">
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-charcoal-400 font-body">
                {col.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-charcoal-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Connect" className="col-span-2 md:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-charcoal-400 font-body">
              Connect
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {CONNECT.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm text-charcoal-300 hover:text-white transition-colors"
                  >
                    {item.icon ? <item.icon className="size-4" aria-hidden="true" /> : null}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <p>© {new Date().getFullYear()} MUSASCO Concepts. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
