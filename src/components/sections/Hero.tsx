"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import GrowthPulse from "@/components/ui/GrowthPulse";
import HeroChart from "@/components/ui/HeroChart";

export default function Hero() {
  const words = "Escala a Faturação do teu Negócio.".split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      {/* High-end Growth Visualization */}
      <GrowthPulse />

      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-pink-500/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Growth Proof */}
          <HeroChart />

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.2] py-2"
          >
            {words.map((word, index) => (
              <motion.span
                variants={child}
                key={index}
                className="mr-3 md:mr-5 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 py-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Diagnóstico completo do teu funil de vendas, identificação de bloqueadores e recomendações práticas para vender mais em 30 dias.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Magnetic>
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Agendar Reunião Gratuita
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </Magnetic>
            
            <Magnetic>
              <button 
                onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-white font-semibold hover:text-cyan-400 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-all">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                Ver Resultados
              </button>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
