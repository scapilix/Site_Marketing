"use client";

import { motion } from "framer-motion";
import { BarChart3, Users, Zap, Target, TrendingUp, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: BarChart3,
    title: "Diagnóstico 360º",
    desc: "Analisamos cada etapa do teu funil para encontrar os pontos de fuga de faturação.",
    color: "from-pink-500/20 to-pink-500/5"
  },
  {
    icon: Target,
    title: "Público Alvo Preciso",
    desc: "Não desperdices dinheiro. Aparece apenas para quem já está pronto para comprar.",
    color: "from-cyan-500/20 to-cyan-500/5"
  },
  {
    icon: TrendingUp,
    title: "Escala Sustentável",
    desc: "Estratégias para aumentar o teu investimento mantendo a rentabilidade (ROAS).",
    color: "from-purple-500/20 to-purple-500/5"
  },
  {
    icon: Users,
    title: "Gestão Especializada",
    desc: "Fica descansado enquanto especialistas cuidam de toda a parte técnica das tuas campanhas.",
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    icon: ShieldCheck,
    title: "Dados Seguros",
    desc: "Trabalhamos com total transparência e confidencialidade sobre os teus números.",
    color: "from-green-500/20 to-green-500/5"
  },
  {
    icon: Zap,
    title: "Resultados em 30 Dias",
    desc: "O nosso método é focado em gerar retorno rápido e consistente para o teu negócio.",
    color: "from-orange-500/20 to-orange-500/5"
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 px-4 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Como Vamos <span className="text-pink-500">Transformar</span> o Teu Negócio
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Não é apenas sobre cliques. É sobre conversões, faturação e crescimento previsível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-2xl bg-gradient-to-br ${benefit.color} border border-white/5 hover:border-white/10 transition-all group cursor-default`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
