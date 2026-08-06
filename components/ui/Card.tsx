import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Card — Design System §5 "Cards (Base System)". Every specific card type
 * used on the homepage (Engine, Industry, Case Study, Stat) is built on top
 * of this primitive rather than restyling padding/radius/shadow per instance.
 */
const cardVariants = cva("rounded-lg transition-all duration-200 ease-[var(--ease-standard)]", {
  variants: {
    variant: {
      flat: "bg-white border border-charcoal-200",
      raised: "bg-white shadow-[var(--shadow-card-sm)]",
      inverse: "bg-charcoal-800 text-white",
      accent: "bg-emerald-50 border-2 border-emerald-600",
    },
    hover: {
      true: "hover:shadow-[var(--shadow-card-md)] hover:-translate-y-0.5",
      false: "",
    },
  },
  defaultVariants: { variant: "flat", hover: false },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ variant, hover, className, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant, hover }), className)} {...props} />;
}
