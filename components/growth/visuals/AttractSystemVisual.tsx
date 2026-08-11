"use client";

import { cn } from "@/lib/utils";

const SOURCES = ["Google Ads", "Meta Ads", "Organic Search", "Referrals"];

export function AttractSystemVisual() {
  return (
    <div className="relative w-full h-72 lg:h-80 overflow-hidden rounded-xl border border-charcoal-200 bg-white">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="absolute inset-0 flex items-center justify-between px-6 lg:px-12">
        
        {/* Column 1: Traffic Sources */}
        <div className="flex flex-col gap-4 z-10">
          {SOURCES.map((source, i) => (
            <div key={source} className="flex items-center gap-2 group">
              <div className="size-2 rounded-full bg-charcoal-300 group-hover:bg-emerald-500 transition-colors" />
              <span className="text-xs font-medium text-charcoal-600 whitespace-nowrap">{source}</span>
              {/* Animated Signal Line */}
              <div className="hidden lg:block w-12 h-0.5 bg-charcoal-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500 animate-flow-right" style={{ animationDelay: `${i * 0.2}s` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Column 2: Acquisition System (Targeting/Creative) */}
        <div className="hidden lg:flex flex-col items-center gap-2 z-10">
          <div className="px-4 py-2 rounded-md border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wide shadow-sm">
            Targeting & Creative
          </div>
          <div className="h-8 w-0.5 bg-charcoal-200 relative overflow-hidden">
             <div className="absolute inset-0 bg-emerald-500 animate-flow-down" />
          </div>
          <div className="px-4 py-2 rounded-md border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wide shadow-sm">
            Campaign Engine
          </div>
        </div>

        {/* Column 3: Landing Page */}
        <div className="hidden lg:flex flex-col items-center gap-2 z-10">
           <div className="w-0.5 h-16 bg-charcoal-200 relative overflow-hidden">
             <div className="absolute inset-0 bg-emerald-500 animate-flow-down delay-300" />
           </div>
           <div className="px-4 py-3 rounded-lg border-2 border-charcoal-900 bg-white text-charcoal-900 text-xs font-bold uppercase tracking-wide shadow-md">
             Landing Page
           </div>
        </div>

        {/* Column 4: Output (Leads) */}
        <div className="flex flex-col items-end gap-2 z-10 ml-auto lg:ml-0">
          <div className="text-right">
            <p className="text-xs font-bold text-charcoal-900 uppercase tracking-wide">Qualified</p>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide">Opportunities</p>
          </div>
          <div className="flex gap-1 mt-2">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="size-2 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>

      </div>

      {/* Mobile Simplified Flow Overlay */}
      <div className="lg:hidden absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white/80 backdrop-blur-sm">
         <div className="text-xs font-bold text-charcoal-500 uppercase">Traffic Sources</div>
         <div className="w-0.5 h-8 bg-emerald-500 animate-flow-down" />
         <div className="px-4 py-2 rounded border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-bold">Acquisition System</div>
         <div className="w-0.5 h-8 bg-emerald-500 animate-flow-down" />
         <div className="px-4 py-2 rounded border-2 border-charcoal-900 bg-white text-charcoal-900 text-xs font-bold">Landing Page</div>
         <div className="w-0.5 h-8 bg-emerald-500 animate-flow-down" />
         <div className="text-xs font-bold text-emerald-600 uppercase">Leads Generated</div>
      </div>

      <style jsx global>{`
        @keyframes flow-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-flow-right {
          animation: flow-right 2s linear infinite;
        }
        @keyframes flow-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-flow-down {
          animation: flow-down 2s linear infinite;
        }
      `}</style>
    </div>
  );
}