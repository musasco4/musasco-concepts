"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "The Growth System™", href: "/growth-system" },
  { name: "Industries", href: "/industries" },
  { name: "Results", href: "/results" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Pricing", href: "/pricing" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
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
        {/* Left Group: Logo + Primary Nav */}
        <div className="flex items-center gap-8 lg:gap-12">
          <Link href="/" className="font-display font-extrabold text-lg tracking-tight shrink-0">
            MUSASCO
          </Link>

          {/* Desktop nav - Moved left */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors whitespace-nowrap",
                  isActive(link.href) 
                    ? "text-emerald-600" 
                    : "text-charcoal-900 hover:text-emerald-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Group: CTAs */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link href="/contact" className="text-sm font-medium text-emerald-600 hover:underline underline-offset-4 whitespace-nowrap">
            or start with a free Growth Audit
          </Link>
          <Button href="/contact" size="default" className="whitespace-nowrap">
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
              <Link href="/contact" className="text-center text-sm font-medium text-emerald-300">
                or start with a free Growth Audit
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}