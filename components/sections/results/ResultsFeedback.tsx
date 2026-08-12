import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { resultsFeedback } from "@/lib/content/results";

export function ResultsFeedback() {
  return (
    <section className="w-full bg-charcoal-900 text-white py-16 lg:py-24">
      <Container className="max-w-3xl mx-auto text-center">
        <RevealOnScroll>
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {resultsFeedback.headline}
          </h2>
          <p className="mt-4 text-charcoal-400 leading-relaxed text-lg">
            {resultsFeedback.subheadline}
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}