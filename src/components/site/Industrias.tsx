import { motion } from "framer-motion";
import construccion from "@/assets/ind-construccion.jpg";
import infraestructura from "@/assets/ind-infraestructura.jpg";
import industria from "@/assets/ind-industria.jpg";
import obras from "@/assets/ind-obras.jpg";
import mantenimiento from "@/assets/ind-mantenimiento.jpg";

const inds = [
  { img: construccion, title: "Construcción", text: "Edificación residencial, comercial y corporativa." },
  { img: infraestructura, title: "Infraestructura", text: "Puentes, túneles, vías y obras de gran escala." },
  { img: industria, title: "Industria", text: "Plantas de proceso, refinerías y manufactura." },
  { img: obras, title: "Obras civiles", text: "Presas, acueductos y obras hidráulicas." },
  { img: mantenimiento, title: "Mantenimiento industrial", text: "Programas de protección y vida útil extendida." },
];

export function Industrias() {
  return (
    <section id="industrias" className="py-28 lg:py-36">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-6">Industrias que servimos</div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05]">
            Sectores donde aportamos{" "}
            <span className="text-primary">valor real.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {inds.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-border"
            >
              <img
                src={ind.img}
                alt={ind.title}
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg font-semibold">
                  {ind.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500">
                  {ind.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
