const brands = [
  "TOXEMENT", "PAVCO", "AQUACELL", "VULKEM", "BECJOINT", "PROBILT",
];

export function Marcas() {
  return (
    <section className="py-20 border-y border-border bg-surface/30 overflow-hidden">
      <div className="container-x">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
          Marcas y aliados estratégicos
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="mx-10 font-display text-3xl lg:text-4xl font-bold text-muted-foreground/40 hover:text-foreground transition-colors tracking-tight"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
