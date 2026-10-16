import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import logo from "@/assets/omnia-logo.png";

export const Route = createFileRoute("/obrigado")({
  validateSearch: (s: Record<string, unknown>) => ({ nome: typeof s.nome === "string" ? s.nome : undefined }),
  head: () => ({
    meta: [
      { title: "Solicitação recebida — Omnia Inteligência Digital" },
      { name: "description", content: "Recebemos sua solicitação de Análise Estratégica Gratuita. Fale agora com a Omnia pelo WhatsApp." },
      { property: "og:title", content: "Solicitação recebida — Omnia" },
      { property: "og:description", content: "Nossa equipe responde em até 24h úteis pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Obrigado,
});

function Obrigado() {
  const { nome } = Route.useSearch();
  const msg = encodeURIComponent(
    `Olá! ${nome ? `Sou ${nome} e ` : ""}acabei de solicitar a Análise Estratégica Gratuita da Omnia.`,
  );
  return (
    <div className="min-h-screen bg-hero flex items-center justify-center px-6 py-16">
      <div className="max-w-xl w-full text-center rounded-2xl border border-primary/25 bg-surface-elevated p-10 shadow-elevated">
        <img src={logo} alt="Omnia Inteligência Digital" className="h-16 w-auto mx-auto" />
        <div className="mt-8 mx-auto h-16 w-16 rounded-full bg-gradient-cta flex items-center justify-center shadow-cta">
          <Check className="h-8 w-8 text-cta-foreground" strokeWidth={3} />
        </div>
        <h1 className="mt-6 text-3xl md:text-4xl font-bold">
          {nome ? `${nome}, recebemos` : "Recebemos"} sua solicitação!
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Nossa equipe responde em até 24h úteis pelo WhatsApp para agendar sua análise. Quer adiantar?
        </p>
        <a
          href={`https://wa.me/5511998978018?text=${msg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-cta px-8 py-4 font-bold uppercase text-cta-foreground shadow-cta animate-pulse-cta"
        >
          <MessageCircle className="h-5 w-5" /> Falar agora no WhatsApp
        </a>
        <div className="mt-6">
          <Link to="/" className="text-sm text-muted-foreground underline hover:text-foreground">Voltar ao site</Link>
        </div>
      </div>
    </div>
  );
}
