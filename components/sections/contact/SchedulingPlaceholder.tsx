import { Calendar } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { scheduling } from "@/lib/content/contact";

export function SchedulingPlaceholder() {
  return (
    <Section background="subtle" ariaLabel="Schedule a Growth call">
      <Container narrow>
        <RevealOnScroll>
          <Card
            variant="flat"
            className="p-8 sm:p-12 text-center border-dashed border-2 border-charcoal-300 bg-charcoal-50/50"
          >
            <div className="flex flex-col items-center">
              <span className="mb-6 flex size-16 items-center justify-center rounded-full bg-white text-charcoal-400 shadow-sm">
                <Calendar className="size-8" aria-hidden="true" />
              </span>

              <h2 className="font-display text-2xl font-bold tracking-tight text-charcoal-900">
                {scheduling.headline}
              </h2>

              <p className="mt-3 max-w-md text-charcoal-600">
                {scheduling.subheadline}
              </p>

              {/* TODO: Replace this placeholder with Calendly or Cal.com embed */}

              <div className="mt-8 flex h-64 w-full items-center justify-center rounded-lg border border-charcoal-200 bg-white text-sm italic text-charcoal-400">
                {scheduling.placeholderText}
              </div>

              <Button disabled size="lg" className="mt-8">
                {scheduling.ctaLabel}
              </Button>
            </div>
          </Card>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}