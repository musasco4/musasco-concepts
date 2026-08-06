import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { pricingTiers, pricingDisclaimer } from "@/lib/content/pricing";
import { cn } from "@/lib/utils";

export function PricingGrid() {
  return (
    <Section background="subtle" ariaLabel="Pricing Plans" className="py-16 lg:py-24">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-charcoal-900">
              Investment
            </h2>
            <p className="mt-4 text-charcoal-600 max-w-2xl text-lg">
              Transparent starting points for your growth journey.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
          {pricingTiers.map((tier, i) => (
            <RevealOnScroll key={tier.id} delay={i * 0.1}>
              <Card
                variant={tier.highlighted ? "raised" : "flat"}
                hover
                className={cn(
                  "relative p-8 h-full flex flex-col transition-transform duration-300",
                  tier.highlighted && "border-2 border-emerald-600 shadow-xl lg:scale-105 z-10 bg-white"
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="solid">Recommended</Badge>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-charcoal-900">{tier.name}</h3>
                  <p className="mt-3 text-sm text-charcoal-600 min-h-[48px] leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-charcoal-900 font-stat tracking-tight">
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-charcoal-500 text-sm ml-2 font-medium">starting</span>
                  )}
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-charcoal-700 leading-relaxed">
                      <Check className="size-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {tier.note && (
                  <div className="mb-6 p-4 rounded-lg bg-charcoal-50 border border-charcoal-100">
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      {tier.note}
                    </p>
                  </div>
                )}

                <Button
                  href="/contact"
                  variant={tier.highlighted ? "primary" : "secondary"}
                  size="lg"
                  className="w-full"
                >
                  {tier.ctaLabel}
                </Button>
              </Card>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.2} className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-sm text-charcoal-500 leading-relaxed">
            {pricingDisclaimer}
          </p>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}