import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const items = [
  {
    name: "Carolina Vélez",
    role: "Directora de obra",
    company: "Constructora Andina S.A.",
    text: "El acompañamiento técnico de Solvexa fue clave para resolver un problema crítico de impermeabilización. Su asesoría nos ahorró tiempo y sobrecostos.",
  },
  {
    name: "Javier Restrepo",
    role: "Gerente de mantenimiento",
    company: "Industrias del Norte",
    text: "Más que un proveedor, un aliado técnico. Diagnosticaron el problema de corrosión y entregaron una solución completa con resultados medibles.",
  },
  {
    name: "Mariana Ortiz",
    role: "Ingeniera de proyectos",
    company: "Infraestructura Pacífico",
    text: "Profesionalismo y respaldo en cada etapa. Los pisos industriales que implementaron siguen perfectos tras tres años de operación 24/7.",
  },
];

export function Testimonios() {
  return (
    <section className="py-28 lg:py-36">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-6">Testimonios</div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05]">
            Lo que dicen nuestros{" "}
            <span className="text-primary">clientes.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-surface p-8 hover:border-primary/40 transition-colors group"
            >
              <Quote
                className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors"
                size={32}
              />
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, k) => (
                  <motion.span
                    key={k}
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + k * 0.06, type: "spring" }}
                  >
                    <Star
                      size={16}
                      className="fill-primary text-primary"
                    />
                  </motion.span>
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed">{t.text}</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-display font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">
                  {t.role} · {t.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
