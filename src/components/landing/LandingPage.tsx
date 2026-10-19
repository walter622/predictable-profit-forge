import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import thiago from "@/assets/thiago-hero.png";
import expCaio from "@/assets/experts/caio.webp";
import expCris from "@/assets/experts/cris.webp";
import expBacteria from "@/assets/experts/bacteria.webp";
import expMari from "@/assets/experts/mari.webp";
import expSamuel from "@/assets/experts/samuel.webp";
import expAtalla from "@/assets/experts/atalla.webp";
import clientA9 from "@/assets/a9-maquinas-crop.png.asset.json";
import clientCiao from "@/assets/ciao-logo.webp.asset.json";
import clientSpirit from "@/assets/spirit-ventiladores.jpeg.asset.json";
import clientMsBrazil from "@/assets/ms-brazil-crop.png.asset.json";
import clientMjHome from "@/assets/mj-home.jpeg.asset.json";
import clientMeruoca from "@/assets/meruoca-crop.png.asset.json";
import clientLuna from "@/assets/luna-e-cafe-clean2.png.asset.json";
import clientNextt from "@/assets/nextt-house.webp.asset.json";
import clientCampevo from "@/assets/campevo.webp.asset.json";
import clientAtoba from "@/assets/atoba.jpg.asset.json";
import clientVersollato from "@/assets/clinica-versollato.webp.asset.json";

const clientLogos = [
  { src: clientA9.url, alt: "A9 Máquinas Agrícolas", size: "max-h-10 max-w-[170px]" },
  { src: clientCiao.url, alt: "Ciao", size: "max-h-[52px] max-w-[150px]" },
  { src: clientSpirit.url, alt: "Spirit Ventiladores", size: "max-h-10 max-w-[170px]" },
  { src: clientMsBrazil.url, alt: "MS Brazil", size: "max-h-[72px] max-w-[150px]" },
  { src: clientMjHome.url, alt: "MJ Home", size: "max-h-[72px] max-w-[150px]" },
  { src: clientMeruoca.url, alt: "Meruoca", size: "max-h-10 max-w-[170px]" },
  { src: clientLuna.url, alt: "Luna e Café", size: "max-h-[52px] max-w-[150px]" },
  { src: clientNextt.url, alt: "Nextt House", size: "max-h-10 max-w-[170px]" },
  { src: clientCampevo.url, alt: "Campevo", size: "max-h-10 max-w-[170px]" },
  { src: clientAtoba.url, alt: "Átoba", size: "max-h-[72px] max-w-[150px]" },
  { src: clientVersollato.url, alt: "Clínica Versollato", size: "max-h-[72px] max-w-[150px]" },
];

const experts = [
  { src: expCaio, name: "Caio Castro" },
  { src: expCris, name: "Cris Arcangeli" },
  { src: expBacteria, name: "Dr. Bactéria" },
  { src: expMari, name: "Mari Saad" },
  { src: expSamuel, name: "Samuel Procópio" },
  { src: expAtalla, name: "Marcio Atalla" },
];
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Check,
  X,
  TrendingUp,
  Target,
  Brain,
  Users,
  BarChart3,
  Megaphone,
  Workflow,
  Sparkles,
  Phone,
  ChevronRight,
  ChevronDown,
  Mail,
  MapPin,
  Play,
  Lock,
  Clock,
} from "lucide-react";

const CTA_LABEL = "Quero análise estratégica";

function CTAButton({
  className = "",
  label = CTA_LABEL,
  type = "button",
}: {
  className?: string;
  label?: string;
  type?: "button" | "submit";
}) {
  const classes = `bg-primary hover:bg-primary-hover text-primary-foreground rounded-[10px] h-[52px] px-7 text-[15px] font-bold uppercase tracking-wide whitespace-normal text-center transition-colors ${className}`;
  if (type === "submit") {
    return (
      <Button type="submit" size="lg" className={classes}>
        {label} <ArrowRight className="ml-1 h-5 w-5 shrink-0" />
      </Button>
    );
  }
  return (
    <Button asChild size="lg" className={classes}>
      <a href="#formulario">
        {label} <ArrowRight className="ml-1 h-5 w-5 shrink-0" />
      </a>
    </Button>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
      {children}
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  cta = false,
  ctaLabel,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
  cta?: boolean;
  ctaLabel?: string;
}) {
  return (
    <section id={id} data-reveal className={`py-16 md:py-24 px-5 md:px-6 ${className}`}>
      <div className="mx-auto max-w-[1200px]">
        {(eyebrow || title || intro) && (
          <div className="mb-10 md:mb-12 max-w-3xl mx-auto text-center">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && (
              <h2 className="mt-4 text-[26px] md:text-[36px] leading-tight text-foreground">{title}</h2>
            )}
            {intro && <p className="mt-4 text-base md:text-[17px] text-muted-foreground">{intro}</p>}
          </div>
        )}
        {children}
        {cta && (
          <div className="mt-12 text-center">
            <CTAButton label={ctaLabel} />
          </div>
        )}
      </div>
    </section>
  );
}

const card = "rounded-2xl border border-border bg-card shadow-soft";

function IconBox({ icon: Icon }: { icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }) {
  return (
    <div className="h-10 w-10 rounded-lg bg-primary-soft flex items-center justify-center">
      <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3 text-foreground">
          <Check className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={2} />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function CrossList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3 text-muted-foreground">
          <X className="mt-1 h-5 w-5 shrink-0 text-destructive" strokeWidth={2} />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

const services = [
  { icon: Workflow, title: "Funil de Vendas", desc: "Estruturação completa da jornada do cliente." },
  { icon: Megaphone, title: "Tráfego Pago", desc: "Meta Ads, Google Ads e campanhas de aquisição." },
  { icon: Brain, title: "IA Aplicada", desc: "Automações, produtividade e aceleração comercial." },
  { icon: Users, title: "CRM", desc: "Organização e gestão de oportunidades." },
  { icon: Target, title: "Processos Comerciais", desc: "SDR, closers, follow-up e pipeline." },
  { icon: TrendingUp, title: "Growth Marketing", desc: "Estratégias orientadas por crescimento." },
  { icon: BarChart3, title: "Dashboards & KPIs", desc: "Gestão baseada em dados reais." },
  { icon: Sparkles, title: "Consultoria Estratégica", desc: "Planejamento e acompanhamento executivo." },
  { icon: Check, title: "Acompanhamento", desc: "Reuniões periódicas com foco em receita." },
];

const metrics = [
  { icon: Users, t: "Leads", d: "Contatos com perfil real de compra" },
  { icon: Target, t: "Oportunidades", d: "Leads qualificados no pipeline do comercial" },
  { icon: TrendingUp, t: "Conversões", d: "Oportunidades que viram vendas" },
  { icon: BarChart3, t: "Ticket médio", d: "Quanto cada cliente deixa por compra" },
  { icon: Workflow, t: "Receita", d: "O faturamento gerado pelo funil" },
  { icon: Sparkles, t: "Lucro", d: "O que sobra depois do investimento" },
];

const cases = [
  ["Indústria B2B do agronegócio", "865", "51", "R$ 25.036,98", "R$ 1.086.703,00"],
  ["Loja de móveis", "569", "30", "R$ 7.982,13", "R$ 442.967,00"],
  ["Loja de carros", "587", "9", "R$ 12.235,58", "R$ 828.000,00"],
  ["Loja de colchões", "784", "52", "R$ 13.564,58", "R$ 218.400,00"],
  ["Restaurante japonês", "672", "201", "R$ 12.500,35", "R$ 41.205,00"],
];

const segments = [
  "Agronegócio", "Máquinas Agrícolas", "Fertilizantes", "Clínicas de Estética",
  "Móveis e Decoração", "Indústrias", "Restaurantes", "Padarias",
  "Construção Civil", "Crédito Estruturado", "Tecnologia", "Cibersegurança",
  "Infoprodutos e Mentorias",
];

const steps = [
  ["01", "Diagnóstico Estratégico", "Analisamos sua empresa."],
  ["02", "Plano de Crescimento", "Identificamos gargalos e oportunidades."],
  ["03", "Estruturação", "Funis, CRM, campanhas e processos."],
  ["04", "Implementação", "Execução e acompanhamento."],
  ["05", "Otimização", "Melhoria contínua baseada em dados."],
  ["06", "Escala", "Mais previsibilidade, vendas e lucro."],
];

const comparison = [
  ["Foco em posts", "Foco em vendas e crescimento"],
  ["Foco em seguidores", "Foco em indicadores e previsibilidade"],
  ["Foco em alcance", "IA aplicada ao negócio"],
  ["Métricas de vaidade", "CRM e comercial integrados"],
  ["Relatórios de engajamento", "Estratégia orientada por receita"],
];

const benefits = ["Mais clientes", "Mais oportunidades", "Mais vendas", "Mais previsibilidade", "Mais produtividade", "Mais controle de indicadores", "Menos desperdício de mídia", "Menos dependência de indicação"];

const faqs = [
  { q: "A análise é gratuita mesmo?", a: "Sim. A análise estratégica não tem custo e não obriga você a contratar a Omnia." },
  { q: "A Omnia atende qualquer empresa?", a: "Atendemos empresas com produto ou serviço validado que querem estruturar o crescimento. Na análise, avaliamos se faz sentido para o seu momento." },
  { q: "Vocês fazem apenas tráfego pago?", a: "Não. O tráfego é uma parte. Estruturamos funil, CRM, processo comercial, IA aplicada, dashboards e acompanhamento estratégico." },
  { q: "Preciso ter muitos seguidores?", a: "Não. O trabalho da Omnia é gerar clientes e vendas com funil e mídia paga, independentemente do tamanho do seu perfil." },
  { q: "Vocês utilizam Inteligência Artificial?", a: "Sim, para qualificar leads, automatizar processos, melhorar campanhas e acelerar a tomada de decisão do comercial." },
  { q: "Quanto tempo leva para ver resultados?", a: "Depende do ponto de partida da empresa. Na análise estratégica, apresentamos o plano e os prazos para o seu caso." },
  { q: "O que acontece depois que eu me cadastro?", a: "Nossa equipe responde em até 24h úteis pelo WhatsApp para agendar a análise." },
];

const revenueOptions = [
  "De R$ 50 mil a R$ 100 mil",
  "De R$ 100 mil a R$ 200 mil",
  "De R$ 200 mil a R$ 500 mil",
  "De R$ 500 mil a R$ 1 milhão",
  "Mais de R$ 1 milhão",
];

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

type FormState = { nome: string; email: string; whatsapp: string; empresa: string; faturamento: string };
type FieldKey = "nome" | "email" | "whatsapp" | "empresa";

function validate(k: FieldKey, val: string): string | undefined {
  if (k === "nome" && val.trim().length < 2) return "Informe seu nome.";
  if (k === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())) return "E-mail inválido.";
  if (k === "whatsapp" && val.replace(/\D/g, "").length < 10) return "Informe o WhatsApp com DDD.";
  if (k === "empresa" && val.trim().length < 2) return "Informe a empresa.";
  return undefined;
}

function LeadForm() {
  const navigate = useNavigate();
  const [v, setV] = useState<FormState>({ nome: "", email: "", whatsapp: "", empresa: "", faturamento: "" });
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});

  const set = (k: keyof FormState, val: string) => setV((s) => ({ ...s, [k]: val }));
  const err = (k: FieldKey) => (touched[k] ? validate(k, v[k]) : undefined);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const keys: FieldKey[] = ["nome", "email", "whatsapp", "empresa"];
    setTouched({ nome: true, email: true, whatsapp: true, empresa: true });
    if (keys.some((k) => validate(k, v[k]))) return;
    const utms: Record<string, string> = {};
    new URLSearchParams(window.location.search).forEach((val, key) => {
      if (key.startsWith("utm_")) utms[key] = val;
    });
    navigate({ to: "/obrigado", search: { nome: v.nome.trim().split(" ")[0], ...utms } as never });
  };

  const fieldProps = (k: FieldKey) => ({
    value: v[k],
    error: err(k),
    onBlur: () => setTouched((t) => ({ ...t, [k]: true })),
  });

  return (
    <form
      id="formulario"
      noValidate
      onSubmit={submit}
      className="scroll-mt-24 w-full rounded-2xl border border-border bg-card p-5 md:p-6 shadow-form"
    >
      <h2 className="text-[22px] leading-tight">Solicite sua Análise Estratégica</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Analisamos seu marketing, funil, CRM e comercial e devolvemos um plano de ação.
      </p>
      <div className="mt-4 flex flex-col gap-3">
        <Field id="nome" label="Nome" placeholder="Seu nome" {...fieldProps("nome")} onChange={(x) => set("nome", x)} autoComplete="name" />
        <Field id="email" label="E-mail" type="email" placeholder="voce@empresa.com" {...fieldProps("email")} onChange={(x) => set("email", x)} autoComplete="email" />
        <Field id="whatsapp" label="WhatsApp" type="tel" placeholder="(00) 00000-0000" {...fieldProps("whatsapp")} onChange={(x) => set("whatsapp", maskPhone(x))} autoComplete="tel" />
        <Field id="empresa" label="Nome da empresa" placeholder="Sua empresa" {...fieldProps("empresa")} onChange={(x) => set("empresa", x)} autoComplete="organization" />
        <div className="space-y-1.5">
          <Label htmlFor="faturamento" className="text-sm font-medium text-foreground">
            Faturamento mensal <span className="text-muted-foreground font-normal">(opcional)</span>
          </Label>
          <div className="relative">
            <select
              id="faturamento"
              value={v.faturamento}
              onChange={(e) => set("faturamento", e.target.value)}
              className={`h-12 w-full appearance-none rounded-[10px] border border-input bg-card pl-3 pr-10 text-base md:text-sm outline-none transition focus:border-primary focus:ring-[3px] focus:ring-primary/15 ${v.faturamento ? "text-foreground" : "text-muted-foreground"}`}
            >
              <option value="">Selecione o faturamento mensal</option>
              {revenueOptions.map((o) => (
                <option key={o} value={o} className="text-foreground">{o}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
      </div>
      <CTAButton type="submit" label="Quero minha análise estratégica" className="mt-4 w-full" />
      <div className="mt-3 space-y-1 text-xs text-muted-foreground">
        <p className="flex items-center justify-center gap-1.5">
          <Clock className="h-3.5 w-3.5" /> Leva menos de 1 minuto. Resposta em até 24h úteis.
        </p>
        <p className="flex items-center justify-center gap-1.5">
          <Lock className="h-3.5 w-3.5" /> Seus dados estão seguros.
        </p>
      </div>
    </form>
  );
}

function VSL() {
  return (
    <div className="w-full md:w-auto shrink-0 flex flex-col">
      <button
        type="button"
        aria-label="Assistir vídeo"
        className="group relative block w-full aspect-[9/16] max-h-[70vh] md:max-h-none md:h-full md:w-auto rounded-[20px] overflow-hidden bg-navy"
      >
        <img src={thiago} alt="Thiago Batizeli, fundador da Omnia" className="absolute inset-0 h-full w-full object-cover object-[78%_center]" />
        <span className="absolute inset-0 bg-navy/25" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-card flex items-center justify-center transition-transform group-hover:scale-105">
          <Play className="h-6 w-6 ml-1 text-foreground" fill="currentColor" />
        </span>
      </button>
      
    </div>
  );
}

export function LandingPage() {
  const formWrap = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const el = formWrap.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      setShowSticky(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("opacity-0");
            e.target.classList.add("fade-in-view");
            obs.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add("opacity-0");
        obs.observe(el);
      }
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden text-base md:text-[17px]">
      <header className="fixed top-0 inset-x-0 z-50 h-[72px] bg-background border-b border-border">
        <div className="mx-auto max-w-[1200px] h-full flex items-center justify-between px-5 md:px-6">
          <a href="#" className="font-display text-[28px] font-bold lowercase tracking-tight text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            omnia
          </a>
          <a
            href="#formulario"
            className="inline-flex rounded-lg bg-primary hover:bg-primary-hover px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors"
          >
            Análise Estratégica
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-[88px] md:pt-[84px] pb-10 md:pb-12 px-5 md:px-6 bg-gradient-to-b from-primary-soft to-background">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mx-auto">
            <Eyebrow>Onde inteligência vira faturamento</Eyebrow>
            <h1 className="mt-2 mx-auto max-w-[1180px] text-[32px] md:text-[44px] lg:text-[48px] leading-[1.15]">
              Como dobrar ou triplicar as vendas da sua empresa com previsibilidade usando{" "}
              <span className="text-primary">Funil de Vendas + IA</span>
            </h1>
            <p className="mt-2 mx-auto max-w-[720px] text-base md:text-lg text-muted-foreground">
              Assista ao vídeo abaixo e entenda como funciona a nossa estratégia e metodologia.
            </p>
          </div>

          <div className="mt-5 flex flex-col md:flex-row md:items-stretch md:justify-center gap-8 md:gap-12">
            <VSL />
            <div ref={formWrap} className="w-full md:w-[440px] shrink-0">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS STRIP */}
      <div className="bg-secondary border-y border-border">
        <div className="mx-auto max-w-5xl grid grid-cols-3 divide-x divide-border">
          {[
            ["R$ 1 Bi+", "gerados em vendas"],
            ["342", "empresas atendidas"],
            ["13 anos", "de experiência"],
          ].map(([n, l]) => (
            <div key={l} className="py-8 px-3 text-center">
              <div className="text-2xl md:text-[40px] font-bold leading-none text-primary" style={{ fontFamily: "var(--font-display)" }}>{n}</div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* AUTORIDADE */}
      <Section eyebrow="Autoridade" title="Empresas que confiam na Omnia" cta>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {clientLogos.map((c) => (
            <div key={c.alt} className="group h-24 rounded-xl border border-border bg-card p-5 flex items-center justify-center">
              <img
                src={c.src}
                alt={c.alt}
                loading="lazy"
                className={`${c.size} w-auto h-auto object-contain`}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h3 className="text-[22px] md:text-[28px]">Experts que lançamos na Hotmart</h3>
          <p className="mt-3 text-muted-foreground">
            Em sociedade e coprodução, criamos e gerenciamos a estratégia de marketing e vendas de grandes nomes:
          </p>
        </div>
        <div className="mt-8 -mx-5 px-5 md:mx-0 md:px-0 flex md:grid md:grid-cols-6 gap-4 overflow-x-auto snap-x snap-mandatory md:overflow-visible pb-2">
          {experts.map((e) => (
            <figure key={e.name} className="snap-start shrink-0 w-[42%] sm:w-[30%] md:w-auto">
              <img src={e.src} alt={e.name} loading="lazy" className="w-full aspect-[4/5] object-cover object-top rounded-2xl border border-border" />
              <figcaption className="mt-3 text-base font-medium text-foreground text-center">{e.name}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CASE NOVE */}
      <section data-reveal className="py-16 md:py-24 px-5 md:px-6 bg-gradient-to-br from-navy to-primary-hover text-navy-foreground">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block rounded-full bg-navy-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-foreground">
              Case de lançamento
            </span>
            <h2 className="mt-4 text-[26px] md:text-[36px] leading-tight">29 máquinas agrícolas vendidas em 48 horas</h2>
            <p className="mt-4 text-navy-foreground/75">
              A Nove Máquinas Agrícolas queria vender máquinas de alto valor em um formato que o agro ainda pouco usa: um lançamento digital. Estruturamos o funil completo, 15 dias de captação de leads e uma janela de vendas de 48 horas. Saíram tratores, plantadeiras e colheitadeiras.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {[
              ["R$ 40 mil", "investidos em tráfego pago"],
              ["15 dias", "de captação"],
              ["48 horas", "de vendas"],
              ["29", "máquinas vendidas"],
              ["R$ 12 mi", "faturados"],
            ].map(([n, l], i) => (
              <div key={l} className={`rounded-2xl border border-navy-foreground/12 bg-navy-foreground/8 p-5 md:p-6 text-center ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}>
                <div className={`text-2xl md:text-3xl font-bold ${i === 4 ? "text-cta" : ""}`} style={{ fontFamily: "var(--font-display)" }}>{n}</div>
                <div className="mt-1 text-sm text-navy-foreground/70">{l}</div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xl md:text-2xl font-semibold">
            Cada R$ 1 investido em mídia voltou <span className="text-cta">R$ 300 em vendas.</span>
          </p>
          <div className="mt-8 text-center"><CTAButton label="Quero um resultado assim" /></div>
        </div>
      </section>

      {/* PROBLEMA */}
      <Section
        eyebrow="O problema"
        title="O que está limitando o crescimento da sua empresa"
        intro="Na maioria das empresas que chegam até a Omnia, o produto é bom, o mercado existe e o time é competente. O que trava o crescimento é a forma como os clientes chegam e como eles são convertidos."
        cta
      >
        <div className="grid md:grid-cols-2 gap-5">
          <div className={`${card} p-7 md:p-8`}>
            <h3 className="text-lg mb-5">Todos os meses, empresas perdem oportunidades porque:</h3>
            <CrossList items={["Dependem de indicação", "Não têm um funil estruturado", "Não usam o CRM direito", "Não acompanham indicadores", "Não têm previsibilidade de vendas", "Não usam IA para ganhar produtividade"]} />
          </div>
          <div className={`${card} p-7 md:p-8`}>
            <h3 className="text-lg mb-5">Enquanto isso, os concorrentes mais estruturados:</h3>
            <CheckList items={["Crescem com previsibilidade todos os meses", "Têm o pipeline cheio de oportunidades qualificadas", "Convertem mais com menos investimento em mídia", "Tomam decisões com dados em tempo real", "Usam IA para acelerar todo o comercial", "Escalam sem depender de indicação"]} />
          </div>
        </div>
      </Section>

      {/* PROPOSTA */}
      <Section
        eyebrow="Proposta única de valor"
        title="Nosso trabalho é medido pelo que entra no caixa"
        intro="Curtidas, alcance e seguidores ficam em segundo plano. A Omnia trabalha nos indicadores que mexem no faturamento:"
        className="bg-secondary"
      >
        <div className="grid md:grid-cols-3 gap-4">
          {metrics.map(({ icon, t, d }) => (
            <div key={t} className={`${card} p-6`}>
              <IconBox icon={icon} />
              <h3 className="mt-4 text-lg">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ENTREGAS */}
      <Section eyebrow="O que entregamos" title="Tudo que sua operação comercial precisa para escalar" cta>
        <div className="grid md:grid-cols-3 gap-4">
          {services.map(({ icon, title, desc }) => (
            <div key={title} className={`${card} p-6`}>
              <IconBox icon={icon} />
              <h3 className="mt-4 text-lg">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* IA */}
      <Section eyebrow="IA aplicada ao crescimento" title="Transformamos Inteligência Artificial em faturamento previsível" className="bg-secondary">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-muted-foreground mb-6">
              Muita empresa ainda usa IA só para escrever textos e posts. Na Omnia, a IA trabalha dentro do funil e do comercial:
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              <CheckList items={["Qualificar leads", "Automatizar processos", "Reduzir retrabalho", "Melhorar campanhas"]} />
              <CheckList items={["Aumentar conversão", "Gerar insights estratégicos", "Acelerar a tomada de decisão", "Escalar com eficiência"]} />
            </div>
          </div>
          <DashboardMock />
        </div>
      </Section>

      {/* RESULTADOS */}
      <Section eyebrow="Resultados reais" title="Mais de uma década gerando crescimento" cta>
        <div className={`hidden md:block overflow-hidden ${card}`}>
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr className="text-left text-muted-foreground">
                {["Cliente", "Leads", "Vendas", "Investimento", "Faturamento"].map((h) => (
                  <th key={h} className="px-5 py-3.5 font-semibold uppercase tracking-wider text-xs">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cases.map((r, i) => (
                <tr key={r[0]} className={`border-t border-border ${i % 2 ? "bg-secondary/60" : ""}`}>
                  <td className="px-5 py-4 font-medium">{r[0]}</td>
                  <td className="px-5 py-4">{r[1]}</td>
                  <td className="px-5 py-4">{r[2]}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r[3]}</td>
                  <td className="px-5 py-4 font-semibold text-cta">{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden space-y-3">
          {cases.map((r) => (
            <div key={r[0]} className={`${card} p-5`}>
              <div className="font-semibold">{r[0]}</div>
              <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
                {[["Leads", r[1]], ["Vendas", r[2]], ["Investimento", r[3]], ["Faturamento", r[4]]].map(([k, val]) => (
                  <div key={k}>
                    <dt className="text-xs text-muted-foreground">{k}</dt>
                    <dd className={k === "Faturamento" ? "font-semibold text-cta" : ""}>{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <h3 className="mt-14 text-center text-xl">Segmentos onde já geramos resultados</h3>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {segments.map((s) => (
            <span key={s} className="rounded-full bg-secondary border border-border px-4 py-2 text-sm text-foreground">{s}</span>
          ))}
        </div>
      </Section>

      {/* PARA QUEM */}
      <Section eyebrow="Para quem é" title="Empresas que querem crescer com previsibilidade" className="bg-secondary">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <CheckList items={["Faturam acima de R$ 200 mil por mês", "Têm produto ou serviço validado", "Querem escalar", "Buscam previsibilidade", "Entendem marketing como investimento", "Querem estruturar vendas de forma profissional"]} />
          <div className={`${card} p-8`}>
            <p className="text-foreground">
              Também avaliamos empresas <span className="text-primary font-semibold">acima de R$ 100 mil por mês</span> com forte potencial de crescimento e mentalidade de expansão.
            </p>
          </div>
        </div>
      </Section>

      {/* COMO FUNCIONA */}
      <Section eyebrow="Como funciona" title="Um método em 6 etapas">
        <ol className="relative grid gap-6 md:grid-cols-6 md:gap-4">
          <span aria-hidden className="hidden md:block absolute top-5 left-[8%] right-[8%] h-px bg-border" />
          <span aria-hidden className="md:hidden absolute top-2 bottom-2 left-5 w-px bg-border" />
          {steps.map(([n, t, d]) => (
            <li key={n} className="relative flex md:flex-col md:items-center md:text-center gap-4 md:gap-3">
              <span className="relative z-10 h-10 w-10 shrink-0 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">{n}</span>
              <div>
                <h3 className="text-base">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* COMPARAÇÃO + BENEFÍCIOS */}
      <Section eyebrow="Por que a Omnia" title="Agências tradicionais x Omnia" className="bg-secondary">
        <div className="grid grid-cols-2 gap-3 md:gap-5 max-w-4xl mx-auto">
          <div className={`${card} p-5 md:p-8`}>
            <h3 className="text-base md:text-xl mb-5 text-muted-foreground">Agências tradicionais</h3>
            <CrossList items={comparison.map((c) => c[0])} />
          </div>
          <div className="rounded-2xl border-2 border-primary bg-card p-5 md:p-8 shadow-soft">
            <h3 className="text-base md:text-xl mb-5 text-primary">Omnia</h3>
            <CheckList items={comparison.map((c) => c[1])} />
          </div>
        </div>
        <h3 className="mt-14 text-center text-xl">O que muda na sua empresa</h3>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {benefits.map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-4 py-2 text-sm">
              <Check className="h-4 w-4 text-primary" strokeWidth={2} /> {b}
            </span>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Perguntas frequentes">
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 text-base">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* CTA FINAL */}
      <section data-reveal className="pb-16 md:pb-24 px-5 md:px-6">
        <div className="mx-auto max-w-[1200px] rounded-2xl bg-primary text-primary-foreground px-6 py-12 md:py-16 text-center">
          <h2 className="text-[26px] md:text-[36px] leading-tight max-w-3xl mx-auto">
            Vamos colocar inteligência no seu faturamento?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/85">
            Solicite uma análise estratégica e descubra como a Omnia pode estruturar um sistema previsível de crescimento para o seu negócio.
          </p>
          <div className="mt-8"><CTAButton className="bg-card text-primary hover:bg-card/90" /></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary px-5 md:px-6 pt-14 pb-28 md:pb-14">
        <div className="mx-auto max-w-[1200px] grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <div className="text-[32px] font-bold lowercase tracking-tight leading-none" style={{ fontFamily: "var(--font-display)" }}>omnia</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">Inteligência Digital</div>
            <p className="mt-4 text-sm text-muted-foreground">Funis de Vendas • Inteligência Artificial • Growth Marketing</p>
            <p className="mt-2 text-sm text-primary font-medium">Onde Inteligência Vira Faturamento.</p>
          </div>
          <div className="text-sm text-muted-foreground space-y-3">
            <h4 className="text-foreground text-base mb-2">Contato</h4>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>(11) 99897-8018</span></p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /><span>thiago@omniadigital.com.br</span></p>
          </div>
          <div className="text-sm text-muted-foreground">
            <h4 className="text-foreground text-base mb-2">Endereço</h4>
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>The Square Open Mall, Bloco E, Sala 605, Rodovia Raposo Tavares, km 22 — Lageadinho, Cotia/SP, CEP 06709-015</span>
            </p>
          </div>
        </div>
        <div id="privacidade" className="mx-auto max-w-[1200px] mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© 2026 Omnia Inteligência Digital. Todos os direitos reservados.</span>
          <a href="#privacidade" className="underline hover:text-foreground">Política de privacidade</a>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div
        className={`fixed bottom-0 inset-x-0 z-50 p-3 bg-background border-t border-border md:hidden transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href="#formulario"
          className="flex w-full h-[52px] items-center justify-center gap-2 rounded-[10px] bg-primary hover:bg-primary-hover text-sm font-bold uppercase text-primary-foreground"
        >
          {CTA_LABEL} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function DashboardMock() {
  const bars = [38, 52, 46, 64, 72, 88];
  return (
    <div className={`${card} p-6`} aria-hidden>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-muted-foreground">Receita do funil</div>
          <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>R$ 1,08 mi</div>
        </div>
        <span className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary">+212%</span>
      </div>
      <div className="mt-6 flex items-end gap-3 h-36">
        {bars.map((h, i) => (
          <div key={i} className={`flex-1 rounded-md ${i === bars.length - 1 ? "bg-primary" : "bg-primary-soft"}`} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        {[["865", "Leads"], ["51", "Vendas"], ["5,9%", "Conversão"]].map(([n, l]) => (
          <div key={l} className="rounded-lg bg-secondary py-3">
            <div className="font-semibold">{n}</div>
            <div className="text-xs text-muted-foreground">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({
  id, label, placeholder, value, onChange, onBlur, error, type = "text", autoComplete,
}: {
  id: string; label: string; placeholder: string; value: string;
  onChange: (v: string) => void; onBlur?: () => void; error?: string; type?: string; autoComplete?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-foreground">{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`h-12 rounded-[10px] bg-card text-base md:text-sm ${error ? "border-destructive" : "border-input"} focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-primary/15`}
      />
      {error && <p id={`${id}-err`} className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
