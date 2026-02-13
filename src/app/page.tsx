import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden">
      <Hero />
      <Benefits />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tighter">
            AC<span className="text-pink-500 font-extrabold">MKT</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 AC Marketing - Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
