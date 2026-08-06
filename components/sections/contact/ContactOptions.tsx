import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import type { ComponentType } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { contactOptions } from "@/lib/content/contact";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  mail: Mail,
  phone: Phone,
  "message-circle": MessageCircle,
  "map-pin": MapPin,
};

export function ContactOptions() {
  return (
    <Section background="subtle" ariaLabel="Contact Options">
      <Container>
        <RevealOnScroll className="text-center mb-10">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {contactOptions.headline}
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactOptions.options.map((option, i) => {
            const Icon = ICONS[option.icon];
            
            if (!Icon) return null;

            // Special handling for Phone/WhatsApp to show two buttons
            const isPhone = option.id === "phone";

            return (
              <RevealOnScroll key={option.id} delay={i * 0.1}>
                <Card variant="flat" hover className="p-6 h-full flex flex-col items-center text-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-charcoal-900">
                      {option.label}
                    </h3>
                    <p className="text-sm font-medium text-charcoal-700 mt-1">{option.value}</p>
                    {"description" in option && option.description && (
                      <p className="text-xs text-charcoal-500 mt-2 max-w-[200px] mx-auto">
                        {option.description}
                      </p>
                    )}
                  </div>
                  
                  {isPhone && "whatsappHref" in option ? (
                    <div className="flex gap-2 mt-2 w-full">
                      <Button href={option.href} variant="secondary" size="sm" className="flex-1">
                        Call Us
                      </Button>
                      <Button href={option.whatsappHref} variant="primary" size="sm" className="flex-1">
                        WhatsApp
                      </Button>
                    </div>
                  ) : option.href ? (
                    <a href={option.href} className="mt-2 text-sm font-medium text-emerald-600 hover:underline">
                      {option.id === "email" ? "Send Email" : "Get Directions"}
                    </a>
                  ) : null}
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}