"use client";

import { RefreshCw } from "lucide-react";

const LOOP_STAGES = ["MEASURE", "DATA", "LEARN", "OPTIMISE", "ACT"];

export function ScaleSystemVisual() {
  return (
    <div className="relative w-full h-72 lg:h-80 overflow-hidden rounded-xl border border-charcoal-200 bg-white flex items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      {/* Central Loop System */}
      <div className="relative size-48 lg:size-56">
        {/* Rotating Dashed Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-charcoal-200 animate-spin-slow" />
        
        {/* Loop Nodes */}
        {LOOP_STAGES.map((stage, i) => {
          const angle = (i * 360) / LOOP_STAGES.length;
          const radian = (angle * Math.PI) / 180;
          const radius = 45; // percentage
          const x = 50 + radius * Math.cos(radian - Math.PI / 2);
          const y = 50 + radius * Math.sin(radian - Math.PI / 2);

          return (
            <div
              key={stage}
              className="absolute flex flex-col items-center justify-center"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            >
              <div className="size-10 lg:size-12 rounded-full bg-white border-2 border-emerald-100 shadow-sm flex items-center justify-center z-10">
                <span className="text-[9px] lg:text-[10px] font-bold text-charcoal-700 text-center leading-tight">
                  {stage}
                </span>
              </div>
            </div>
          );
        })}

        {/* Center Hub */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-16 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center shadow-inner z-20">
            <RefreshCw className="size-6 text-emerald-600 animate-spin-slow-reverse" />
          </div>
        </div>
      </div>

      {/* Performance Chart (Bottom) */}
      <div className="absolute bottom-4 left-4 right-4 h-12 flex items-end gap-1 opacity-80">
        {[20, 35, 30, 50, 45, 65, 60, 80, 75, 95].map((h, i) => (
          <div 
            key={i} 
            className="flex-1 bg-gradient-to-t from-emerald-200 to-emerald-500 rounded-t-sm transition-all duration-1000"
            style={{ height: `${h}%` }}
          />
        ))}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-charcoal-200" />
      </div>
      
      <div className="absolute bottom-16 right-4 text-[10px] font-bold text-emerald-600 uppercase tracking-wide bg-white/80 px-2 py-1 rounded">
        Performance ↑
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
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