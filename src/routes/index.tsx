import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Omnia Inteligência Digital — Onde Inteligência Vira Faturamento" },
      { name: "description", content: "Estruturamos funis de vendas, CRM, tráfego pago e IA para gerar mais clientes, mais vendas e mais lucro com previsibilidade." },
      { property: "og:title", content: "Omnia Inteligência Digital" },
      { property: "og:description", content: "Transformamos Inteligência Artificial em faturamento previsível." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});
