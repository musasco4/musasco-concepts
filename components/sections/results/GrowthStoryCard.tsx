import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { GrowthStory } from "@/lib/content/results";

type GrowthStoryCardProps = {
  story: GrowthStory;
  index: number;
};

export function GrowthStoryCard({ story, index }: GrowthStoryCardProps) {
  return (
    <RevealOnScroll delay={index * 0.1} className="h-full">
      <article className="h-full flex flex-col w-full rounded-2xl border border-charcoal-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 min-w-0">
        
        {/* Header: Category, Name, Description */}
        <div className="mb-6 pb-6 border-b border-charcoal-100">
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2">
            {story.category}
          </p>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal-900 mb-3 leading-tight">
            {story.businessName}
          </h3>
          <p className="text-sm text-charcoal-600 leading-relaxed">
            {story.description}
          </p>
        </div>

        {/* Body: Challenge & Work */}
        <div className="space-y-6 mb-6 flex-1">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-charcoal-400 mb-2">
              The Challenge
            </h4>
            <p className="text-sm text-charcoal-700 leading-relaxed">
              {story.challenge}
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-charcoal-400 mb-2">
              What MUSASCO Did
            </h4>
            <ul className="space-y-1.5">
              {story.work.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-700">
                  <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer: Result & Highlights */}
        <div className="mt-auto pt-6 border-t border-charcoal-100">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-3">
            The Result
          </h4>
          <p className="text-sm text-charcoal-900 leading-relaxed font-medium mb-4">
            {story.result}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {story.resultHighlights.map((highlight) => (
              <span 
                key={highlight} 
                className="inline-flex items-center rounded-md bg-emerald-50 border border-emerald-100 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-emerald-700 uppercase tracking-wide"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* Case Study CTA - Only shown when caseStudyHref exists */}
          {story.caseStudyHref && (
            <Link 
              href={story.caseStudyHref}
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors group mt-2"
            >
              Read Case Study
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          )}
        </div>

      </article>
    </RevealOnScroll>
  );
}