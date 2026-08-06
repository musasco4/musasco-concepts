import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class lists safely (later classes win on conflicts).
 * Used by every component in components/ui and components/sections
 * so consumers can override styling without specificity fights.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
