"use client";

import { RefreshCw } from "lucide-react";

const LOOP_STAGES = ["RESULTS", "MEASURE", "LEARN", "OPTIMISE", "ACT"];

export function ScaleSystemVisual() {
  return (
    <div className="relative w-full h-72 lg:h-80 overflow-hidden rounded-xl border border-charcoal-200 bg-white flex flex-col items-center justify-center p-4 lg:p-0">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      {/* Desktop Layout (Circular Loop + Chart Overlay) */}
      <div className="hidden lg:flex absolute inset-0 items-center justify-center">
        <div className="relative size-56">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-charcoal-200 animate-spin-slow" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-emerald-500 animate-spin-signal" />

          {LOOP_STAGES.map((label, i) => {
            const angle = (i * (360 / LOOP_STAGES.length) - 90) * (Math.PI / 180);
            const radius = 42;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);

            return (
              <div
                key={label}
                className="absolute flex items-center justify-center"
                style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
              >
                <div className="px-3 py-1.5 rounded-md bg-white border border-emerald-100 shadow-sm flex items-center justify-center min-w-[80px]">
                  <span className="text-[10px] font-bold text-charcoal-700 uppercase tracking-wide whitespace-nowrap">
                    {label}
                  </span>
                </div>
              </div>
            );
          })}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-16 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center shadow-inner z-20">
              {/* Fixed: text-emerald-600 instead of text-white */}
              <RefreshCw className="size-6 text-emerald-600 animate-spin-slow-reverse" />
            </div>
          </div>
        </div>

        {/* Performance Chart (Desktop Bottom) */}
        <div className="absolute bottom-4 left-4 right-4 h-12 flex items-end gap-1 opacity-80">
          {[20, 35, 30, 50, 45, 65, 60, 80, 75, 95].map((h, i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-emerald-200 to-emerald-500 rounded-t-sm" style={{ height: `${h}%` }} />
          ))}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-charcoal-200" />
        </div>
        
        <div className="absolute bottom-16 right-4 text-[10px] font-bold text-emerald-600 uppercase tracking-wide bg-white/80 px-2 py-1 rounded">
          Performance ↑
        </div>
      </div>

      {/* Mobile Layout (Single Compact Circular Loop + Chart Below) */}
      <div className="lg:hidden flex flex-col items-center justify-between h-full w-full py-2">
        {/* Compact Circular Loop */}
        <div className="relative size-[180px] shrink-0">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-charcoal-200 animate-spin-slow" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-emerald-500 animate-spin-signal" />

          {LOOP_STAGES.map((label, i) => {
            const angle = (i * (360 / LOOP_STAGES.length) - 90) * (Math.PI / 180);
            const radius = 38; 
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);

            return (
              <div
                key={label}
                className="absolute flex items-center justify-center"
                style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
              >
                <div className="px-1.5 py-0.5 rounded bg-white border border-emerald-100 shadow-sm flex items-center justify-center">
                  <span className="text-[9px] font-bold text-charcoal-700 uppercase tracking-tight whitespace-nowrap">
                    {label}
                  </span>
                </div>
              </div>
            );
          })}
          
          {/* Center Hub */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-10 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center shadow-inner z-20">
              {/* Fixed: text-emerald-600 instead of text-white */}
              <RefreshCw className="size-4 text-emerald-600 animate-spin-slow-reverse" />
            </div>
          </div>
        </div>

        {/* Performance Chart (Mobile Bottom) */}
        <div className="w-full flex flex-col items-center gap-1 mt-2">
          <div className="flex items-end gap-1 h-8 w-full px-2">
            {[20, 35, 30, 50, 45, 65, 60, 80, 75, 95].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-emerald-200 to-emerald-500 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="w-full h-0.5 bg-charcoal-200" />
          <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-wide">Performance Compounding</span>
        </div>
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
      `}</style>
    </div>
  );
}