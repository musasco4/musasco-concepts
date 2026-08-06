"use client";

import { cn } from "@/lib/utils";
import type { Currency } from "@/lib/content/pricing";

export function CurrencyToggle({
  currency,
  onChange,
}: {
  currency: Currency;
  onChange: (c: Currency) => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-charcoal-200 bg-white p-1 shadow-sm">
      <button
        type="button"
        onClick={() => onChange("NGN")}
        className={cn(
          "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
          currency === "NGN"
            ? "bg-charcoal-900 text-white shadow-sm"
            : "text-charcoal-600 hover:text-charcoal-900"
        )}
      >
        NGN
      </button>
      <button
        type="button"
        onClick={() => onChange("USD")}
        className={cn(
          "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
          currency === "USD"
            ? "bg-charcoal-900 text-white shadow-sm"
            : "text-charcoal-600 hover:text-charcoal-900"
        )}
      >
        USD
      </button>
    </div>
  );
}