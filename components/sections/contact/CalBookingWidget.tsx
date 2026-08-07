"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { scheduling } from "@/lib/content/contact";

const CAL_URL = "https://cal.com/musasco-rgnwjo";

export function CalBookingWidget() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex h-full min-h-[500px] flex-col items-center justify-center rounded-xl border border-charcoal-200 bg-charcoal-50 p-8 text-center">
        <Calendar className="mb-4 size-12 text-charcoal-300" />

        <p className="mb-6 text-charcoal-600">
          Unable to load the scheduling widget.
        </p>

        <Button
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
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

          <p className="mt-4 text-sm text-charcoal-500">
            {scheduling.placeholderText}
          </p>
        </div>
      )}

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

      <div className="pointer-events-none absolute bottom-4 right-4 opacity-0 transition-opacity hover:opacity-100 focus-within:opacity-100">
        <Button
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          variant="secondary"
          className="pointer-events-auto bg-white/90 shadow-sm backdrop-blur"
        >
          Open in new tab
        </Button>
      </div>
    </div>
  );
}