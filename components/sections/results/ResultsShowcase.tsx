import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { growthStories, resultsShowcase } from "@/lib/content/results";
import { GrowthStoryCard } from "./GrowthStoryCard";

export function ResultsShowcase() {
  return (
    <Section background="primary" ariaLabel="Selected Results">
      <Container className="max-w-5xl mx-auto">
        <div className="text-center mb-12 lg:mb-16 max-w-2xl mx-auto">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
              {resultsShowcase.headline}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-charcoal-600 leading-relaxed">
              {resultsShowcase.subheadline}
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {growthStories.map((story, i) => (
            <GrowthStoryCard key={story.id} story={story} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}