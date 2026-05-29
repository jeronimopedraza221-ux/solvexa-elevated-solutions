import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, Compass, Hammer, LineChart } from "lucide-react";

const steps = [
  { icon: ClipboardList, n: "01", title: "Diagnóstico", text: "Inspección técnica del proyecto y levantamiento de variables críticas en obra." },
  { icon: Compass, n: "02", title: "Asesoría especializada", text: "Recomendación del sistema más eficiente y memoria técnica detallada." },
  { icon: Hammer, n: "03", title: "Implementación", text: "Acompañamiento durante la aplicación con soporte en sitio y control de calidad." },
  { icon: LineChart, n: "04", title: "Resultados y seguimiento", text: "Verificación de desempeño, pruebas y plan de mantenimiento a largo plazo." },
];

const WHATSAPP = "https://wa.me/573000000000?text=Hola%20Solvexa%2C%20quiero%20hablar%20con%20un%20asesor%20t%C3%A9cnico.";

export function Asesoria() {
  return (
    <section id="asesoria" className="py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container-x relative">
        <div className="max-w-3xl mb-20">
          <div className="eyebrow mb-6">Asesoría técnica</div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05]">
            Soluciones respaldadas por{" "}
            <span className="text-primary">experiencia técnica.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Un proceso estructurado en cuatro fases para que cada proyecto se
            entregue con eficiencia, durabilidad y respaldo profesional.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-border" />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative flex lg:items-center mb-12 lg:mb-20 ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="lg:w-1/2 lg:px-12">
                <div className="ml-16 lg:ml-0 rounded-2xl border border-border bg-surface p-8 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                      <s.icon size={22} />
                    </div>
                    <span className="font-display text-3xl font-bold text-muted-foreground/40">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{s.text}</p>
                </div>
              </div>

              <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 top-8 lg:top-1/2 lg:-translate-y-1/2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:shadow-glow transition-all"
          >
            Hablar con un asesor
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
