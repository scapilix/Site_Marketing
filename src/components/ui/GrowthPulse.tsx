"use client";

import { motion } from "framer-motion";

export default function GrowthPulse() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="pulseGlow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Success Streams */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.path
            key={i}
            d={`M ${200 * i + 100},1000 Q ${200 * i + (i % 2 === 0 ? 150 : 50)},500 ${200 * i + 100},0`}
            stroke="url(#pulseGrad)"
            strokeWidth="2"
            fill="none"
            filter="url(#pulseGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.5, 0],
              y: [0, -100]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Data Points */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <motion.circle
            key={`c-${i}`}
            r="3"
            fill="#06b6d4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              y: [1000, 0],
              x: [Math.random() * 1000, Math.random() * 1000],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "linear"
            }}
          />
        ))}
      </svg>
    </div>
  );
}
