"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItemProps = {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
};

function AccordionItem({ question, answer, isOpen, onToggle, id }: AccordionItemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="border-b border-charcoal-100 last:border-0">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`accordion-panel-${id}`}
          id={`accordion-header-${id}`}
          className={cn(
            "flex w-full items-center justify-between py-6 text-left transition-colors",
            "hover:text-emerald-600 focus-visible:outline-none focus-visible:text-emerald-600",
            isOpen ? "text-emerald-600" : "text-charcoal-900"
          )}
        >
          <span className="text-base font-semibold sm:text-lg pr-4">{question}</span>
          <span className="relative size-6 shrink-0 flex items-center justify-center">
            <Plus
              className={cn(
                "absolute size-5 transition-all duration-300 ease-out",
                isOpen ? "rotate-45 text-emerald-600 opacity-0" : "rotate-0 text-charcoal-400 opacity-100"
              )}
              aria-hidden="true"
            />
            <Plus
              className={cn(
                "absolute size-5 transition-all duration-300 ease-out",
                isOpen ? "rotate-45 text-emerald-600 opacity-100" : "-rotate-45 text-charcoal-400 opacity-0"
              )}
              aria-hidden="true"
            />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-panel-${id}`}
            role="region"
            aria-labelledby={`accordion-header-${id}`}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-sm leading-relaxed text-charcoal-600 sm:text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Accordion({
  items,
}: {
  items: { question: string; answer: React.ReactNode }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          id={i.toString()}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}