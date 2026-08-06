import { cn } from "@/lib/utils";

/**
 * Container — implements the Grid System (Design System §4): a 1440px max-width
 * content area with 64px desktop / 24px mobile margins. `narrow` uses the
 * 800px reading-width container reserved for long-form text.
 */
export function Container({
  children,
  className,
  narrow = false,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        "mx-auto px-6 md:px-8 lg:px-16",
        narrow ? "max-w-[800px]" : "max-w-[1440px]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
