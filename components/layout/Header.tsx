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

  // Detect scroll position.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock body scrolling while the mobile menu is open.
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Allow Escape to close the mobile menu.
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    const basePath = href.split("#")[0];

    return pathname.startsWith(basePath);
  };

  const isDark = !scrolled && !mobileOpen;

  return (
    <>
      {/* =========================================================
          DESKTOP HEADER
          ========================================================= */}
      <header
        className={cn(
          "hidden lg:block sticky top-0 z-50 w-full transition-all duration-300 ease-[var(--ease-standard)]",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[var(--shadow-card-sm)] border-b border-charcoal-100"
            : "bg-transparent"
        )}
      >
        <Container className="flex h-[72px] items-center justify-between gap-8">
          {/* Brand */}
          <Link
            href="/"
            className="shrink-0 font-display font-extrabold text-lg tracking-tight whitespace-nowrap transition-colors duration-300"
            aria-label="MUSASCO Home"
          >
            <span
              className={
                isDark ? "text-white" : "text-charcoal-900"
              }
            >
              MUSASCO
            </span>
          </Link>

          {/* Navigation */}
          <nav
            aria-label="Primary"
            className="flex items-center gap-1 xl:gap-2 shrink-0"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
                  isDark
                    ? isActive(link.href)
                      ? "text-emerald-400 bg-white/10"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                    : isActive(link.href)
                      ? "text-emerald-600 bg-emerald-50"
                      : "text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="flex items-center gap-3 shrink-0 whitespace-nowrap">
            <Link
              href="/growth-audit"
              className={cn(
                "text-sm font-medium hover:underline underline-offset-4 transition-colors",
                isDark
                  ? "text-emerald-400 hover:text-emerald-300"
                  : "text-emerald-600 hover:text-emerald-700"
              )}
            >
              Free Growth Audit
            </Link>

            <Button
              href="/pricing"
              size="default"
              className="whitespace-nowrap"
            >
              Build Your Growth System
            </Button>
          </div>
        </Container>
      </header>

      {/* =========================================================
          MOBILE HEADER
          Transparent outer wrapper + dark pill
          ========================================================= */}
      <div className="lg:hidden fixed inset-x-0 top-0 z-[60] pointer-events-none">
        <div
          className="px-4 pt-3 pb-1 pointer-events-auto"
          style={{
            paddingTop:
              "max(0.75rem, env(safe-area-inset-top, 0px))",
          }}
        >
          <div
            className={cn(
              "flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300",
              scrolled || mobileOpen
                ? "bg-charcoal-900/95 backdrop-blur-md shadow-lg border border-white/10"
                : "bg-charcoal-900/80 backdrop-blur-sm border border-white/5"
            )}
          >
            {/* Mobile Brand */}
            <Link
              href="/"
              className="shrink-0 font-display font-extrabold text-sm tracking-tight whitespace-nowrap"
              aria-label="MUSASCO Home"
            >
              <span className="text-white">MUSASCO</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="flex items-center justify-center size-10 rounded-full text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={
                mobileOpen ? "Close menu" : "Open menu"
              }
              onClick={() => setMobileOpen((value) => !value)}
            >
              {mobileOpen ? (
                <X
                  className="size-5"
                  aria-hidden="true"
                />
              ) : (
                <Menu
                  className="size-5"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Spacer for fixed mobile header */}
      <div
        className="lg:hidden h-[72px]"
        aria-hidden="true"
      />

      {/* =========================================================
          MOBILE FULL-SCREEN NAVIGATION
          ========================================================= */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden fixed inset-0 z-[50] bg-charcoal-900/95 backdrop-blur-sm text-white overflow-y-auto"
          style={{
            paddingTop:
              "env(safe-area-inset-top, 0px)",
          }}
          onClick={(event) => {
            /*
             * Clicking the actual overlay background closes
             * the menu. Clicking the navigation content does not.
             */
            if (event.target === event.currentTarget) {
              setMobileOpen(false);
            }
          }}
        >
          {/* Spacer for the header pill */}
          <div
            className="h-[72px] shrink-0"
            aria-hidden="true"
          />

          <Container className="py-8 flex flex-col gap-5">
            {/* Navigation Label */}
            <p className="text-xs font-bold uppercase tracking-widest text-charcoal-500 mb-1">
              Navigation
            </p>

            {/* Navigation Links */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-lg font-semibold py-3 border-b border-white/10 transition-colors",
                  isActive(link.href)
                    ? "text-emerald-400"
                    : "text-white hover:text-emerald-400"
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile CTAs */}
            <div className="mt-6 flex flex-col gap-4 pt-6 border-t border-white/20">
              <Button
                href="/pricing"
                variant="primary"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                Build Your Growth System
              </Button>

              <Link
                href="/growth-audit"
                onClick={() => setMobileOpen(false)}
                className="text-center text-sm font-medium text-emerald-300 hover:text-emerald-200 transition-colors py-2"
              >
                or start with a free Growth Audit
              </Link>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}