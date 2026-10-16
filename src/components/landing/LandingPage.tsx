import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import logo from "@/assets/omnia-logo.png";
import authorities from "@/assets/authority-faces.png";
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
  const classes = `bg-gradient-cta hover:opacity-95 text-cta-foreground shadow-cta animate-pulse-cta h-auto min-h-14 py-4 px-8 text-base font-bold uppercase tracking-wide whitespace-normal text-center ${className}`;
  if (type === "submit") {
    return (
      <Button type="submit" size="lg" className={classes}>
        {label} <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
      </Button>
    );
  }
  return (
    <Button asChild size="lg" className={classes}>
      <a href="#formulario">
        {label} <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
      </a>
    </Button>
  );
}

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  cta = true,
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
    <section id={id} className={`relative py-20 md:py-24 px-6 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || intro) && (
          <div className="mb-12 max-w-3xl mx-auto text-center">
            {eyebrow && (
              <span className="inline-block text-xs font-semibold tracking-[0.25em] text-primary-glow uppercase mb-4">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-[1.08]">{title}</h2>
            )}
            {intro && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{intro}</p>}
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

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3 text-foreground/90">
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-primary">
            <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
          </span>
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
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/20">
            <X className="h-3 w-3 text-destructive" strokeWidth={3} />
          </span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

const tags = [
  "Funis de vendas",
  "IA aplicada a vendas",
  "CRM e processos comerciais",
  "Tráfego pago",
  "Growth Marketing",
  "Automação & KPIs",
];

const services = [
  { icon: Workflow, title: "Funil de Vendas", desc: "Estruturação completa da jornada do cliente." },
  { icon: Megaphone, title: "Tráfego Pago", desc: "Meta Ads, Google Ads e campanhas de aquisição." },
  { icon: Brain, title: "IA Aplicada", desc: "Automações, produtividade e aceleração comercial." },
  { icon: Users, title: "CRM", desc: "Organização e gestão de oportunidades." },
  { icon: Target, title: "Processos Comerciais", desc: "SDR, closers, follow-up e pipeline." },
  { icon: TrendingUp, title: "Growth Marketing", desc: "Estratégias orientadas por crescimento." },
  { icon: BarChart3, title: "Dashboards & KPIs", desc: "Gestão baseada em dados reais." },
  { icon: Sparkles, title: "Consultoria Estratégica", desc: "Planejamento e acompanhamento executivo." },
];

const metrics = [
  ["Leads", "Contatos com perfil real de compra"],
  ["Oportunidades", "Leads qualificados no pipeline do comercial"],
  ["Conversões", "Oportunidades que viram vendas"],
  ["Ticket médio", "Quanto cada cliente deixa por compra"],
  ["Receita", "O faturamento gerado pelo funil"],
  ["Lucro", "O que sobra depois do investimento"],
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

function LeadForm() {
  const navigate = useNavigate();
  const [v, setV] = useState<FormState>({ nome: "", email: "", whatsapp: "", empresa: "", faturamento: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const set = (k: keyof FormState, val: string) => {
    setV((s) => ({ ...s, [k]: val }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: typeof errors = {};
    if (v.nome.trim().length < 2) err.nome = "Informe seu nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) err.email = "Informe um e-mail válido.";
    if (v.whatsapp.replace(/\D/g, "").length < 10) err.whatsapp = "Informe um WhatsApp com DDD.";
    if (v.empresa.trim().length < 2) err.empresa = "Informe o nome da empresa.";
    setErrors(err);
    if (Object.keys(err).length) return;
    // UTMs da URL atual são preservados na página de obrigado
    const utms: Record<string, string> = {};
    new URLSearchParams(window.location.search).forEach((val, key) => {
      if (key.startsWith("utm_")) utms[key] = val;
    });
    navigate({ to: "/obrigado", search: { nome: v.nome.trim().split(" ")[0], ...utms } as never });
  };

  return (
    <form
      id="formulario"
      noValidate
      onSubmit={submit}
      className="scroll-mt-28 rounded-2xl border border-primary/25 bg-surface-elevated p-6 md:p-8 shadow-elevated"
    >
      <h2 className="text-2xl md:text-3xl font-bold leading-tight">Solicite sua Análise Estratégica</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Nossa equipe analisa seu marketing, funil, CRM e processo comercial e devolve um plano de ação.
      </p>
      <div className="mt-6 space-y-4">
        <Field id="nome" label="Nome" placeholder="Seu nome" value={v.nome} onChange={(x) => set("nome", x)} error={errors.nome} autoComplete="name" />
        <Field id="email" label="E-mail" type="email" placeholder="Seu melhor e-mail" value={v.email} onChange={(x) => set("email", x)} error={errors.email} autoComplete="email" />
        <Field id="whatsapp" label="WhatsApp" type="tel" placeholder="(00) 00000-0000" value={v.whatsapp} onChange={(x) => set("whatsapp", maskPhone(x))} error={errors.whatsapp} autoComplete="tel" />
        <Field id="empresa" label="Nome da empresa" placeholder="Nome da sua empresa" value={v.empresa} onChange={(x) => set("empresa", x)} error={errors.empresa} autoComplete="organization" />
        <fieldset>
          <legend className="text-sm font-medium text-foreground/90 mb-2">
            Faturamento mensal <span className="text-muted-foreground font-normal">(opcional)</span>
          </legend>
          <div className="grid gap-2">
            {revenueOptions.map((o) => {
              const active = v.faturamento === o;
              return (
                <button
                  type="button"
                  key={o}
                  aria-pressed={active}
                  onClick={() => set("faturamento", active ? "" : o)}
                  className={`rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                    active
                      ? "border-primary bg-primary/15 text-foreground"
                      : "border-border/80 bg-background/60 text-foreground/85 hover:border-primary/50"
                  }`}
                >
                  {o}
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>
      <CTAButton type="submit" className="mt-6 w-full" />
      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <Clock className="h-3.5 w-3.5" /> Leva menos de 1 minuto. Resposta em até 24h úteis.
      </p>
      <p className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground/80">
        <Lock className="h-3 w-3" /> Seus dados estão seguros e não serão compartilhados.{" "}
        <a href="#privacidade" className="underline hover:text-foreground">Política de privacidade</a>
      </p>
    </form>
  );
}

function VSL() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] aspect-[9/16] rounded-2xl border border-primary/30 bg-card overflow-hidden shadow-glow">
      <div className="absolute inset-0 bg-hero" />
      <button
        type="button"
        aria-label="Assistir vídeo"
        className="absolute inset-0 flex flex-col items-center justify-center gap-4"
      >
        <span className="h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
          <Play className="h-8 w-8 ml-1 text-primary-foreground" fill="currentColor" />
        </span>
        <span className="text-xs uppercase tracking-[0.25em] text-primary-glow">Assista ao vídeo</span>
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
      // mostra quando o formulário saiu da tela por cima (usuário já passou dele)
      setShowSticky(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
          <img src={logo} alt="Omnia Inteligência Digital" className="h-14 md:h-20 w-auto" />
          <a
            href="#formulario"
            className="hidden sm:inline-flex rounded-md bg-gradient-cta px-5 py-2.5 text-sm font-bold uppercase text-cta-foreground shadow-cta"
          >
            Análise estratégica
          </a>
        </div>
      </header>

      {/* 1. HERO */}
      <section className="relative pt-28 md:pt-36 pb-16 px-6 bg-hero overflow-hidden">
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary-glow uppercase">
              <Sparkles className="h-3.5 w-3.5" /> Onde Inteligência Vira Faturamento
            </span>
            <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-[1.08]">
              Como dobrar ou triplicar as vendas da sua empresa com previsibilidade usando{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Funil de Vendas + IA</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Utilizamos a metodologia <strong className="text-foreground">Funil de Vendas Previsível</strong>, que envolve CRM, gestão de tráfego pago, processos comerciais e gestão de CRM, para atrair novos clientes, gerar mais vendas e mais lucro todos os meses. Solicite um diagnóstico estratégico.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
            <div><VSL /></div>
            <div ref={formWrap}><LeadForm /></div>
          </div>
        </div>
      </section>

      {/* NUMBERS STRIP */}
      <div className="border-y border-border bg-card/60">
        <div className="mx-auto max-w-5xl grid grid-cols-3 divide-x divide-border">
          {[
            ["R$ 1 Bi+", "gerados em vendas"],
            ["342", "empresas atendidas"],
            ["13 anos", "de experiência"],
          ].map(([n, l]) => (
            <div key={l} className="py-6 px-3 text-center">
              <div className="text-2xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">{n}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. AUTORIDADE */}
      <Section eyebrow="Autoridade" title="Quem já cresce com a Omnia">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold">Experts que lançamos na Hotmart</h3>
          <p className="mt-3 text-muted-foreground">
            Em sociedade e coprodução, criamos e gerenciamos a estratégia de marketing e vendas de grandes nomes:
          </p>
        </div>
        <img
          src={authorities}
          loading="lazy"
          alt="Márcio Atalla, Caio Castro, Cris Arcangeli, Mariana Saad, Samuel Procópio e Dr. Bactéria"
          className="mt-8 w-full rounded-2xl"
        />
        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">Empresas que confiam na Omnia</h3>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Nove Máquinas Agrícolas", "MJ Home", "Flyer Consulting", "Gram Vacinas"].map((c) => (
              <div key={c} className="rounded-xl border border-border bg-card/60 px-4 py-6 font-semibold text-foreground/85">
                {c}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. CASE NOVE */}
      <Section className="bg-card/30" ctaLabel="Quero um resultado assim na minha empresa">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-cta/15 border border-cta/40 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-cta-glow uppercase">
            Case de lançamento
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-[1.08]">
            29 máquinas agrícolas vendidas em <span className="bg-gradient-primary bg-clip-text text-transparent">48 horas</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            A Nove Máquinas Agrícolas queria vender máquinas de alto valor em um formato que o agro ainda pouco usa: um lançamento digital. Estruturamos o funil completo, 15 dias de captação de leads e uma janela de vendas de 48 horas. Saíram tratores, plantadeiras e colheitadeiras.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["R$ 40 mil", "investidos em tráfego pago"],
            ["15 dias", "de captação"],
            ["48 horas", "de vendas"],
            ["29", "máquinas vendidas"],
            ["R$ 12 mi", "faturados"],
          ].map(([n, l], i) => (
            <div
              key={l}
              className={`rounded-2xl border p-6 text-center ${
                i === 4 ? "col-span-2 md:col-span-1 border-cta/50 bg-cta/10 shadow-cta" : "border-border bg-gradient-card"
              }`}
            >
              <div className={`text-3xl md:text-4xl font-bold ${i === 4 ? "text-cta-glow" : "bg-gradient-primary bg-clip-text text-transparent"}`}>{n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xl md:text-2xl font-semibold">
          Cada R$ 1 investido em mídia voltou <span className="text-cta-glow">R$ 300 em vendas.</span>
        </p>
      </Section>

      {/* 4. PROBLEMA */}
      <Section
        eyebrow="O problema"
        title="O que está limitando o crescimento da sua empresa"
        intro="Na maioria das empresas que chegam até a Omnia, o produto é bom, o mercado existe e o time é competente. O que trava o crescimento é a forma como os clientes chegam e como eles são convertidos."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card-elevated">
            <h3 className="text-lg font-semibold mb-5 text-destructive">Todos os meses, empresas perdem oportunidades porque:</h3>
            <CrossList items={["Dependem de indicação", "Não têm um funil estruturado", "Não usam o CRM direito", "Não acompanham indicadores", "Não têm previsibilidade de vendas", "Não usam IA para ganhar produtividade"]} />
          </div>
          <div className="rounded-2xl border border-primary/30 bg-gradient-card p-8 shadow-glow">
            <h3 className="text-lg font-semibold mb-5 text-primary-glow">Enquanto isso, os concorrentes mais estruturados:</h3>
            <CheckList items={["Crescem com previsibilidade todos os meses", "Têm o pipeline cheio de oportunidades qualificadas", "Convertem mais com menos investimento em mídia", "Tomam decisões com dados em tempo real", "Usam IA para acelerar todo o comercial", "Escalam sem depender de indicação"]} />
          </div>
        </div>
      </Section>

      {/* 5. PROPOSTA */}
      <Section
        eyebrow="Proposta única de valor"
        title="Nosso trabalho é medido pelo que entra no caixa"
        intro="Curtidas, alcance e seguidores ficam em segundo plano. A Omnia trabalha nos indicadores que mexem no faturamento:"
        className="bg-card/30"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map(([m, d]) => (
            <div key={m} className="rounded-xl border border-border bg-gradient-card p-6">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">{m}</div>
              <div className="mt-2 text-sm text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xl font-medium">
          Nosso objetivo é simples: <span className="text-primary-glow">fazer sua empresa vender mais, com previsibilidade.</span>
        </p>
      </Section>

      {/* 6. ENTREGAS */}
      <Section eyebrow="O que entregamos" title="Tudo que sua operação comercial precisa para escalar">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/40 transition-colors">
              <div className="h-11 w-11 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. IA */}
      <Section
        eyebrow="IA aplicada ao crescimento"
        title="Transformamos Inteligência Artificial em faturamento previsível"
        intro="Muita empresa ainda usa IA só para escrever textos e posts. Na Omnia, a IA trabalha dentro do funil e do comercial:"
        className="bg-card/30"
      >
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-x-12 gap-y-3">
          <CheckList items={["Qualificar leads", "Automatizar processos", "Reduzir retrabalho", "Melhorar campanhas"]} />
          <CheckList items={["Aumentar conversão", "Gerar insights estratégicos", "Acelerar a tomada de decisão", "Escalar com eficiência"]} />
        </div>
      </Section>

      {/* 8. RESULTADOS */}
      <Section eyebrow="Resultados reais" title="Mais de uma década gerando crescimento">
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[["R$ 1 Bi+", "gerados em vendas"], ["342", "empresas atendidas"], ["13 anos", "de mercado"]].map(([n, l]) => (
            <div key={l} className="rounded-2xl border border-border bg-gradient-card p-5 md:p-8 text-center">
              <div className="text-2xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">{n}</div>
              <div className="mt-2 text-xs md:text-base text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
        <div className="overflow-x-auto rounded-2xl border border-border bg-surface-elevated">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="text-left text-muted-foreground border-b border-border">
                {["Cliente", "Leads", "Vendas", "Investimento", "Faturamento"].map((h) => (
                  <th key={h} className="px-5 py-4 font-semibold uppercase tracking-wider text-xs">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cases.map((r) => (
                <tr key={r[0]} className="border-b border-border/60 last:border-0">
                  <td className="px-5 py-4 font-medium">{r[0]}</td>
                  <td className="px-5 py-4">{r[1]}</td>
                  <td className="px-5 py-4">{r[2]}</td>
                  <td className="px-5 py-4 text-muted-foreground">{r[3]}</td>
                  <td className="px-5 py-4 font-bold text-cta-glow">{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="mt-14 text-center text-xl font-semibold">Segmentos onde já geramos resultados</h3>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {segments.map((s) => (
            <span key={s} className="rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm text-foreground/90">{s}</span>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground">
          Cada mercado tem suas particularidades. Todos precisam de <span className="text-foreground font-medium">vendas previsíveis</span>.
        </p>
      </Section>

      {/* 9. PARA QUEM */}
      <Section eyebrow="Para quem é" title="Empresas que querem crescer com previsibilidade" className="bg-card/30">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <CheckList items={["Faturam acima de R$ 200 mil por mês", "Têm produto ou serviço validado", "Querem escalar", "Buscam previsibilidade", "Entendem marketing como investimento", "Querem estruturar vendas de forma profissional"]} />
          <div className="rounded-2xl border border-primary/30 bg-gradient-card p-8 shadow-glow">
            <p className="text-foreground/90 leading-relaxed">
              Também avaliamos empresas <span className="text-primary-glow font-semibold">acima de R$ 100 mil por mês</span> com forte potencial de crescimento e mentalidade de expansão.
            </p>
          </div>
        </div>
      </Section>

      {/* 10. COMO FUNCIONA */}
      <Section eyebrow="Como funciona" title="Um método em 6 etapas">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map(([n, t, d]) => (
            <div key={n} className="rounded-2xl border border-border bg-gradient-card p-6">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">{n}</div>
              <h3 className="mt-3 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 11. POR QUE */}
      <Section eyebrow="Por que a Omnia" title="Agências tradicionais x Omnia" className="bg-card/30">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-border bg-card/40 p-8">
            <h3 className="text-xl font-semibold mb-5 text-muted-foreground">Agências tradicionais</h3>
            <CrossList items={["Foco em posts", "Foco em seguidores", "Foco em alcance", "Métricas de vaidade"]} />
          </div>
          <div className="rounded-2xl border border-primary/40 bg-gradient-card p-8 shadow-glow">
            <h3 className="text-xl font-semibold mb-5 text-primary-glow">Omnia</h3>
            <CheckList items={["Foco em vendas e crescimento", "Foco em indicadores e previsibilidade", "IA aplicada ao negócio", "CRM e comercial integrados", "Estratégia orientada por receita"]} />
          </div>
        </div>
      </Section>

      {/* 12. O QUE MUDA */}
      <Section eyebrow="Benefícios" title="O que muda na sua empresa">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Mais clientes", "Mais oportunidades", "Mais vendas", "Mais previsibilidade", "Mais produtividade", "Mais controle de indicadores", "Menos desperdício de mídia", "Menos dependência de indicação"].map((b) => (
            <div key={b} className="rounded-xl border border-border bg-gradient-card p-5 flex items-center gap-3">
              <Check className="h-5 w-5 shrink-0 text-primary-glow" strokeWidth={3} />
              <span className="text-foreground/90">{b}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 13. FAQ */}
      <Section eyebrow="FAQ" title="Perguntas frequentes" className="bg-card/30">
        <Accordion type="single" collapsible className="max-w-3xl mx-auto rounded-2xl border border-border/60 bg-surface-elevated shadow-elevated divide-y divide-border/60 overflow-hidden">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-0 px-6">
              <AccordionTrigger className="text-left text-base hover:no-underline py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 text-base">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* 14. CTA FINAL */}
      <section className="relative py-24 px-6 bg-hero">
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.08]">
            Vamos colocar <span className="bg-gradient-primary bg-clip-text text-transparent">inteligência</span> no seu faturamento?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Solicite uma análise estratégica e descubra como a Omnia pode estruturar um sistema previsível de crescimento para o seu negócio.
          </p>
          <div className="mt-10"><CTAButton /></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/40 px-6 pt-14 pb-28 md:pb-14">
        <div className="mx-auto max-w-6xl grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <img src={logo} alt="Omnia" loading="lazy" className="h-24 w-auto" />
            <p className="mt-4 text-sm text-muted-foreground">Funis de Vendas • Inteligência Artificial • Growth Marketing</p>
            <p className="mt-3 text-sm text-primary-glow font-medium">Onde Inteligência Vira Faturamento.</p>
          </div>
          <div className="text-sm text-muted-foreground space-y-3">
            <h4 className="text-foreground font-semibold mb-2">Contato</h4>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>(11) 99897-8018</span></p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /><span>thiago@omniadigital.com.br</span></p>
          </div>
          <div className="text-sm text-muted-foreground">
            <h4 className="text-foreground font-semibold mb-2">Endereço</h4>
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>The Square Open Mall, Bloco E, Sala 605, Rodovia Raposo Tavares, km 22 — Lageadinho, Cotia/SP, CEP 06709-015</span>
            </p>
          </div>
        </div>
        <div id="privacidade" className="mx-auto max-w-6xl mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© 2026 Omnia Inteligência Digital. Todos os direitos reservados.</span>
          <a href="#privacidade" className="underline hover:text-foreground">Política de privacidade</a>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div
        className={`fixed bottom-0 inset-x-0 z-50 p-3 bg-background/90 backdrop-blur border-t border-border lg:hidden transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href="#formulario"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-cta py-4 text-sm font-bold uppercase text-cta-foreground shadow-cta animate-pulse-cta"
        >
          Quero análise estratégica <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function Field({
  id, label, placeholder, value, onChange, error, type = "text", autoComplete,
}: {
  id: string; label: string; placeholder: string; value: string;
  onChange: (v: string) => void; error?: string; type?: string; autoComplete?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-foreground/90">{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`bg-background/70 h-12 ${error ? "border-destructive" : "border-border/80"} focus-visible:border-primary/60 focus-visible:ring-primary/30`}
      />
      {error && <p id={`${id}-err`} className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
