import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import logo from "@/assets/solvexa-logo.png.asset.json";

export function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Nuevo contacto:%0A%0ANombre: ${form.name}%0AEmail: ${form.email}%0AMensaje: ${form.message}`;
    window.open(`https://wa.me/573000000000?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <footer id="contacto" className="bg-[#0A0A0A] border-t border-border pt-20 pb-10">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo.url} alt="Solvexa" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-muted-foreground max-w-md mb-8">
              Soluciones técnicas con excelencia para construcción,
              infraestructura e industria. Acompañamiento profesional en cada
              proyecto.
            </p>

            <div className="space-y-3 text-sm">
              <a href="tel:+573000000000" className="flex items-center gap-3 hover:text-primary transition">
                <Phone size={16} className="text-primary" /> +57 300 000 0000
              </a>
              <a href="mailto:contacto@solvexa.com" className="flex items-center gap-3 hover:text-primary transition">
                <Mail size={16} className="text-primary" />
                <span>contacto@solvexa.com</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" /> Bogotá, Colombia
              </div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden border border-border">
              <iframe
                title="Ubicación Solvexa"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.12%2C4.55%2C-74.00%2C4.75&layer=mapnik"
                className="w-full h-48 grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-6">
              Cuéntenos sobre su proyecto
            </h3>
            <form onSubmit={submit} className="space-y-4">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nombre completo"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition"
              />
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Correo corporativo"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition"
              />
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Describa brevemente su proyecto o necesidad técnica"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none transition resize-none"
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-glow transition-all"
              >
                <Send size={14} />
                {sent ? "¡Enviado!" : "Enviar mensaje"}
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#soluciones" className="hover:text-foreground transition">Soluciones</a>
            <a href="#industrias" className="hover:text-foreground transition">Industrias</a>
            <a href="#proyectos" className="hover:text-foreground transition">Proyectos</a>
            <a href="#asesoria" className="hover:text-foreground transition">Asesoría</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition"><Linkedin size={15} /></a>
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition"><Instagram size={15} /></a>
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition"><Facebook size={15} /></a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Solvexa — Soluciones con excelencia. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
