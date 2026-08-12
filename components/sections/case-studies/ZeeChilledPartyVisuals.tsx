import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Image as ImageIcon } from "lucide-react";

const PLACEHOLDERS = [
  { label: "PROJECT ASSET", span: "col-span-1 md:col-span-2 aspect-[2/1]" },
  { label: "PRODUCT CREATIVE", span: "col-span-1 aspect-square" },
  { label: "MARKETING MATERIAL", span: "col-span-1 aspect-square" },
  { label: "BRAND APPLICATION", span: "col-span-1 md:col-span-2 aspect-[2/1]" },
];

export function ZeeChilledPartyVisuals() {
  return (
    <Section background="primary" ariaLabel="Project Visuals">
      <Container className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {PLACEHOLDERS.map((placeholder, i) => (
            <RevealOnScroll key={placeholder.label} delay={i * 0.1} className={placeholder.span}>
              <div className="w-full h-full min-h-[200px] rounded-xl border border-charcoal-200 bg-charcoal-50 flex flex-col items-center justify-center gap-3 p-6 text-center">
                <ImageIcon className="size-8 text-charcoal-300" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-charcoal-400">
                  {placeholder.label}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}