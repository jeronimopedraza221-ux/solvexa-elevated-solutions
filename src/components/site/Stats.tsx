import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 480, suffix: "+", label: "Proyectos ejecutados" },
  { value: 220, suffix: "+", label: "Clientes corporativos" },
  { value: 18, suffix: " años", label: "Experiencia técnica" },
  { value: 35, suffix: "+", label: "Soluciones implementadas" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.08 }}
          className="bg-background/80 backdrop-blur-md p-6 lg:p-8"
        >
          <div className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            <Counter to={s.value} suffix={s.suffix} />
          </div>
          <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
