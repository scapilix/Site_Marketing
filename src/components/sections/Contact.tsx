"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState, useTransition } from "react";
import { sendContactEmail } from "@/app/actions/contact";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setSubmitted(true);
      } else if (result.error) {
        setError(result.error);
      }
    });
  };

  return (
    <section id="contacto" className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Pronto para <span className="text-cyan-400">Escalar?</span>
          </motion.h2>
          <p className="text-gray-400">
            Reserva a tua reunião estratégica gratuita e descobre o potencial real do teu negócio.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="liquid-glass p-8 md:p-12 rounded-3xl"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nome Completo</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-pink-500 outline-none transition-colors"
                    placeholder="João Silva"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Teu Instagram</label>
                  <input 
                    name="instagram"
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-pink-500 outline-none transition-colors"
                    placeholder="@teunegocio"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">E-mail Profissional</label>
                <input 
                  name="email"
                  type="email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-pink-500 outline-none transition-colors"
                  placeholder="joao@empresa.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Mensagem (Opcional)</label>
                <textarea 
                  name="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-pink-500 outline-none transition-colors"
                  placeholder="Fala-nos um pouco sobre o teu negócio..."
                ></textarea>
              </div>

              {error && (
                <div className="text-red-500 text-sm font-medium text-center bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                  {error}
                </div>
              )}

              <button 
                type="submit"
                disabled={isPending}
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? "A enviar..." : "Solicitar Reunião Estratégica"}
                {!isPending && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2">Pedido Enviado com Sucesso!</h3>
              <p className="text-gray-400 mb-8">Entraremos em contacto via Instagram ou E-mail nas próximas 24 horas.</p>
              
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setError(null);
                }}
                className="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              >
                Enviar outro pedido
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
