import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { zeeChilledPartyCaseStudy } from "@/lib/content/caseStudies/zeeChilledParty";

export function ZeeChilledPartyLesson() {
  const { lesson, ownerFeedback, next } = zeeChilledPartyCaseStudy;

  return (
    <section className="w-full bg-charcoal-900 text-white py-16 lg:py-24">
      <Container className="max-w-3xl mx-auto">
        
        {/* The Takeaway */}
        <RevealOnScroll className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4">
            {lesson.eyebrow}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6">
            {lesson.title}
          </h2>
          <p className="text-lg text-charcoal-400 leading-relaxed">
            {lesson.description}
          </p>
        </RevealOnScroll>

        {/* Beyond the Numbers (Owner Feedback) - No quotes, no italic */}
        <RevealOnScroll delay={0.1} className="mb-16">
          <div className="rounded-2xl border border-charcoal-700 bg-charcoal-800 p-8 text-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal-500 mb-3">
              {ownerFeedback.title}
            </h3>
            <p className="text-lg text-charcoal-300 leading-relaxed">
              {ownerFeedback.description}
            </p>
          </div>
        </RevealOnScroll>

        {/* Next CTA */}
        <RevealOnScroll delay={0.2} className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4">
            {next.eyebrow}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
            {next.title}
          </h2>
          <p className="text-charcoal-400 leading-relaxed mb-8 max-w-xl mx-auto">
            {next.description}
          </p>
          <Button href={next.ctaHref} size="lg" variant="primary">
            {next.ctaLabel}
          </Button>
        </RevealOnScroll>

      </Container>
    </section>
  );
}