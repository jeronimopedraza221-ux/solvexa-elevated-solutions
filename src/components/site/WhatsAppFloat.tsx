import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/573000000000?text=Hola%20Solvexa%2C%20necesito%20asesor%C3%ADa."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Solvexa"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-elevate hover:scale-110 transition-transform">
        <MessageCircle size={24} />
      </span>
    </a>
  );
}
