"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Target } from "lucide-react";

export default function HeroChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 mb-12 inline-block"
    >
      <div className="liquid-glass p-[2px] rounded-[2.5rem] border border-white/10 bg-white/[0.01] backdrop-blur-2xl shadow-[0_0_100px_rgba(6,182,212,0.15)] relative group">
        <div className="bg-[#050505]/80 rounded-[2.4rem] p-6 pr-8">
          <div className="flex items-center gap-8">
            {/* Main Growth Ring */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  className="text-white/[0.03]"
                />
                <motion.circle
                  cx="40"
                  cy="40"
                  r="34"
                  stroke="url(#heroChartGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="transparent"
                  strokeDasharray="213.6"
                  initial={{ strokeDashoffset: 213.6 }}
                  animate={{ strokeDashoffset: 42 }}
                  transition={{ duration: 2.5, ease: "circOut", delay: 0.5 }}
                />
                <defs>
                  <linearGradient id="heroChartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <TrendingUp className="w-6 h-6 text-cyan-400 mb-1" />
                <span className="text-[10px] font-black text-white leading-none tracking-tighter">84%</span>
              </div>
            </div>

            {/* Metrics Cluster */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Scaling ROAS</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-black text-white tracking-tighter">8.4x</span>
                    <span className="text-emerald-400 text-xs font-bold mb-1 flex items-center">
                      <ArrowUpRight className="w-3 h-3" /> 24%
                    </span>
                  </div>
                </div>
                
                <div className="h-10 w-[1px] bg-white/10" />

                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_#ec4899]" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Leads Flow</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-black text-white tracking-tighter">1,2k+</span>
                    <span className="text-emerald-400 text-xs font-bold mb-1">Active</span>
                  </div>
                </div>
              </div>

              {/* Success Timeline (Micro Mini Chart) */}
              <div className="flex gap-1.5 h-8 items-end">
                {[0.3, 0.5, 0.4, 0.6, 0.8, 0.7, 1].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 4, opacity: 0 }}
                    animate={{ height: h * 24, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1 + i * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 3
                    }}
                    className={`w-2.5 rounded-full ${
                      i === 6 ? "bg-cyan-400" : "bg-white/10"
                    } shadow-[0_0_10px_rgba(6,182,212,0.1)]`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Mini Labels */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 px-3 py-1.5 bg-cyan-500 text-black text-[9px] font-black uppercase tracking-tighter rounded-xl shadow-xl border border-white/20"
        >
          Pro Max Performance
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-4 -left-4 px-3 py-1.5 bg-white/10 backdrop-blur-xl border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest rounded-xl shadow-xl"
        >
          Verificado 2024
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-cyan-500/20 blur-[60px] rounded-full scale-75 -z-10 group-hover:scale-90 transition-transform duration-700" />
    </motion.div>
  );
}
