import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import heroAsset from "@/assets/hero-bg.png.asset.json";
const heroImg = heroAsset.url;
import { Stats } from "./Stats";

const WHATSAPP = "https://wa.me/573000000000?text=Hola%20Solvexa%2C%20quiero%20una%20asesor%C3%ADa%20t%C3%A9cnica.";

export function Hero() {
  return (
    <section id="top" className="relative w-full min-h-[85vh] lg:min-h-[100vh] overflow-hidden bg-[#0B0F14]">
      {/* Background image — full bleed, construction & infrastructure */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Construcción e infraestructura Solvexa"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        {/* Dark overlay 55-60% for premium readability */}
        <div className="absolute inset-0 bg-[#0B0F14]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14]/80 via-transparent to-[#0B0F14]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-[#0B0F14]/30" />
        {/* Subtle grid texture for tech feel */}
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 flex min-h-[85vh] lg:min-h-[100vh] flex-col justify-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          Soluciones con excelencia
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-5xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-white"
        >
          Soluciones técnicas con{" "}
          <span className="text-[#A6CE39]">excelencia</span>{" "}
          para construcción e infraestructura.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg text-white/70 leading-relaxed"
        >
          Acompañamos cada proyecto con asesoría especializada, productos de
          alto desempeño y soluciones eficientes para necesidades reales de
          obra.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-[#A6CE39] px-7 py-4 text-sm font-semibold text-[#0B0F14] transition-all hover:brightness-110 hover:shadow-[0_0_40px_-10px_rgba(166,206,57,0.5)]"
          >
            Solicitar asesoría
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-7 py-4 text-sm font-semibold text-white hover:border-[#A6CE39]/50 hover:bg-[#A6CE39]/10 transition-all"
          >
            <MessageCircle size={16} />
            Cotizar proyecto
          </a>
        </motion.div>

        <Stats />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#soluciones" className="flex flex-col items-center gap-2 text-white/40 hover:text-[#A6CE39] transition-colors">
          <span className="text-[10px] uppercase tracking-widest">Explorar</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
