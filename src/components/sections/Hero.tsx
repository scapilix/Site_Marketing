"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-0">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-500/20 blur-[120px] rounded-full animate-pulse" />
         <div className="absolute top-[10%] right-[-10%] w-[35%] h-[35%] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-pink-400 text-sm font-medium mb-8"
        >
          <Zap className="w-4 h-4" />
          <span>Gestão de Tráfego Profissional</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]"
        >
          Escala a <span className="bg-gradient-to-r from-pink-500 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Faturação</span> <br />
          do teu Negócio.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          Diagnóstico completo do teu funil de vendas, identificação de bloqueadores e recomendações práticas para vender mais em 30 dias.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:bg-pink-500 hover:text-white transition-all group cursor-pointer"
          >
            Agendar Reunião Gratuita
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all cursor-pointer"
          >
            Ver Resultados
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
