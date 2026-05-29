import { motion } from "framer-motion";
import { Microscope, ShieldCheck, Gauge, Users } from "lucide-react";

const items = [
  {
    icon: Microscope,
    title: "Asesoría técnica",
    text: "Diagnóstico in-situ y recomendación del sistema más eficiente para cada condición de obra.",
  },
  {
    icon: ShieldCheck,
    title: "Respaldo profesional",
    text: "Productos certificados y fichas técnicas verificadas. Cumplimiento normativo internacional.",
  },
  {
    icon: Gauge,
    title: "Soluciones eficientes",
    text: "Optimizamos tiempo, costo y durabilidad seleccionando la solución correcta desde el inicio.",
  },
  {
    icon: Users,
    title: "Acompañamiento especializado",
    text: "Equipo técnico junto al cliente desde el diagnóstico hasta la implementación final.",
  },
];

export function Diferencial() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6">El diferencial Solvexa</div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05]">
              No solo suministramos{" "}
              <span className="text-primary">productos.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              En Solvexa diagnosticamos, asesoramos y acompañamos cada proyecto
              para encontrar la solución más eficiente según las necesidades
              reales del cliente.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-border bg-surface p-7 hover:border-primary/40 hover:bg-surface-elevated transition-all overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-2xl transition-all" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <it.icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {it.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
