"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Mail, Phone, X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/config/contact";

const CONTACT_ACTIONS = [
  {
    label: "WhatsApp",
    href: CONTACT.whatsapp.href,
    icon: MessageCircle,
    color: "bg-emerald-600 text-white",
  },
  {
    label: "Email",
    href: CONTACT.email.mailto,
    icon: Mail,
    color: "bg-charcoal-800 text-white border border-charcoal-700",
  },
  {
    label: "Call",
    href: CONTACT.phone.tel,
    icon: Phone,
    color: "bg-charcoal-800 text-white border border-charcoal-700",
  },
];

export function FloatingContactMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <div
      className="lg:hidden fixed z-50 flex flex-col items-end gap-3"
      style={{
        bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
        right: "calc(1.25rem + env(safe-area-inset-right, 0px))",
      }}
    >
      {/* Expanded Actions */}
      <div
        className={cn(
          "flex flex-col items-end gap-3 origin-bottom-right",
          reducedMotion
            ? isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            : "",
          !reducedMotion && "transition-all duration-300 ease-[var(--ease-standard)]",
          !reducedMotion && (isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-75 translate-y-4 pointer-events-none"
          )
        )}
        aria-hidden={!isOpen}
      >
        {CONTACT_ACTIONS.map((action, i) => (
          <div
            key={action.label}
            className="flex items-center gap-3"
            style={
              !reducedMotion
                ? {
                    transitionDelay: isOpen ? `${i * 50}ms` : "0ms",
                    transitionDuration: "200ms",
                    transitionProperty: "opacity, transform",
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateX(0)" : "translateX(10px)",
                  }
                : undefined
            }
          >
            <span className="text-xs font-bold text-charcoal-900 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow-sm whitespace-nowrap">
              {action.label}
            </span>
            <Link
              href={action.href}
              aria-label={action.label}
              className={cn(
                "flex items-center justify-center size-12 rounded-full shadow-lg transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
                action.color
              )}
              tabIndex={isOpen ? 0 : -1}
            >
              <action.icon className="size-5" aria-hidden="true" />
            </Link>
          </div>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
        className={cn(
          "flex items-center justify-center size-14 rounded-full shadow-xl transition-all duration-300 ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
          isOpen
            ? "bg-charcoal-900 text-white rotate-45"
            : "bg-emerald-600 text-white hover:bg-emerald-700 hover:scale-105 active:scale-95"
        )}
      >
        {isOpen ? (
          <X className="size-6" aria-hidden="true" />
        ) : (
          <Plus className="size-7" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}