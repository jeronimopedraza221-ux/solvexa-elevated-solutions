import { motion } from "framer-motion";
import construccion from "@/assets/ind-construccion.jpg";
import infraestructura from "@/assets/ind-infraestructura.jpg";
import industria from "@/assets/ind-industria.jpg";
import obras from "@/assets/ind-obras.jpg";
import mantenimiento from "@/assets/ind-mantenimiento.jpg";

const inds = [
  { img: construccion, title: "Construcción" },
  { img: infraestructura, title: "Infraestructura" },
  { img: industria, title: "Industria" },
  { img: obras, title: "Obras civiles" },
  { img: mantenimiento, title: "Mantenimiento" },
];

// Parallelogram-style diagonal mask
const SHAPE = "polygon(18% 0, 100% 0, 82% 100%, 0 100%)";

export function Industrias() {
  return (
    <section id="industrias" className="py-28 lg:py-36 overflow-hidden">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-6">Industrias que servimos</div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05]">
            Sectores donde aportamos{" "}
            <span className="text-[#85C11F]">valor real.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {inds.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative h-[420px] lg:h-[480px] cursor-pointer transition-transform duration-500 hover:-translate-y-2"
              style={{
                clipPath: SHAPE,
                WebkitClipPath: SHAPE,
              }}
            >
              {/* Image */}
              <img
                src={ind.img}
                alt={ind.title}
                loading="lazy"
                width={800}
                height={1200}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors duration-500" />
              {/* Bottom gradient for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              {/* Green accent diagonal line */}
              <div
                className="absolute left-0 top-0 h-full w-[2px] bg-[#85C11F] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ transform: "skewX(-20deg)", transformOrigin: "top left" }}
              />
              {/* Title */}
              <div className="absolute inset-x-0 bottom-0 px-6 pb-8 pl-10">
                <div className="h-[2px] w-8 bg-[#85C11F] mb-3 transition-all duration-500 group-hover:w-16" />
                <h3 className="font-display text-base lg:text-lg font-bold uppercase tracking-wider text-[#85C11F]">
                  {ind.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
