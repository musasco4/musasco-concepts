"use client";

import { useEffect, useState, useRef } from "react";
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
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    const STAGE_DELAY = 800; // ms between stages
    const PAUSE_DELAY = 2000; // ms pause after Scale

    // Function to run a specific sequence of stages
    const runSequence = (sequence: number[], onComplete: () => void) => {
      let stepIndex = 0;

      const advance = () => {
        if (!isMountedRef.current) return;

        if (stepIndex < sequence.length) {
          setActiveStage(sequence[stepIndex]);
          stepIndex++;
          timerRef.current = setTimeout(advance, STAGE_DELAY);
        } else {
          // Sequence complete
          onComplete();
        }
      };

      advance();
    };

    // 1. Initial Cycle: Traffic -> Attract -> Convert -> Customer -> Scale
    const startInitialCycle = () => {
      runSequence([0, 1, 2, 3, 4], () => {
        // After Scale, pause for 2 seconds, then start loop cycle
        timerRef.current = setTimeout(() => {
          if (isMountedRef.current) startLoopCycle();
        }, PAUSE_DELAY);
      });
    };

    // 2. Loop Cycle: Attract -> Convert -> Customer -> Scale (repeat indefinitely)
    const startLoopCycle = () => {
      runSequence([1, 2, 3, 4], () => {
        // After Scale, pause for 2 seconds, then repeat loop cycle
        timerRef.current = setTimeout(() => {
          if (isMountedRef.current) startLoopCycle();
        }, PAUSE_DELAY);
      });
    };

    // Start the animation
    startInitialCycle();

    // Cleanup
    return () => {
      isMountedRef.current = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    // Fixed height container to prevent layout shift. Mobile: 380px, Desktop: 600px.
    <div className="relative w-full h-[380px] md:h-[600px] max-w-md mx-auto overflow-hidden rounded-2xl border border-charcoal-700/50 bg-charcoal-800/30">
      
      {/* Desktop Layout (Absolute positioned stages) */}
      <div className="hidden md:block absolute inset-0">
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

        <div className="absolute inset-0 flex flex-col justify-between py-8 pl-2 pr-4">
          {STAGES.map((stage, i) => {
            const isActive = activeStage >= i;
            const isCurrent = activeStage === i;
            const isLoop = stage.type === "loop" && isActive;

            return (
              <div key={stage.id} className="relative flex items-start gap-6">
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
                  
                  {isLoop && (
                    <div className="mt-3 flex items-end gap-1 h-6">
                      {[40, 60, 50, 80, 70, 95].map((h, idx) => (
                        <div 
                          key={idx} 
                          className="flex-1 bg-emerald-500/50 rounded-t-sm transition-all duration-1000"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Layout (Compact Vertical Flow) */}
      <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center p-4 gap-2">
        {STAGES.map((stage, i) => {
          const isActive = activeStage >= i;
          // Removed unused isCurrent variable here
          
          return (
            <div key={stage.id} className="w-full flex flex-col items-center">
              <div className={cn(
                "w-full max-w-[220px] rounded-lg border p-2.5 text-center transition-all duration-500",
                isActive 
                  ? "bg-charcoal-800 border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.1)]" 
                  : "bg-charcoal-900/50 border-charcoal-700 opacity-60"
              )}>
                <div className="flex items-center justify-center gap-2 mb-0.5">
                  {stage.type === "loop" && isActive && <RefreshCw className="size-3 text-emerald-400 animate-spin-slow" />}
                  <h3 className={cn(
                    "font-display text-[11px] font-bold tracking-wide uppercase",
                    isActive ? "text-white" : "text-charcoal-500"
                  )}>
                    {stage.label}
                  </h3>
                </div>
                <p className={cn(
                  "text-[9px] leading-tight",
                  isActive ? "text-charcoal-400" : "text-charcoal-600"
                )}>
                  {stage.sub}
                </p>
              </div>
              
              {i < STAGES.length - 1 && (
                <div className="h-3 flex items-center justify-center">
                  <div className={cn(
                    "w-0.5 h-full transition-colors duration-500",
                    isActive ? "bg-emerald-500" : "bg-charcoal-700"
                  )} />
                </div>
              )}
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