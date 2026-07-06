import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import humedad from "@/assets/sol-humedad.jpg";
import estructural from "@/assets/sol-estructural.jpg";
import industrial from "@/assets/sol-industrial.jpg";
import pisos from "@/assets/sol-pisos.jpg";
import corrosion from "@/assets/sol-corrosion.jpg";
import fuego from "@/assets/sol-fuego.jpg";

const WHATSAPP = "https://wa.me/573228127001?text=Hola%20Solvexa%2C%20quiero%20conversar%20sobre%20una%20soluci%C3%B3n%20t%C3%A9cnica.";

const sols = [
  { n: "01", img: humedad, title: "Humedad y filtraciones", text: "Sistemas de impermeabilización para cubiertas, sótanos, tanques y áreas críticas." },
  { n: "02", img: estructural, title: "Reparación estructural", text: "Refuerzo y rehabilitación de concreto con morteros, anclajes y grouts de alta resistencia." },
  { n: "03", img: industrial, title: "Protección industrial", text: "Recubrimientos de alto desempeño para equipos, tanques y estructuras industriales." },
  { n: "04", img: pisos, title: "Pisos industriales", text: "Sistemas epóxicos, poliuretánicos y cementicios para alto tráfico y exigencia química." },
  { n: "05", img: corrosion, title: "Protección contra corrosión", text: "Pinturas industriales y recubrimientos anticorrosivos para ambientes severos." },
  { n: "06", img: fuego, title: "Protección pasiva contra fuego", text: "Recubrimientos intumescentes certificados para protección estructural." },
];

export function Soluciones() {
  return (
    <section id="soluciones" className="relative py-28 lg:py-36 bg-surface/40 border-y border-border">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">Problemas que solucionamos</div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05]">
              Diagnosticamos el problema.
              <br />
              <span className="text-muted-foreground">Entregamos la solución.</span>
            </h2>
          </div>
          <p className="lg:max-w-sm text-muted-foreground">
            Organizamos nuestro portafolio por necesidades reales de obra, no
            por catálogo de productos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sols.map((s, i) => (
            <motion.a
              key={s.title}
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10 transition-opacity group-hover:from-background/95" />

              <div className="absolute inset-0 flex flex-col justify-between p-7">
                <div className="flex justify-between items-start">
                  <span className="font-display text-xs font-medium text-primary tracking-widest">
                    {s.n}
                  </span>
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/40 backdrop-blur transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-xs opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {s.text}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
