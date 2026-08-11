"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowDown, RefreshCw } from "lucide-react";

const STAGES = [
  { id: "traffic", label: "TRAFFIC / ATTENTION", sub: "Meta Ads, Google Ads, Organic", type: "source" },
  { id: "attract", label: "ATTRACT", sub: "Targeting & Campaigns", type: "process" },
  { id: "convert", label: "CONVERT", sub: "Landing Page & Experience", type: "process" },
  { id: "customer", label: "CUSTOMER", sub: "Qualified Opportunities", type: "outcome" },
  { id: "scale", label: "SCALE", sub: "Measure, Optimise, Repeat", type: "loop" },
];

export function GrowthHeroVisual() {
  const [activeStage, setActiveStage] = useState(-1);

  useEffect(() => {
    // Sequence animation
    const timers: NodeJS.Timeout[] = [];
    
    // Initial flow down
    STAGES.forEach((_, i) => {
      timers.push(setTimeout(() => setActiveStage(i), i * 800));
    });

    // Loop back from Scale to Attract after completion
    timers.push(setTimeout(() => {
      setActiveStage(1); // Back to Attract
    }, STAGES.length * 800 + 1000));

    // Continuous subtle pulse after initial load
    const interval = setInterval(() => {
      setActiveStage((prev) => {
        if (prev >= STAGES.length - 1) return 1; // Loop back to Attract
        return prev + 1;
      });
    }, 2000);

    timers.push(interval as unknown as NodeJS.Timeout);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Vertical Connection Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-charcoal-700" aria-hidden="true" />
      
      {/* Animated Flow Signal */}
      <div 
        className="absolute left-8 w-0.5 bg-emerald-500 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)]"
        style={{ 
          top: 0, 
          height: activeStage >= 0 ? `${(activeStage + 1) * 20}%` : '0%' 
        }} 
        aria-hidden="true"
      />

      <div className="space-y-6 relative">
        {STAGES.map((stage, i) => {
          const isActive = activeStage >= i;
          const isCurrent = activeStage === i;
          const isLoop = stage.type === "loop" && isActive;

          return (
            <div key={stage.id} className="relative flex items-start gap-6 pl-2">
              {/* Node */}
              <div className={cn(
                "relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500",
                isActive 
                  ? "bg-emerald-500 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]" 
                  : "bg-charcoal-800 border-charcoal-600 text-charcoal-500",
                isCurrent && "scale-110"
              )}>
                {stage.type === "loop" ? (
                  <RefreshCw className={cn("size-5", isLoop && "animate-spin-slow")} />
                ) : (
                  <span className="text-xs font-bold">{i + 1}</span>
                )}
              </div>

              {/* Content Card */}
              <div className={cn(
                "flex-1 rounded-lg border p-4 transition-all duration-500",
                isActive 
                  ? "bg-charcoal-800/50 border-charcoal-600 backdrop-blur-sm" 
                  : "bg-transparent border-transparent opacity-50"
              )}>
                <div className="flex items-center justify-between">
                  <h3 className={cn(
                    "font-display text-sm font-bold tracking-wide",
                    isActive ? "text-white" : "text-charcoal-500"
                  )}>
                    {stage.label}
                  </h3>
                  {isActive && stage.type !== "loop" && (
                    <ArrowDown className="size-4 text-emerald-500 animate-bounce-subtle" />
                  )}
                </div>
                <p className={cn(
                  "mt-1 text-xs",
                  isActive ? "text-charcoal-300" : "text-charcoal-600"
                )}>
                  {stage.sub}
                </p>
                
                {/* Mini Visual for Scale Loop */}
                {isLoop && (
                  <div className="mt-3 flex items-end gap-1 h-6">
                    {[40, 60, 50, 80, 70, 95].map((h, idx) => (
                      <div 
                        key={idx} 
                        className="flex-1 bg-emerald-500/50 rounded-t-sm transition-all duration-1000"
                        style={{ height: `${h}%`, animationDelay: `${idx * 0.1}s` }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}