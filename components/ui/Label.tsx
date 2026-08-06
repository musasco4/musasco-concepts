import { cn } from "@/lib/utils";
import type { LabelHTMLAttributes } from "react";

export function Label({
  children,
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "block text-sm font-medium text-charcoal-700 mb-1.5",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}