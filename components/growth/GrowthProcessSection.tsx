"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Section } from "@/components/ui/Section"; // Note: Section import might be unused if using raw section tag, but kept for consistency if needed elsewhere. Actually, this component uses raw <section>. I will remove unused imports if any.
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { growthProcess } from "@/lib/content/growthSystem";
import { cn } from "@/lib/utils";
import { AlertTriangle, LayoutGrid, Link2, RefreshCw, ArrowRight } from "lucide-react";

// --- Visualization Components for each Stage ---

function AuditVisual() {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center animate-fade-in">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="relative z-10 flex flex-col items-center gap-4">
        <Node label="TRAFFIC" active />
        <Connector active />
        <Node label="LANDING PAGE" active />
        <Connector active />
        
        {/* Bottleneck */}
        <div className="relative my-2">
          <div className="size-12 rounded-full border-2 border-red-500 bg-red-500/10 flex items-center justify-center animate-pulse-slow shadow-[0_0_20px_rgba(239,68,68,0.3)]">
            <AlertTriangle className="size-6 text-red-500" />
          </div>
          <span className="absolute -right-32 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 uppercase tracking-wider whitespace-nowrap bg-charcoal-900 px-2 py-1 rounded border border-red-500/30">
            Value Leaking Here
          </span>
        </div>
        
        <Connector active={false} broken />
        <Node label="LEADS" active={false} dimmed />
        <Connector active={false} dimmed />
        <Node label="CUSTOMERS" active={false} dimmed />
      </div>
    </div>
  );
}

function BlueprintVisual() {
  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center animate-fade-in">
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="relative z-10 grid grid-cols-1 gap-6 w-full max-w-md">
        {[
          { label: "TARGETING", delay: "0s" },
          { label: "LANDING PAGE", delay: "0.2s" },
          { label: "LEAD CAPTURE", delay: "0.4s" },
          { label: "CUSTOMER JOURNEY", delay: "0.6s" },
        ].map((item, i) => (
          <div key={item.label} className="flex items-center gap-4 animate-slide-in-right" style={{ animationDelay: item.delay }}>
            <div className="size-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <div className="h-0.5 flex-1 bg-gradient-to-r from-emerald-500 to-transparent" />
            <span className="text-sm font-bold text-white uppercase tracking-wide">{item.label}</span>
            <div className="h-0.5 w-8 bg-charcoal-600" />
            <LayoutGrid className="size-4 text-emerald-400" />
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 text-xs font-bold text-emerald-400 uppercase tracking-widest animate-pulse">
        Infrastructure Designed
      </div>
    </div>
  );
}

function BuildVisual() {
  const engines = [
    { id: "attract", label: "ATTRACT", sub: "Traffic & Ads", delay: 0 },
    { id: "convert", label: "CONVERT", sub: "Landing Pages & Lead Capture", delay: 1 },
    { id: "scale", label: "SCALE", sub: "Tracking & Optimisation", delay: 2 },
  ];

  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center animate-fade-in overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full max-w-4xl px-4">
        {engines.map((engine, i) => (
          <div key={engine.id} className="flex flex-col items-center gap-4 md:gap-0 md:flex-row w-full md:w-auto">
            
            {/* Engine Card */}
            <div 
              className={cn(
                "w-full md:w-48 p-4 rounded-xl border-2 bg-charcoal-800 flex flex-col items-center justify-center text-center transition-all duration-700 ease-out",
                "opacity-0 translate-y-4", // Initial state for animation
              )}
              style={{
                animation: `card-activate 0.6s ease-out forwards`,
                animationDelay: `${engine.delay * 0.8}s`,
                borderColor: 'rgba(16, 185, 129, 0.3)', // Default border
              }}
            >
              <span className="font-display text-lg font-bold text-white mb-1">{engine.label}</span>
              <span className="text-xs text-charcoal-400 leading-tight">{engine.sub}</span>
              
              {/* Active Glow Effect via CSS class injected by animation */}
              <div className="absolute inset-0 rounded-xl bg-emerald-500/5 opacity-0 animate-card-glow" style={{ animationDelay: `${engine.delay * 0.8 + 0.3}s` }} />
            </div>

            {/* Connector Arrow (Between cards only) */}
            {i < engines.length - 1 && (
              <div className="hidden md:flex items-center justify-center w-12 relative">
                <div className="w-full h-0.5 bg-charcoal-600 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-emerald-500 animate-signal-travel"
                    style={{ animationDelay: `${engine.delay * 0.8 + 0.5}s` }}
                  />
                </div>
                <ArrowRight className="absolute right-0 size-4 text-emerald-500 opacity-0 animate-fade-in-delayed" style={{ animationDelay: `${engine.delay * 0.8 + 0.7}s` }} />
              </div>
            )}
            
            {/* Mobile Connector */}
            {i < engines.length - 1 && (
              <div className="md:hidden w-0.5 h-8 bg-charcoal-600 relative overflow-hidden">
                 <div 
                    className="absolute inset-0 bg-emerald-500 animate-signal-travel-vertical"
                    style={{ animationDelay: `${engine.delay * 0.8 + 0.5}s` }}
                  />
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 text-xs font-bold text-emerald-400 uppercase tracking-widest opacity-0 animate-fade-in-delayed" style={{ animationDelay: "2.5s" }}>
        Engines Connected
      </div>

      <style jsx global>{`
        @keyframes card-activate {
          to { opacity: 1; transform: translateY(0); border-color: rgba(16, 185, 129, 0.6); box-shadow: 0 0 20px rgba(16, 185, 129, 0.1); }
        }
        @keyframes card-glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-card-glow {
          animation: card-glow 2s ease-in-out infinite;
        }
        @keyframes signal-travel {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        .animate-signal-travel {
          animation: signal-travel 1s linear forwards;
        }
        @keyframes signal-travel-vertical {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .animate-signal-travel-vertical {
          animation: signal-travel-vertical 1s linear forwards;
        }
        @keyframes fade-in-delayed {
          to { opacity: 1; }
        }
        .animate-fade-in-delayed {
          animation: fade-in-delayed 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

function OptimiseVisual() {
  const stages = ["RESULTS", "MEASURE", "LEARN", "OPTIMISE", "ACT"];
  
  return (
    <div className="relative w-full h-64 md:h-80 flex flex-col items-center justify-center animate-fade-in gap-8">
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      
      {/* Circular Feedback Loop */}
      <div className="relative z-10 size-48 md:size-56">
        {/* Rotating Dashed Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-charcoal-600 animate-spin-slow" />
        
        {/* Signal travelling around the loop */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-emerald-500 animate-spin-signal" />

        {/* Nodes positioned in a circle */}
        {stages.map((label, i) => {
          // Calculate position on circle
          // Start at top (-90deg) and distribute evenly
          const angle = (i * (360 / stages.length) - 90) * (Math.PI / 180);
          const radius = 42; // percentage from center
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);

          return (
            <div
              key={label}
              className="absolute flex items-center justify-center"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            >
              <div className="px-3 py-1.5 rounded-md bg-charcoal-800 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)] flex items-center justify-center min-w-[80px]">
                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wide whitespace-nowrap">
                  {label}
                </span>
              </div>
            </div>
          );
        })}
        
        {/* Center Hub */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-12 rounded-full bg-charcoal-900 border border-charcoal-700 flex items-center justify-center z-20">
            <RefreshCw className="size-5 text-emerald-500 animate-spin-slow-reverse" />
          </div>
        </div>
      </div>

      {/* Performance Chart (Connected to the story) */}
      <div className="relative z-10 w-full max-w-xs flex flex-col items-center gap-2">
        <div className="flex items-end gap-1.5 h-12 w-full px-4">
          {[20, 35, 30, 50, 45, 65, 60, 80, 75, 95].map((h, i) => (
            <div 
              key={i} 
              className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-sm animate-grow-up"
              style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
        <div className="w-full h-0.5 bg-charcoal-600" />
        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Performance Compounding</span>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes spin-signal {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-signal {
          animation: spin-signal 3s linear infinite;
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 10s linear infinite;
        }
        @keyframes grow-up {
          from { height: 0; opacity: 0; }
          to { opacity: 1; }
        }
        .animate-grow-up {
          animation: grow-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

// --- Helper Components ---

function Node({ label, active, dimmed }: { label: string; active: boolean; dimmed?: boolean }) {
  return (
    <div className={cn(
      "px-6 py-2 rounded-md border text-sm font-bold uppercase tracking-wide transition-all duration-500",
      active 
        ? "bg-charcoal-800 border-emerald-500/50 text-white shadow-[0_0_15px_rgba(16,185,129,0.1)]" 
        : dimmed 
          ? "bg-charcoal-900 border-charcoal-700 text-charcoal-500"
          : "bg-charcoal-800 border-charcoal-600 text-charcoal-300"
    )}>
      {label}
    </div>
  );
}

function Connector({ active, broken, dimmed }: { active: boolean; broken?: boolean; dimmed?: boolean }) {
  return (
    <div className={cn(
      "w-0.5 h-8 relative overflow-hidden",
      dimmed ? "bg-charcoal-700" : "bg-charcoal-600"
    )}>
      {active && !broken && (
        <div className="absolute inset-0 bg-emerald-500 animate-flow-down" />
      )}
      {broken && (
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="h-1/2 bg-red-500/50" />
          <div className="h-1/2 bg-transparent" />
        </div>
      )}
    </div>
  );
}

// --- Main Section Component ---

export function GrowthProcessSection() {
  const [activeStage, setActiveStage] = useState(0); // 0-3
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Auto-advance logic
  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion) return;
    if (!hasEntered) return;

    const interval = setInterval(() => {
      setActiveStage((prev) => {
        if (prev >= 3) {
          // Hold on last stage for longer, then restart
          setTimeout(() => setActiveStage(0), 3000);
          return prev;
        }
        return prev + 1;
      });
    }, 2500); // 2.5s per stage

    return () => clearInterval(interval);
  }, [isAutoPlaying, hasEntered, prefersReducedMotion, activeStage]);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          if (prefersReducedMotion) {
            setActiveStage(3); // Show completed state immediately
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const handleStageClick = useCallback((index: number) => {
    setIsAutoPlaying(false);
    setActiveStage(index);
  }, []);

  const renderVisual = () => {
    switch (activeStage) {
      case 0: return <AuditVisual />;
      case 1: return <BlueprintVisual />;
      case 2: return <BuildVisual />;
      case 3: return <OptimiseVisual />;
      default: return null;
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-charcoal-900 py-20 lg:py-32 overflow-hidden">
      {/* Subtle Technical Grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      {/* Emerald Glow Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <RevealOnScroll className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {growthProcess.headline}
          </h2>
        </RevealOnScroll>

        {/* Stage Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
          {growthProcess.steps.map((step, i) => {
            const isActive = activeStage === i;
            const isPast = activeStage > i;
            
            return (
              <div key={step.step} className="flex items-center gap-4 md:gap-8">
                <button
                  onClick={() => handleStageClick(i)}
                  className={cn(
                    "group flex flex-col items-center gap-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-900 rounded-lg p-2",
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                  )}
                  aria-label={`View ${step.name} stage`}
                  aria-pressed={isActive}
                >
                  <div className={cn(
                    "flex size-10 items-center justify-center rounded-full border-2 font-bold text-sm transition-all duration-300",
                    isActive 
                      ? "bg-emerald-500 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] scale-110" 
                      : isPast
                        ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                        : "bg-charcoal-800 border-charcoal-600 text-charcoal-400 group-hover:border-charcoal-400"
                  )}>
                    {step.step}
                  </div>
                  <span className={cn(
                    "text-xs font-bold uppercase tracking-wider transition-colors",
                    isActive ? "text-white" : "text-charcoal-400 group-hover:text-charcoal-300"
                  )}>
                    {step.name}
                  </span>
                </button>
                
                {/* Connector Arrow between stages (Desktop) */}
                {i < growthProcess.steps.length - 1 && (
                  <ArrowRight className={cn(
                    "hidden md:block size-4 transition-colors",
                    activeStage > i ? "text-emerald-500" : "text-charcoal-600"
                  )} />
                )}
              </div>
            );
          })}
        </div>

        {/* Main Visualization Area */}
        <div className="relative w-full max-w-4xl mx-auto rounded-2xl border border-charcoal-700/50 bg-charcoal-800/30 backdrop-blur-sm overflow-hidden min-h-[320px] md:min-h-[400px] flex items-center justify-center">
          {renderVisual()}
        </div>

        {/* Supporting Statement */}
        <RevealOnScroll delay={0.2} className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-charcoal-300 text-base md:text-lg leading-relaxed">
            {growthProcess.steps[activeStage]?.description}
          </p>
        </RevealOnScroll>
      </Container>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        @keyframes flow-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-flow-down {
          animation: flow-down 1.5s linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}