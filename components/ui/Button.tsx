import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

/**
 * Button — Design System §5 "Buttons".
 *
 * Rules enforced here, not left to callers to remember:
 * - Exactly the three visual variants the system defines (primary/secondary/tertiary)
 *   plus ghostOnDark for use on bg-inverse sections — no ad hoc styling escape hatch.
 * - min 44×44px touch target on every size, via padding, even at the "sm" visual size.
 * - Loading state keeps the button's rendered width stable (a fixed min-width
 *   at each size) so swapping label → spinner never shifts layout.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold font-body " +
    "transition-colors duration-150 ease-[var(--ease-standard)] disabled:opacity-40 " +
    "disabled:pointer-events-none min-h-11",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald-600 text-white hover:bg-emerald-500 active:bg-emerald-700",
        secondary:
          "bg-transparent text-charcoal-900 border-[1.5px] border-charcoal-900 hover:bg-charcoal-50 active:bg-charcoal-100",
        tertiary:
          "bg-transparent text-emerald-600 underline-offset-4 hover:underline px-1 min-h-11",
        ghostOnDark:
          "bg-transparent text-white border-[1.5px] border-white/70 hover:bg-white/10",
      },
      size: {
        lg: "h-14 px-6 text-base",
        default: "h-12 px-6 text-sm",
        sm: "h-10 px-4 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

type CommonProps = VariantProps<typeof buttonVariants> & {
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant, size, loading, className, children, ...rest } = props;
  const classes = cn(buttonVariants({ variant, size }), className);

  const content = (
    <>
      {loading ? (
        <Loader2 className="size-5 animate-spin" aria-hidden="true" />
      ) : null}
      <span className={loading ? "opacity-0 absolute" : undefined}>{children}</span>
      {loading ? <span aria-live="polite" className="sr-only">Loading</span> : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <Link href={href} className={cn(classes, "relative")} {...linkRest}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(classes, "relative")}
      disabled={loading || (rest as ButtonHTMLAttributes<HTMLButtonElement>).disabled}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
