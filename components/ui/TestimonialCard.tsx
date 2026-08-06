import { Card } from "@/components/ui/Card";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/homepageTestimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card 
      variant="raised" 
      hover 
      className="p-8 sm:p-10 h-full flex flex-col relative overflow-hidden group"
    >
      {/* Decorative Quote Icon */}
      <Quote 
        className="absolute top-6 right-6 size-12 text-emerald-50 fill-emerald-50 -z-0 transition-colors group-hover:text-emerald-100" 
        aria-hidden="true" 
      />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Quote Text */}
        <blockquote className="flex-1 text-charcoal-700 text-lg leading-relaxed font-body italic mb-8">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        
        {/* Author Footer - Only renders if author exists */}
        {testimonial.author && (
          <footer className="mt-auto pt-6 border-t border-charcoal-100 flex items-center gap-4">
            {/* Avatar Placeholder / Initial */}
            <div className="size-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg shrink-0">
              {testimonial.author.charAt(0)}
            </div>
            
            <div className="flex flex-col">
              <p className="text-sm font-bold text-charcoal-900 tracking-tight">
                {testimonial.author}
              </p>
              {testimonial.role && (
                <p className="text-xs text-charcoal-500 font-medium uppercase tracking-wide mt-0.5">
                  {testimonial.role}
                </p>
              )}
            </div>
          </footer>
        )}
      </div>
    </Card>
  );
}