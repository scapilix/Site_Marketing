"use client";

import { motion } from "framer-motion";
import { BarChart3, Target, TrendingUp, Shield, Zap, Users } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import MarketingDashboard from "@/components/ui/MarketingDashboard";

const benefits = [
  {
    icon: <BarChart3 className="w-8 h-8 text-pink-500" />,
    title: "Diagnóstico 360º",
    description: "Analisamos cada etapa do teu funil para encontrar os pontos de fuga de faturação."
  },
  {
    icon: <Target className="w-8 h-8 text-cyan-500" />,
    title: "Público Alvo Preciso",
    description: "Não desperdices dinheiro. Aparece apenas para quem já está pronto para comprar."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-pink-500" />,
    title: "Escala Sustentável",
    description: "Estratégias para aumentar o teu investimento mantendo a rentabilidade (ROAS)."
  },
  {
    icon: <Zap className="w-8 h-8 text-cyan-500" />,
    title: "Gestão Especializada",
    description: "Fica descansado enquanto especialistas cuidam de toda a parte técnica das tuas campanhas."
  },
  {
    icon: <Shield className="w-8 h-8 text-pink-500" />,
    title: "Dados Seguros",
    description: "Trabalhamos com total transparência e confidencialidade sobre os teus números."
  },
  {
    icon: <Users className="w-8 h-8 text-cyan-500" />,
    title: "Resultados em 30 Dias",
    description: "O nosso método é focado em gerar retorno rápido e consistente para o teu negócio."
  }
];

export default function Benefits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  return (
    <section id="beneficios" className="pt-2 pb-24 px-4 bg-[#050505] relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Como Vamos Transformar o Teu Negócio
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Não é apenas sobre cliques. É sobre conversões, faturação e crescimento previsível.
          </p>
        </div>

        {/* High-end Pro-Max Marketing Dashboard */}
        <MarketingDashboard />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TiltCard className="h-full">
                <div className="liquid-glass p-8 rounded-3xl h-full border border-white/5 hover:border-pink-500/30 transition-colors group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
