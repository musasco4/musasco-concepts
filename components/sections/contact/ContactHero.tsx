import { Container } from "@/components/ui/Container";
import { contactHero } from "@/lib/content/contact";

export function ContactHero() {
  return (
    <section id="contact-hero" aria-label="Contact introduction" className="bg-charcoal-900 text-white overflow-hidden">
      <Container className="py-16 lg:py-24 text-center max-w-3xl mx-auto">
        <p className="font-body text-sm font-bold tracking-wide text-emerald-400 uppercase">
          {contactHero.eyebrow}
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {contactHero.headline}
        </h1>
        <p className="mt-6 text-lg text-charcoal-200 sm:text-xl">
          {contactHero.subheadline}
        </p>
        <p className="mt-4 text-sm text-charcoal-400">
          {contactHero.trustMicrocopy}
        </p>
      </Container>
    </section>
  );
}