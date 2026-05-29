import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import p1 from "@/assets/proj-1.jpg";
import p2 from "@/assets/proj-2.jpg";
import p3 from "@/assets/proj-3.jpg";
import p4 from "@/assets/proj-4.jpg";
import p5 from "@/assets/proj-5.jpg";

const projects = [
  { img: p1, title: "Portal de túnel vehicular", tag: "Infraestructura", desc: "Impermeabilización y protección estructural del portal de acceso, garantizando vida útil en condición de alta humedad." },
  { img: p2, title: "Tanques de tratamiento", tag: "Industria", desc: "Recubrimiento anticorrosivo de alto desempeño para tanques de almacenamiento expuestos a intemperie." },
  { img: p3, title: "Parqueadero centro comercial", tag: "Construcción", desc: "Sistema de piso industrial epóxico con demarcación, alto tráfico vehicular y resistencia química." },
  { img: p4, title: "Centro logístico", tag: "Construcción", desc: "Pisos industriales y protección estructural en bodegas de operación 24/7." },
  { img: p5, title: "Planta cementera", tag: "Industria", desc: "Programa integral de mantenimiento y protección anticorrosiva de silos y estructuras." },
];

export function Proyectos() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="proyectos" className="py-28 lg:py-36 bg-surface/40 border-y border-border">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">Proyectos destacados</div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05]">
              Resultados que respaldan{" "}
              <span className="text-primary">cada decisión.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 [grid-auto-rows:200px]">
          {projects.map((p, i) => {
            const span = [
              "md:col-span-2 md:row-span-2",
              "md:col-span-1 md:row-span-2",
              "md:col-span-1 md:row-span-2",
              "md:col-span-1 md:row-span-2",
              "md:col-span-1 md:row-span-2",
            ][i];
            return (
              <motion.button
                key={p.title}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className={`group relative overflow-hidden rounded-2xl border border-border text-left ${span}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-primary font-semibold mb-2">
                    {p.tag}
                  </span>
                  <h3 className="font-display text-lg lg:text-xl font-semibold">
                    {p.title}
                  </h3>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl grid place-items-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-surface-elevated rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/80 backdrop-blur hover:bg-primary hover:text-primary-foreground transition"
              >
                <X size={18} />
              </button>
              <img
                src={projects[active].img}
                alt={projects[active].title}
                className="w-full max-h-[60vh] object-cover"
              />
              <div className="p-8">
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                  {projects[active].tag}
                </span>
                <h3 className="mt-3 font-display text-2xl lg:text-3xl font-bold">
                  {projects[active].title}
                </h3>
                <p className="mt-4 text-muted-foreground">
                  {projects[active].desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
