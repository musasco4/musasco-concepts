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
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
    const basePath = href.split("#")[0];

    if (basePath === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(basePath);
  };

  const heroHeader = !scrolled;

  return (
    <>
      {/* =========================================================
          DESKTOP HEADER
          ========================================================= */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 hidden w-full lg:block",
          "transition-all duration-300",
          heroHeader
            ? "bg-transparent"
            : "border-b border-charcoal-100 bg-white/95 shadow-[var(--shadow-card-sm)] backdrop-blur-md"
        )}
      >
        <Container>
          <div
            className="
              grid
              h-[76px]
              grid-cols-[auto_minmax(0,1fr)_auto]
              items-center
              gap-6
              xl:gap-8
            "
          >
            {/* =====================================================
                OFFICIAL LOGO
                ===================================================== */}
            <Link
              href="/"
              aria-label="Musasco Home"
              className="flex shrink-0 items-center"
            >
              {/* Official full logo — never recreate the wordmark */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  heroHeader
                    ? "/m-logo-color.svg"
                    : "/m-logo-mix.svg"
                }
                alt="Musasco"
                width={220}
                height={52}
                className="
                  block
                  h-[42px]
                  w-auto
                  max-w-[220px]
                  object-contain
                "
              />
            </Link>

            {/* =====================================================
                NAVIGATION
                ===================================================== */}
            <nav
              aria-label="Primary navigation"
              className="min-w-0"
            >
              <div
                className="
                  flex
                  items-center
                  justify-start
                  gap-0.5
                  xl:gap-1
                "
              >
                {NAV_LINKS.map((link) => {
                  const active = isActive(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "whitespace-nowrap rounded-md",
                        "px-2.5 py-2 xl:px-3",
                        "text-[13px] font-medium",
                        "transition-colors duration-200",
                        heroHeader
                          ? active
                            ? "bg-white/10 text-white"
                            : "text-white/85 hover:bg-white/10 hover:text-white"
                          : active
                            ? "bg-emerald-50 text-emerald-700"
                            : "text-charcoal-600 hover:bg-charcoal-50 hover:text-charcoal-900"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* =====================================================
                ACTIONS
                ===================================================== */}
            <div className="flex shrink-0 items-center gap-3">
              <Link
                href="/growth-audit"
                className={cn(
                  "whitespace-nowrap",
                  "text-[13px] font-semibold",
                  "transition-colors duration-200",
                  heroHeader
                    ? "text-emerald-300 hover:text-white"
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
          </div>
        </Container>
      </header>

      {/* =========================================================
          MOBILE HEADER
          ========================================================= */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] lg:hidden">
        <div
          className="pointer-events-auto px-4 pb-1 pt-3"
          style={{
            paddingTop:
              "max(0.75rem, env(safe-area-inset-top, 0px))",
          }}
        >
          <div
            className={cn(
              "flex items-center justify-between",
              "rounded-full px-5 py-2.5",
              "border border-white/10",
              "transition-all duration-300",
              scrolled || mobileOpen
                ? "bg-charcoal-900/95 shadow-lg backdrop-blur-md"
                : "bg-charcoal-900/80 backdrop-blur-sm"
            )}
          >
            {/* Official mobile mark */}
            <Link
              href="/"
              aria-label="Musasco Home"
              className="flex shrink-0 items-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/m-mark-light.svg"
                alt="Musasco"
                width={34}
                height={34}
                className="block h-7 w-7 object-contain"
              />
            </Link>

            {/* Menu button */}
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              onClick={() =>
                setMobileOpen((value) => !value)
              }
              className="
                flex
                size-10
                items-center
                justify-center
                rounded-full
                text-white
                transition-colors
                hover:bg-white/10
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-500
              "
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

      {/* Mobile header spacer */}
      <div
        className="h-[72px] lg:hidden"
        aria-hidden="true"
      />

      {/* =========================================================
          MOBILE FULL-SCREEN NAVIGATION
          ========================================================= */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="
            fixed
            inset-0
            z-[50]
            overflow-y-auto
            bg-charcoal-900/95
            text-white
            backdrop-blur-sm
            lg:hidden
          "
          style={{
            paddingTop:
              "env(safe-area-inset-top, 0px)",
          }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="min-h-full"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className="h-[72px]" />

            <Container className="flex flex-col gap-5 py-8">
              <div className="mb-1">
                {/* Official full logo inside menu */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/m-logo-dark.svg"
                  alt="Musasco"
                  width={190}
                  height={46}
                  className="h-9 w-auto"
                />
              </div>

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-charcoal-500
                "
              >
                Navigation
              </p>

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "border-b border-white/10 py-3",
                    "text-lg font-semibold",
                    "transition-colors",
                    isActive(link.href)
                      ? "text-emerald-400"
                      : "text-white hover:text-emerald-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <div
                className="
                  mt-6
                  flex
                  flex-col
                  gap-4
                  border-t
                  border-white/20
                  pt-6
                "
              >
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
                  className="
                    py-2
                    text-center
                    text-sm
                    font-medium
                    text-emerald-300
                    transition-colors
                    hover:text-emerald-200
                  "
                >
                  or start with a free Growth Audit
                </Link>
              </div>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}