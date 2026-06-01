import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Stats } from "./Stats";

const WHATSAPP = "https://wa.me/573000000000?text=Hola%20Solvexa%2C%20quiero%20una%20asesor%C3%ADa%20t%C3%A9cnica.";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-20 bg-background">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Ingeniería e infraestructura tecnológica Solvexa"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-70"
        />
        {/* Corporate overlay: 80% premium black + 20% navy */}
        <div className="absolute inset-0 bg-[#050505]/80" />
        <div className="absolute inset-0 bg-[#102E5C]/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        {/* Subtle green corporate accent glow */}
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="container-x relative z-10 flex min-h-[calc(100svh-5rem)] flex-col justify-center py-16">
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
          className="max-w-5xl text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[0.95]"
        >
          Soluciones técnicas con{" "}
          <span className="text-gradient">excelencia</span> para construcción e
          infraestructura.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground"
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
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow"
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
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur-md px-7 py-4 text-sm font-semibold text-foreground hover:border-primary/50 transition-all"
          >
            <MessageCircle size={16} />
            Cotizar proyecto
          </a>
        </motion.div>

        <Stats />
      </div>

      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
