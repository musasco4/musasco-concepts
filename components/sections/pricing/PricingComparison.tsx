import { Check, X } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { comparisonData } from "@/lib/content/pricing";
import { cn } from "@/lib/utils";

function CellValue({ value }: { value: string }) {
  if (value === "Yes" || value === "Included" || value === "Advanced" || value === "Setup") {
    return <Check className="size-5 text-emerald-600 mx-auto" aria-label="Included" />;
  }
  if (value === "No") {
    return <X className="size-5 text-charcoal-300 mx-auto" aria-label="Not included" />;
  }
  return <span className="text-sm font-semibold text-charcoal-900 text-center block">{value}</span>;
}

export function PricingComparison() {
  return (
    <Section background="primary" ariaLabel="Plan Comparison">
      <Container>
        <RevealOnScroll className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-charcoal-900">
            Compare Growth Systems
          </h2>
          <p className="mt-4 text-charcoal-600 max-w-2xl mx-auto">
            See how our packages scale with your business needs.
          </p>
        </RevealOnScroll>

        {/* Desktop Table - Fixed Layout for Alignment */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-charcoal-200 bg-white shadow-sm">
          <table className="w-full table-fixed border-collapse">
            <colgroup>
              <col className="w-[28%]" /> {/* Feature Column */}
              <col className="w-[18%]" /> {/* Audit */}
              <col className="w-[18%]" /> {/* Foundation */}
              <col className="w-[18%]" /> {/* Accelerator */}
              <col className="w-[18%]" /> {/* Partner */}
            </colgroup>
            <thead>
              <tr className="bg-charcoal-50/50">
                {comparisonData.headers.map((header, i) => (
                  <th
                    key={header}
                    className={cn(
                      "p-6 text-sm font-bold text-charcoal-900 border-b border-charcoal-200 text-center",
                      i === 0 && "text-left pl-8",
                      i === 3 && "bg-emerald-50 text-emerald-900" // Highlight Accelerator
                    )}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.rows.map((row, rowIndex) => (
                <tr key={row.feature} className={cn(
                  "group hover:bg-charcoal-50/30 transition-colors",
                  rowIndex !== comparisonData.rows.length - 1 && "border-b border-charcoal-100"
                )}>
                  <td className="p-6 text-sm font-medium text-charcoal-600 pl-8 align-middle">
                    {row.feature}
                  </td>
                  {row.values.map((val, i) => (
                    <td
                      key={i}
                      className={cn(
                        "p-6 align-middle",
                        i === 2 && "bg-emerald-50/30" // Highlight Accelerator column
                      )}
                    >
                      <CellValue value={val} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="md:hidden space-y-6">
          {comparisonData.headers.slice(1).map((planName, planIndex) => (
            <RevealOnScroll key={planName} delay={planIndex * 0.1}>
              <div className={cn(
                "rounded-xl border p-6 shadow-sm",
                planIndex === 2 ? "border-emerald-200 bg-emerald-50/30 ring-1 ring-emerald-100" : "border-charcoal-200 bg-white"
              )}>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-charcoal-100">
                  <h3 className="font-display text-lg font-bold text-charcoal-900">
                    {planName}
                  </h3>
                  {planIndex === 2 && (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full uppercase tracking-wide">
                      Recommended
                    </span>
                  )}
                </div>
                <div className="space-y-4">
                  {comparisonData.rows.map((row) => (
                    <div key={row.feature} className="flex items-center justify-between text-sm">
                      <span className="text-charcoal-500 font-medium">{row.feature}</span>
                      <span className="font-semibold text-charcoal-900 w-24 text-right">
                        <CellValue value={row.values[planIndex]} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}