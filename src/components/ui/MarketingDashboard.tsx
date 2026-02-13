"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Target, Euro, ArrowUpRight, BarChart2 } from "lucide-react";

function Counter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      let startTimestamp: number | null = null;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function MarketingDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const chartScale = useSpring(useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]), { stiffness: 100, damping: 30 });
  const chartOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <div ref={containerRef} className="w-full max-w-5xl mx-auto mb-10 px-4">
      <motion.div 
        style={{ scale: chartScale, opacity: chartOpacity }}
        className="liquid-glass rounded-[2rem] p-4 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden bg-[#0A0A0A]/80 backdrop-blur-xl"
      >
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Live Campaign Data</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Performance Overview</h3>
          </div>
          <div className="flex gap-2">
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-gray-400">7 Days</div>
            <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400">30 Days</div>
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-gray-400">90 Days</div>
          </div>
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total ROAS", value: 8, suffix: ".4x", icon: <TrendingUp className="w-4 h-4 text-cyan-400" />, trend: "+24%" },
            { label: "Conversion Rate", value: 4, suffix: ".8%", icon: <Target className="w-4 h-4 text-pink-400" />, trend: "+12%" },
            { label: "Cost Per Lead", value: 1, prefix: "€", suffix: ".42", icon: <Euro className="w-4 h-4 text-cyan-400" />, trend: "-18%" },
            { label: "New Leads", value: 1240, suffix: "+", icon: <Users className="w-4 h-4 text-pink-400" />, trend: "+45%" },
          ].map((metric, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
                  {metric.icon}
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-sm ${metric.trend.startsWith('+') ? 'text-emerald-400 bg-emerald-400/10' : 'text-cyan-400 bg-cyan-400/10'}`}>
                  {metric.trend}
                </span>
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">{metric.label}</p>
              <p className="text-xl md:text-2xl font-bold text-white">
                <Counter value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
              </p>
            </motion.div>
          ))}
        </div>

        {/* Main Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-6 rounded-3xl bg-white/[0.02] border border-white/5 relative min-h-[300px] flex flex-col justify-end">
            <div className="absolute top-6 left-6">
              <h4 className="text-sm font-bold text-white mb-1">Growth Curve</h4>
              <p className="text-xs text-gray-500">Scaling progress over 6 months</p>
            </div>
            
            {/* SVG Chart */}
            <div className="w-full h-48 relative overflow-visible">
              <svg viewBox="0 0 400 150" className="w-full h-full">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Reference Lines */}
                <line x1="0" y1="140" x2="400" y2="140" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                <line x1="0" y1="100" x2="400" y2="100" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                <line x1="0" y1="60" x2="400" y2="60" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                
                {/* Data Line */}
                <motion.path 
                  d="M0,140 C50,135 100,120 150,100 C200,80 250,50 300,40 C350,30 400,20 400,20"
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                
                {/* Secondary Data Bar (Background) */}
                <motion.path 
                  d="M0,150 L0,140 C50,135 100,120 150,100 C200,80 250,50 300,40 C350,30 400,20 400,20 L400,150 Z"
                  fill="url(#lineGrad)"
                  fillOpacity="0.05"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />

                {/* Vertical Indicators */}
                {[0, 20, 40, 60, 80, 100].map((x) => (
                  <circle key={x} cx={`${x}%`} cy="140" r="1.5" fill="white" fillOpacity="0.2" />
                ))}
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <BarChart2 className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Top Channels</h4>
              <div className="space-y-4">
                {[
                  { name: "Meta Ads", val: 85, color: "bg-cyan-500" },
                  { name: "Google Ads", val: 62, color: "bg-pink-500" },
                  { name: "Instagram Shop", val: 45, color: "bg-white" },
                ].map((ch, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] font-bold mb-1 uppercase tracking-tighter">
                      <span>{ch.name}</span>
                      <span>{ch.val}% Growth</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${ch.val}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className={`h-full ${ch.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 text-center flex flex-col items-center justify-center min-h-[140px] group">
              <ArrowUpRight className="w-8 h-8 text-cyan-400 mb-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest leading-tight">Scale-Ready<br/>Infrastructure</p>
            </div>
          </div>
        </div>

        {/* Floating Ambient Elements */}
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-pink-500/5 blur-[120px] rounded-full" />
      </motion.div>
    </div>
  );
}
