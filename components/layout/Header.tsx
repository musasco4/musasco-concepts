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
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scrolling while mobile menu is open
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

  // Close mobile menu with Escape
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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-all duration-300 ease-[var(--ease-standard)]",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[var(--shadow-card-sm)] border-b border-charcoal-100"
          : "bg-white"
      )}
    >
      {/* =========================================================
          DESKTOP HEADER
          ========================================================= */}
      <div className="hidden lg:block">
        <Container className="flex h-[72px] items-center gap-8">
          
          {/* Brand */}
          <Link
            href="/"
            aria-label="MUSASCO Home"
            className="shrink-0 font-display font-bold text-lg tracking-tight text-charcoal-900 whitespace-nowrap"
          >
            MUSASCO
          </Link>

          {/* Primary Navigation
              Moved closer to MUSASCO */}
          <nav
            aria-label="Primary"
            className="flex items-center gap-1 xl:gap-2 ml-2 shrink-0"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap",
                  "transition-colors duration-200",
                  isActive(link.href)
                    ? "text-emerald-600 bg-emerald-50"
                    : "text-charcoal-700 hover:text-emerald-600 hover:bg-charcoal-50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right-side actions
              ml-auto keeps these pushed to the right */}
          <div className="flex items-center gap-4 shrink-0 ml-auto">
            <Link
              href="/growth-audit"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700 hover:underline underline-offset-4 whitespace-nowrap transition-colors"
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
      </div>

      {/* =========================================================
          MOBILE HEADER
          ========================================================= */}
      <div className="lg:hidden px-4 pt-3 pb-1">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300",
            scrolled || mobileOpen
              ? "bg-charcoal-900/95 backdrop-blur-md shadow-lg border border-white/10"
              : "bg-charcoal-900/80 backdrop-blur-sm border border-white/5"
          )}
          style={{
            paddingTop:
              "max(0.625rem, env(safe-area-inset-top, 0px))",
          }}
        >
          {/* Mobile brand — text only */}
          <Link
            href="/"
            aria-label="MUSASCO Home"
            className="shrink-0 font-display font-bold text-sm tracking-tight whitespace-nowrap"
          >
            <span className="text-white">MUSASCO</span>
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            className="flex items-center justify-center size-10 rounded-full text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* =========================================================
          MOBILE FULL-SCREEN NAVIGATION
          ========================================================= */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden fixed inset-0 top-0 z-40 bg-charcoal-900 text-white overflow-y-auto"
          style={{
            paddingTop: "env(safe-area-inset-top, 0px)",
          }}
        >
          {/* Spacer for the mobile header */}
          <div className="h-[72px] shrink-0" />

          <Container className="py-8 flex flex-col gap-5">
            <p className="text-xs font-bold uppercase tracking-widest text-charcoal-500 mb-1">
              Navigation
            </p>

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
    </header>
  );
}