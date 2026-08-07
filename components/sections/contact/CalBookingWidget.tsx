"use client";

import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { scheduling } from "@/lib/content/contact";

const CAL_URL = "https://cal.com/musasco-rgnwjo";

export function CalBookingWidget() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Dynamically load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://assetss.calendly.com/assets/external/widget.js"; // Note: Cal.com uses similar embed logic, but for cal.com specifically:
    // Actually, for cal.com (not calendly), the embed is usually via iframe or their specific npm package.
    // To avoid adding a dependency (@calcom/embed-react) which might bloat the bundle or cause SSR issues if not careful,
    // and since the user asked for "Embed directly", the most robust zero-dependency way is an iframe with the embed URL.
    // Cal.com provides an embed URL format: https://cal.com/username?embed=true
    
    // Let's use the iframe approach for stability and zero new deps, styled to look premium.
    setLoaded(true); 
  }, []);

  if (error) {
    return (
      <div className="flex h-full min-h-[500px] flex-col items-center justify-center rounded-xl border border-charcoal-200 bg-charcoal-50 p-8 text-center">
        <Calendar className="mb-4 size-12 text-charcoal-300" />
        <p className="mb-6 text-charcoal-600">Unable to load the scheduling widget.</p>
        <Button href={CAL_URL} target="_blank" rel="noopener noreferrer" variant="secondary">
          Build Your Growth System
        </Button>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[600px] w-full overflow-hidden rounded-xl border border-charcoal-200 bg-white shadow-sm">
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
          <p className="mt-4 text-sm text-charcoal-500">{scheduling.placeholderText}</p>
        </div>
      )}
      
      {/* Cal.com Embed Iframe */}
      <iframe
        src={`${CAL_URL}?embed=true&theme=light&brandColor=0e6b4e`}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Schedule a Growth Call"
        className="absolute inset-0 h-full w-full"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
      
      {/* Fallback button overlay if iframe fails to load content but doesn't throw error immediately */}
      <div className="pointer-events-none absolute bottom-4 right-4 opacity-0 transition-opacity hover:opacity-100 focus-within:opacity-100">
         <Button href={CAL_URL} target="_blank" rel="noopener noreferrer" size="sm" variant="secondary" className="pointer-events-auto bg-white/90 backdrop-blur shadow-sm">
            Open in new tab
         </Button>
      </div>
    </div>
  );
}