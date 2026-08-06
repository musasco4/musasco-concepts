"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const ENGINES = [
  { name: "Attract", href: "/growth-system#attract", blurb: "Meta & Google Advertising" },
  { name: "Convert", href: "/growth-system#convert", blurb: "Landing Pages, CRO, Website" },
  { name: "Scale", href: "/growth-system#scale", blurb: "Growth Strategy & Optimization" },
];

const NAV_LINKS = [
  { name: "The Growth System™", href: "/growth-system" },
  { name: "Industries", href: "/industries" },
  { name: "Results", href: "/results" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Pricing", href: "/pricing" },
];

/**
 * Header — Design System §5 "Navigation" + Homepage Spec v2 §5/§7.
 *
 * - Sticky, condenses after 80px scroll (Design System §5 spec values).
 * - "How We Help" mega-menu opens on hover (desktop, 100ms delay) or
 *   click/tap; closes on Escape, outside click, or blur — Design System
 *   §5 accessibility requirement.
 * - CTA cluster: one Primary ("Build your Growth System") + one
 *   Tertiary text link ("or start with a free Growth Audit") — the
 *   Hick's Law rationale from the Strategic Review, unchanged by the
 *   Hero/Final CTA button upgrade in Homepage Spec v2 Finding #10 (that
 *   upgrade applies to Hero/Final CTA only, not the persistent header).
 * - Active State: Links highlight in Emerald-600 when the user is on
 *   the corresponding route.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega menu on Escape from anywhere in the header
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Helper to check if a link is active
  const isActive = (href: string) => {
    // Exact match for root, startsWith for others
    if (href === "/") return pathname === "/";
    // Handle hash links like /growth-system#attract by checking the base path
    const basePath = href.split("#")[0];
    return pathname.startsWith(basePath);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-[height,box-shadow,background-color] duration-200 ease-[var(--ease-standard)]",
        scrolled ? "h-16 bg-white shadow-[var(--shadow-card-sm)]" : "h-[88px] bg-white/95 backdrop-blur-sm"
      )}
    >
      <Container className="flex h-full items-center justify-between gap-6">
        <Link href="/" className="font-display font-extrabold text-lg tracking-tight shrink-0">
          MUSASCO
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors",
                // Highlight "How We Help" if any engine path is active
                ENGINES.some(e => isActive(e.href)) || isActive("/growth-system") 
                  ? "text-emerald-600" 
                  : "text-charcoal-900 hover:text-emerald-600"
              )}
              aria-expanded={megaOpen}
              aria-haspopup="true"
              onClick={() => setMegaOpen((v) => !v)}
            >
              How We Help
              <ChevronDown className="size-4" aria-hidden="true" />
            </button>
            {megaOpen ? (
              <div
                className="absolute left-1/2 top-full mt-2 w-[420px] -translate-x-1/2 rounded-lg border border-charcoal-100 bg-white p-6 shadow-[var(--shadow-card-lg)]"
                role="menu"
              >
                <div className="grid grid-cols-3 gap-4">
                  {ENGINES.map((engine) => (
                    <Link
                      key={engine.name}
                      href={engine.href}
                      role="menuitem"
                      className={cn(
                        "block rounded-md p-2 focus-visible:bg-charcoal-50",
                        isActive(engine.href) ? "bg-emerald-50" : "hover:bg-charcoal-50"
                      )}
                    >
                      <span className={cn(
                        "block text-sm font-semibold",
                        isActive(engine.href) ? "text-emerald-700" : "text-charcoal-900"
                      )}>
                        {engine.name}
                      </span>
                      <span className="block text-xs text-charcoal-600 mt-1">{engine.blurb}</span>
                    </Link>
                  ))}
                </div>
                <p className="mt-4 border-t border-charcoal-100 pt-3 text-xs text-charcoal-500">
                  Every engine is powered by Creative Production →
                </p>
              </div>
            ) : null}
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isActive(link.href) 
                  ? "text-emerald-600" 
                  : "text-charcoal-900 hover:text-emerald-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA cluster (desktop) */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link href="/audit" className="text-sm font-medium text-emerald-600 hover:underline underline-offset-4">
            or start with a free Growth Audit
          </Link>
          <Button href="/contact" size="default">
            Build Your Growth System
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center size-11 -mr-2"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </Container>

      {/* Mobile full-screen overlay */}
      {mobileOpen ? (
        <div id="mobile-nav" className="lg:hidden fixed inset-0 top-16 z-30 bg-charcoal-900 text-white overflow-y-auto">
          <Container className="py-8 flex flex-col gap-6">
            <details className="group">
              <summary className="flex items-center justify-between text-base font-medium cursor-pointer list-none">
                How We Help
                <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="mt-4 pl-4 flex flex-col gap-4">
                {ENGINES.map((engine) => (
                  <Link 
                    key={engine.name} 
                    href={engine.href} 
                    className={cn(
                      "text-sm",
                      isActive(engine.href) ? "text-emerald-400 font-semibold" : "text-charcoal-200"
                    )}
                  >
                    {engine.name} — {engine.blurb}
                  </Link>
                ))}
              </div>
            </details>
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={cn(
                  "text-base font-medium",
                  isActive(link.href) ? "text-emerald-400" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-4 border-t border-white/20 pt-6">
              <Button href="/contact" variant="primary" className="w-full">
                Build Your Growth System
              </Button>
              <Link href="/audit" className="text-center text-sm font-medium text-emerald-300">
                or start with a free Growth Audit
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}