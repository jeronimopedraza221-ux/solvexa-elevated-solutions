import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Diferencial } from "@/components/site/Diferencial";
import { Soluciones } from "@/components/site/Soluciones";
import { Industrias } from "@/components/site/Industrias";
import { Proyectos } from "@/components/site/Proyectos";
import { Asesoria } from "@/components/site/Asesoria";
import { Marcas } from "@/components/site/Marcas";
import { Testimonios } from "@/components/site/Testimonios";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solvexa — Soluciones técnicas con excelencia para construcción e infraestructura" },
      { name: "description", content: "Solvexa diagnostica, asesora y acompaña proyectos de construcción e industria con soluciones de impermeabilización, reparación estructural, pisos industriales y protección de alto desempeño." },
      { property: "og:title", content: "Solvexa — Soluciones con excelencia" },
      { property: "og:description", content: "Asesoría técnica especializada y soluciones de alto desempeño para construcción, infraestructura e industria." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Diferencial />
      <Soluciones />
      <Industrias />
      <Proyectos />
      <Asesoria />
      <Marcas />
      <Testimonios />
      <CtaFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
