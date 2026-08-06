"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

/**
 * StickyMobileCta — Design System §5 "Sticky CTA (Floating)", mobile bar.
 * Appears once the Hero has scrolled out of view (Homepage Spec v2 §12),
 * not on a fixed pixel threshold, since Hero height varies by viewport.
 * Desktop uses a separate floating bubble — see FloatingDesktopCta.
 */
export function StickyMobileCta({ heroId = "hero" }: { heroId?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroId]);

  if (!visible) return null;

  return (
    <div
      className="lg:hidden fixed inset-x-0 bottom-0 z-30 flex items-stretch gap-2 border-t border-charcoal-200 bg-white/95 backdrop-blur-sm p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      role="region"
      aria-label="Quick actions"
    >
      <Button href="/contact" className="flex-1">
        Book Consultation
      </Button>
      <Link
        href="https://wa.me/000000000000"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center size-12 shrink-0 rounded-md border border-charcoal-200"
      >
        <MessageCircle className="size-5 text-emerald-600" aria-hidden="true" />
      </Link>
    </div>
  );
}
