import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import bg from "@/assets/cta-bg.jpg";

const WHATSAPP = "https://wa.me/573000000000?text=Hola%20Solvexa%2C%20quiero%20conversar%20sobre%20un%20proyecto.";

export function CtaFinal() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bg}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="eyebrow mb-6">Conversemos</div>
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95]">
            Conversemos sobre su{" "}
            <span className="text-gradient">próximo proyecto.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Cuéntenos su reto técnico. Un asesor especializado se contactará
            con usted en menos de 24 horas con un diagnóstico inicial.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:shadow-glow transition-all"
            >
              <MessageCircle size={16} />
              Escribir por WhatsApp
            </a>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/40 backdrop-blur px-7 py-4 text-sm font-semibold hover:border-primary/50 transition-all"
            >
              Solicitar cotización
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
