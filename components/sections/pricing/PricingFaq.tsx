"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { pricingFaq } from "@/lib/content/pricing";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section background="subtle" ariaLabel="Pricing FAQ">
      <Container narrow>
        <RevealOnScroll className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-charcoal-900">
            {pricingFaq.headline}
          </h2>
        </RevealOnScroll>
        
        <div className="space-y-4">
          {pricingFaq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div 
                  className={cn(
                    "rounded-lg border bg-white transition-all duration-200",
                    isOpen ? "border-emerald-200 shadow-sm ring-1 ring-emerald-100" : "border-charcoal-200"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between p-6 text-left font-medium text-charcoal-900 hover:text-emerald-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-lg"
                  >
                    <span>{item.question}</span>
                    <Plus 
                      className={cn(
                        "size-5 shrink-0 text-charcoal-400 transition-transform duration-300",
                        isOpen && "rotate-45 text-emerald-600"
                      )} 
                      aria-hidden="true" 
                    />
                  </button>
                  
                  <div 
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-sm text-charcoal-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}