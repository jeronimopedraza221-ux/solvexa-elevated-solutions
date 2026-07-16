import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-bridge-sunrise.png";
import { Stats } from "./Stats";

const WHATSAPP = "https://wa.me/573228127001?text=Hola%20Solvexa%2C%20quiero%20una%20asesor%C3%ADa%20t%C3%A9cnica.";

export function Hero() {
  return (
    <section id="top" className="relative w-full h-screen min-h-[100vh] overflow-hidden bg-[#0A0A0A]">
      {/* Background image — full bleed bridge construction */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-label="Construcción de puente e infraestructura Solvexa"
        role="img"
      />
      {/* Uniform black overlay for maximum text contrast */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

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
          <span className="text-[#85C11F]">excelencia</span>{" "}
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
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#85C11F] px-7 py-4 text-sm font-semibold text-[#0A0A0A] transition-all hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_30px_-10px_rgba(133,193,31,0.6)]"
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
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-7 py-4 text-sm font-semibold text-white hover:bg-[#17325A] hover:border-[#17325A] transition-all"
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
        <a href="#soluciones" className="flex flex-col items-center gap-2 text-white/40 hover:text-[#85C11F] transition-colors">
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
