import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Carousel } from "@/components/ui/Carousel";

import {
  PORTFOLIO_SHOWCASE,
  caseStudyPreviews,
  type PortfolioItem,
} from "@/lib/content/homepage";

/**
 * Individual portfolio card
 *
 * This component is intentionally defensive because the homepage content
 * may contain portfolio items from an older data structure.
 */
function PortfolioCard({ item }: { item: PortfolioItem }) {
  const portfolioItem = item as PortfolioItem & {
    id?: string;
    businessName?: string;
    category?: string;
    headline?: string;
    description?: string;
    highlights?: string[];
    caseStudyHref?: string;
    imageSrc?: string;
    imageAlt?: string;

    // Legacy fields
    src?: string;
    alt?: string;
    industry?: string;
    challenge?: string;
    solution?: string;
    outcome?: string;
  };

  const imageSrc = portfolioItem.imageSrc ?? portfolioItem.src ?? "";
  const imageAlt =
    portfolioItem.imageAlt ??
    portfolioItem.alt ??
    portfolioItem.businessName ??
    "Musasco client work";

  const businessName =
    portfolioItem.businessName ??
    portfolioItem.industry ??
    "Selected Client Work";

  const category =
    portfolioItem.category ??
    portfolioItem.industry ??
    "Client Work";

  const headline =
    portfolioItem.headline ??
    portfolioItem.challenge ??
    "Growth-focused creative and strategy";

  const description =
    portfolioItem.description ??
    portfolioItem.solution ??
    "Strategic creative and growth work designed to help the business attract more attention, convert more customers, and grow.";

  const highlights = portfolioItem.highlights ?? [];

  return (
    <Card
      variant="raised"
      hover
      className="h-full flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-charcoal-100 overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 90vw"
            className="object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-charcoal-900 text-white">
            <span className="text-sm font-medium">
              {businessName}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">

        {/* Category */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-600">
            {category}
          </p>

          <h3 className="mt-1 font-display text-xl font-bold leading-tight text-charcoal-900">
            {businessName}
          </h3>
        </div>

        {/* Headline */}
        <p className="text-sm font-semibold leading-relaxed text-charcoal-800">
          {headline}
        </p>

        {/* Description */}
        <p className="text-sm leading-relaxed text-charcoal-600">
          {description}
        </p>

        {/* Highlights */}
        {highlights.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center rounded-md border border-emerald-100 bg-emerald-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto pt-2">
          {portfolioItem.caseStudyHref ? (
            <Link
              href={portfolioItem.caseStudyHref}
              className="group inline-flex items-center gap-2 text-sm font-bold text-emerald-600 transition-colors hover:text-emerald-700"
            >
              Read Case Study
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          ) : (
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-sm font-bold text-emerald-600 transition-colors hover:text-emerald-700"
            >
              View Case Studies
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}

export function CaseStudyPreviews() {
  return (
    <Section
      background="subtle"
      ariaLabel="Selected client work"
      id="work"
    >
      <Container>

        {/* Section heading */}
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-600">
            Selected Work
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
            {caseStudyPreviews.headline}
          </h2>

          <p className="mt-3 text-charcoal-600">
            {caseStudyPreviews.subheadline}
          </p>
        </RevealOnScroll>

        {/* Desktop / tablet */}
        <div className="mt-10 hidden md:grid md:grid-cols-2 md:gap-6">
          {PORTFOLIO_SHOWCASE.map((item, index) => (
            <RevealOnScroll
              key={
                (item as PortfolioItem & { id?: string }).id ??
                `${index}-${item.industry ?? "portfolio"}`
              }
              delay={index * 0.1}
            >
              <PortfolioCard item={item} />
            </RevealOnScroll>
          ))}
        </div>

        {/* Mobile */}
        <div className="mt-8 md:hidden">
          <Carousel ariaLabel="Selected client work">
            {PORTFOLIO_SHOWCASE.map((item, index) => (
              <PortfolioCard
                key={
                  (item as PortfolioItem & { id?: string }).id ??
                  `${index}-${item.industry ?? "portfolio"}`
                }
                item={item}
              />
            ))}
          </Carousel>
        </div>

      </Container>
    </Section>
  );
}