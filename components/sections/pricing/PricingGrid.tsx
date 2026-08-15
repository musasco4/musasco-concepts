import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  pricingTiers,
  pricingDisclaimer,
} from "@/lib/content/pricing";
import { cn } from "@/lib/utils";

/**
 * Package-specific WhatsApp links.
 *
 * The message tells us exactly which package the visitor is asking about.
 */
const WHATSAPP_NUMBER = "2349056935204";

const TIER_WHATSAPP_MESSAGES: Record<string, string> = {
  audit:
    "Hi Musasco, I'm interested in the Growth Audit package. I'd like to learn more about getting started.",
  foundation:
    "Hi Musasco, I'm interested in the Growth Foundation package. I'd like to learn more about getting started.",
  accelerator:
    "Hi Musasco, I'm interested in the Growth Accelerator package. I'd like to learn more about getting started.",
  partner:
    "Hi Musasco, I'm interested in the Growth Partner package. I'd like to discuss how we can work together.",
};

function getWhatsAppHref(tierId: string) {
  const message =
    TIER_WHATSAPP_MESSAGES[tierId] ??
    "Hi Musasco, I'd like to learn more about your growth packages.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

/**
 * Strategic pricing anchors.
 *
 * These are deliberately separate from pricingTiers so we don't have to
 * modify the underlying pricing content just to display the comparison price.
 */
const ORIGINAL_PRICES: Record<string, string> = {
  audit: "$175",
  foundation: "$400",
  accelerator: "$750",
};

const CURRENT_PRICE_OVERRIDES: Record<string, string> = {
  audit: "$120",
};

export function PricingGrid() {
  return (
    <Section
      background="subtle"
      ariaLabel="Pricing Plans"
      className="py-16 lg:py-24"
    >
      <Container>
        {/* Section heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
              Investment
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-charcoal-600">
              Transparent starting points for your growth journey.
            </p>
          </RevealOnScroll>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {pricingTiers.map((tier, i) => {
            const originalPrice = ORIGINAL_PRICES[tier.id];

            const currentPrice =
              CURRENT_PRICE_OVERRIDES[tier.id] ?? tier.price;

            const ctaHref = getWhatsAppHref(tier.id);

            return (
              <RevealOnScroll
                key={tier.id}
                delay={i * 0.1}
                className="h-full"
              >
                <Card
                  variant={tier.highlighted ? "raised" : "flat"}
                  hover
                  className={cn(
                    "relative flex h-full min-h-[680px] flex-col p-8 transition-transform duration-300",
                    tier.highlighted &&
                      "z-10 border-2 border-emerald-600 bg-white shadow-xl lg:scale-105"
                  )}
                >
                  {/* Recommended badge */}
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge variant="solid">Recommended</Badge>
                    </div>
                  )}

                  {/* Package header */}
                  <div className="mb-6">
                    <h3 className="font-display text-xl font-bold text-charcoal-900">
                      {tier.name}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-charcoal-600">
                      {tier.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 min-h-[76px]">
                    {originalPrice && (
                      <div className="mb-1">
                        <span className="text-sm font-medium text-charcoal-400 line-through decoration-charcoal-400">
                          {originalPrice}
                        </span>
                      </div>
                    )}

                    <div className="flex items-baseline gap-2">
                      <span className="font-stat text-4xl font-bold tracking-tight text-charcoal-900">
                        {currentPrice}
                      </span>

                      {currentPrice !== "Custom" && (
                        <span className="text-sm font-medium text-charcoal-500">
                          starting
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mb-8 flex-1 space-y-4">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-700"
                      >
                        <Check
                          className="mt-0.5 size-5 shrink-0 text-emerald-600"
                          aria-hidden="true"
                        />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Optional note */}
                  {tier.note ? (
                    <div className="mb-6 min-h-[76px] rounded-lg border border-charcoal-100 bg-charcoal-50 p-4">
                      <p className="text-xs leading-relaxed text-charcoal-600">
                        {tier.note}
                      </p>
                    </div>
                  ) : (
                    /*
                     * Intentional empty space.
                     *
                     * This keeps the CTA aligned with the other cards even
                     * when a package doesn't have a note.
                     */
                    <div className="mb-6 min-h-[76px]" aria-hidden="true" />
                  )}

                  {/* CTA */}
                  <Button
                    href={ctaHref}
                    variant={tier.highlighted ? "primary" : "secondary"}
                    size="lg"
                    className="mt-auto w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tier.ctaLabel}
                  </Button>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Pricing disclaimer */}
        <RevealOnScroll
          delay={0.2}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="text-sm leading-relaxed text-charcoal-500">
            {pricingDisclaimer}
          </p>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}