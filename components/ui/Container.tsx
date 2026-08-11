import { cn } from "@/lib/utils";

/**
 * Container — implements the Grid System:
 * 1440px maximum content width with responsive horizontal padding.
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
        "mx-auto w-full min-w-0 px-6 md:px-8 lg:px-16",
        narrow ? "max-w-[800px]" : "max-w-[1440px]",
        className
      )}
    >
      {children}
    </Tag>
  );
}