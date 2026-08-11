"use client";

import { cn } from "@/lib/utils";

const FUNNEL_STAGES = [
  { label: "VISITORS", width: "100%", color: "bg-charcoal-100", textColor: "text-charcoal-600" },
  { label: "LANDING PAGE", width: "85%", color: "bg-charcoal-200", textColor: "text-charcoal-700" },
  { label: "ENGAGEMENT", width: "65%", color: "bg-emerald-100", textColor: "text-emerald-700" },
  { label: "LEAD / ENQUIRY", width: "45%", color: "bg-emerald-200", textColor: "text-emerald-800" },
  { label: "CUSTOMER", width: "25%", color: "bg-emerald-500", textColor: "text-white" },
];

export function ConvertSystemVisual() {
  return (
    <div className="relative w-full h-72 lg:h-80 overflow-hidden rounded-xl border border-charcoal-200 bg-white flex flex-col items-center justify-center p-6">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      {/* Funnel Visualization */}
      <div className="relative z-10 flex flex-col items-center gap-2 w-full max-w-sm">
        {FUNNEL_STAGES.map((stage, i) => (
          <div key={stage.label} className="relative flex flex-col items-center w-full group">
            {/* Funnel Block */}
            <div 
              className={cn(
                "h-10 lg:h-12 rounded-sm flex items-center justify-center transition-all duration-500 border border-charcoal-200/50",
                stage.color,
                stage.textColor
              )}
              style={{ width: stage.width }}
            >
              <span className="text-[10px] lg:text-xs font-bold tracking-wide uppercase">{stage.label}</span>
            </div>
            
            {/* Connector / Flow Indicator */}
            {i < FUNNEL_STAGES.length - 1 && (
              <div className="h-4 flex items-center justify-center">
                <div className="w-0.5 h-full bg-charcoal-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-500 animate-flow-down-fast" style={{ animationDelay: `${i * 0.2}s` }} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Side Annotation */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-4 text-right">
        <div className="text-xs text-charcoal-400 font-medium">Friction Removed</div>
        <div className="h-24 w-0.5 bg-gradient-to-b from-charcoal-200 to-emerald-500" />
        <div className="text-xs text-emerald-600 font-bold">Value Captured</div>
      </div>

      <style jsx global>{`
        @keyframes flow-down-fast {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .animate-flow-down-fast {
          animation: flow-down-fast 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
}