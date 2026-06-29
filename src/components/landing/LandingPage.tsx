import { useState } from "react";
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
} from "lucide-react";

const CTA_LABEL = "Solicitar Análise Estratégica Gratuita";

function CTAButton({
  className = "",
  size = "lg",
  type = "button",
}: {
  className?: string;
  size?: "sm" | "lg";
  type?: "button" | "submit";
}) {
  const classes = `bg-gradient-cta hover:opacity-95 text-cta-foreground shadow-cta animate-pulse-cta h-14 px-8 text-base ${className}`;
  if (type === "submit") {
    return (
      <Button type="submit" size={size} className={classes}>
        {CTA_LABEL} <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    );
  }
  return (
    <Button asChild size={size} className={classes}>
      <a href="#formulario">
        {CTA_LABEL} <ArrowRight className="ml-2 h-5 w-5" />
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
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 px-6 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || intro) && (
          <div className="mb-14 max-w-3xl mx-auto text-center">
            {eyebrow && (
              <span className="inline-block text-xs font-semibold tracking-[0.25em] text-primary-glow uppercase mb-4">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.05]">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{intro}</p>
            )}
          </div>
        )}
        {children}
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

const services = [
  { icon: Workflow, title: "Funil de Vendas", desc: "Estruturação completa da jornada do cliente." },
  { icon: Megaphone, title: "Tráfego Pago", desc: "Meta Ads, Google Ads e campanhas de aquisição." },
  { icon: Brain, title: "IA Aplicada", desc: "Automações, produtividade e aceleração comercial." },
  { icon: Users, title: "CRM", desc: "Organização e gestão de oportunidades." },
  { icon: Target, title: "Processos Comerciais", desc: "SDR, Closers, Follow-up e pipeline." },
  { icon: TrendingUp, title: "Growth Marketing", desc: "Estratégias orientadas por crescimento." },
  { icon: BarChart3, title: "Dashboards & KPIs", desc: "Gestão baseada em dados reais." },
  { icon: Sparkles, title: "Consultoria Estratégica", desc: "Planejamento e acompanhamento executivo." },
];

const segments = [
  "Agronegócio", "Máquinas Agrícolas", "Fertilizantes", "Clínicas de Estética",
  "Móveis e Decoração", "Indústrias", "Restaurantes", "Padarias",
  "Construção Civil", "Crédito Estruturado", "Tecnologia", "Cibersegurança",
  "Infoprodutos e Mentorias",
];

const steps = [
  { n: "01", title: "Diagnóstico Estratégico", desc: "Analisamos sua empresa." },
  { n: "02", title: "Plano de Crescimento", desc: "Identificamos gargalos e oportunidades." },
  { n: "03", title: "Estruturação", desc: "Funis, CRM, campanhas e processos." },
  { n: "04", title: "Implementação", desc: "Execução e acompanhamento." },
  { n: "05", title: "Otimização", desc: "Melhoria contínua baseada em dados." },
  { n: "06", title: "Escala", desc: "Mais previsibilidade, vendas e lucro." },
];

const faqs = [
  { q: "A Omnia atende qualquer empresa?", a: "Não. Priorizamos empresas acima de R$ 200 mil/mês ou negócios com alto potencial de crescimento." },
  { q: "Vocês fazem apenas tráfego pago?", a: "Não. Estruturamos crescimento através de funis, CRM, IA e processos comerciais." },
  { q: "Preciso ter muitos seguidores?", a: "Não. Seguidores não são requisito para vender." },
  { q: "Vocês utilizam Inteligência Artificial?", a: "Sim. Utilizamos IA para acelerar processos, melhorar campanhas e aumentar eficiência comercial." },
  { q: "Quanto tempo leva para ver resultados?", a: "Depende do estágio da empresa, mas normalmente os primeiros ganhos aparecem nos primeiros meses de estruturação." },
];

export function LandingPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <img src={logo} alt="Omnia Inteligência Digital" className="h-20 w-auto" />
          <Button asChild size="sm" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow">
            <a href="#formulario">Análise Gratuita</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-36 pb-24 px-6 bg-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(0.58_0.24_262/0.25),transparent_50%)] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary-glow uppercase">
              <Sparkles className="h-3.5 w-3.5" /> Onde Inteligência Vira Faturamento
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Dobramos ou até triplicamos as vendas da sua empresa com previsibilidade usando{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Inteligência Artificial
              </span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Estruturamos funis de vendas, CRM, tráfego pago e processos comerciais para gerar mais clientes, mais vendas e mais lucro todos os meses.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-2xl mx-auto justify-items-center sm:justify-items-start">
              {[
                "Funis de vendas",
                "IA aplicada a vendas",
                "CRM e processos comerciais",
                "Tráfego pago",
                "Growth Marketing",
                "Automação & KPIs",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Check className="h-4 w-4 text-primary-glow" strokeWidth={3} />
                  {f}
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow text-base h-14 px-8">
                <a href="#formulario">
                  {CTA_LABEL} <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl mx-auto">
              {[
                ["R$ 1Bi+", "gerados em vendas"],
                ["342", "empresas atendidas"],
                ["13 anos", "de experiência"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-xl border border-border bg-card/50 backdrop-blur p-4">
                  <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">{v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section
        eyebrow="O Problema"
        title="O que está limitando o crescimento da sua empresa"
        intro="A maioria das empresas não tem um problema de produto, de mercado ou de equipe. Tem um problema de aquisição e conversão."
      >
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card-elevated">
            <h3 className="text-xl font-semibold mb-5 text-destructive">Todos os meses, milhares de empresas perdem oportunidades porque:</h3>
            <CrossList
              items={[
                "Dependem de indicação",
                "Não possuem um funil estruturado",
                "Não utilizam CRM corretamente",
                "Não acompanham indicadores",
                "Não têm previsibilidade de vendas",
                "Não usam IA para ganhar produtividade",
              ]}
            />
          </div>
          <div className="rounded-2xl border border-primary/30 bg-gradient-card p-8 shadow-glow">
            <h3 className="text-xl font-semibold mb-5 text-primary-glow">Enquanto isso, concorrentes mais estruturados:</h3>
            <CheckList
              items={[
                "Crescem com previsibilidade todos os meses",
                "Têm pipeline cheio de oportunidades qualificadas",
                "Convertem mais com menos investimento em mídia",
                "Usam dados para tomar decisões em tempo real",
                "Operam com IA acelerando todo o comercial",
                "Escalam sem depender de indicação",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* VSL */}
      <Section
        id="vsl"
        eyebrow="VSL — O Método Omnia"
        title="A maioria usa IA para criar conteúdo. Nós usamos IA para gerar vendas."
      >
        <div className="relative aspect-video rounded-2xl border border-primary/30 bg-black/60 overflow-hidden shadow-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.58_0.24_262/0.25),transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
          <div className="absolute inset-4 rounded-xl border border-dashed border-primary/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                <div className="ml-1 h-0 w-0 border-y-[14px] border-y-transparent border-l-[22px] border-l-primary-foreground" />
              </div>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-primary-glow">Espaço reservado para o vídeo</p>
              <p className="mt-1 text-muted-foreground text-sm">Vídeo de apresentação em breve</p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {["IA", "Funil de Vendas", "CRM", "Tráfego Pago", "Processos Comerciais", "Growth Marketing"].map((p) => (
            <div key={p} className="rounded-xl border border-border bg-card/50 px-5 py-4 text-foreground/90 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary-glow" /> {p}
            </div>
          ))}
        </div>
      </Section>

      {/* UNIQUE VALUE */}
      <Section
        eyebrow="Proposta Única de Valor"
        title="Não vendemos curtidas. Estruturamos máquinas de vendas."
        intro="Enquanto a maioria das agências se preocupa com métricas de vaidade, a Omnia trabalha diretamente nos indicadores que impactam o faturamento."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["Leads", "Oportunidades", "Conversões", "Ticket Médio", "Receita", "Lucro"].map((m) => (
            <div key={m} className="rounded-xl border border-border bg-gradient-card p-6">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">{m}</div>
              <div className="mt-2 text-sm text-muted-foreground">Indicador que move o faturamento.</div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xl text-foreground/90 font-medium">
          Nosso objetivo é simples: <span className="text-primary-glow">ajudar sua empresa a vender mais com previsibilidade.</span>
        </p>
      </Section>

      {/* SERVICES */}
      <Section eyebrow="O que entregamos" title="Tudo que sua operação comercial precisa para escalar">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/40 hover:shadow-glow transition-all">
              <div className="h-11 w-11 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* AI APPLIED */}
      <Section
        eyebrow="IA Aplicada ao Crescimento"
        title="Transformamos Inteligência Artificial em faturamento previsível"
        intro="A maioria das empresas ainda usa IA apenas para criar textos e posts. Nós vamos muito além."
      >
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
          <CheckList items={["Qualificar leads", "Automatizar processos", "Reduzir retrabalho", "Melhorar campanhas"]} />
          <CheckList items={["Aumentar conversão", "Gerar insights estratégicos", "Acelerar tomada de decisão", "Escalar com eficiência"]} />
        </div>
      </Section>

      {/* FOR WHOM */}
      <Section eyebrow="Para quem é a Omnia" title="Empresas que querem crescer com previsibilidade">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <CheckList
            items={[
              "Faturam acima de R$ 200 mil por mês",
              "Possuem produto ou serviço validado",
              "Desejam escalar",
              "Buscam previsibilidade",
              "Entendem marketing como investimento",
              "Querem estruturar vendas de forma profissional",
            ]}
          />
          <div className="rounded-2xl border border-primary/30 bg-gradient-card p-8 shadow-glow">
            <p className="text-foreground/90 leading-relaxed">
              Também avaliamos empresas <span className="text-primary-glow font-semibold">acima de R$ 100 mil/mês</span> que possuam forte potencial de crescimento e mentalidade de expansão.
            </p>
          </div>
        </div>
      </Section>

      {/* SEGMENTS */}
      <Section eyebrow="Segmentos" title="Onde já geramos resultados">
        <div className="flex flex-wrap gap-3">
          {segments.map((s) => (
            <span key={s} className="rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm text-foreground/90 hover:border-primary/40 transition-colors">
              {s}
            </span>
          ))}
        </div>
        <p className="mt-8 text-muted-foreground">
          Cada mercado possui particularidades. Mas todos precisam de <span className="text-foreground font-medium">vendas previsíveis</span>.
        </p>
      </Section>

      {/* RESULTS */}
      <Section eyebrow="Resultados Reais" title="Mais de uma década gerando crescimento">
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {[
            ["342", "empresas atendidas"],
            ["R$ 1Bi+", "gerados em vendas"],
            ["13 anos", "de mercado"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-2xl border border-border bg-gradient-card p-8 text-center shadow-card-elevated">
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">{v}</div>
              <div className="mt-2 text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-border bg-gradient-card p-8">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Cases em</p>
          <div className="flex flex-wrap gap-2">
            {["Agronegócio", "Varejo", "Serviços", "Tecnologia", "Saúde", "Construção Civil"].map((c) => (
              <span key={c} className="rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 text-sm text-primary-glow">{c}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* AUTHORITY */}
      <Section
        eyebrow="Autoridade"
        title="A confiança de quem escala de verdade"
        intro="Marcas e especialistas ligados a projetos conduzidos por Thiago Batizeli."
      >
        <img src={authorities} alt="Caio Castro, Cris Arcangeli, Dr. Bactéria, Mari Saad, Samuel Procópio, Marcio Atalla" className="w-full rounded-2xl" />
        <p className="mt-8 text-muted-foreground max-w-3xl">
          Mais de uma década aplicando Growth Marketing, Funis de Vendas e estratégias de crescimento para empresas e especialistas de alta performance.
        </p>
      </Section>

      {/* HOW IT WORKS */}
      <Section eyebrow="Como funciona" title="Um método em 6 etapas">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map(({ n, title, desc }) => (
            <div key={n} className="rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/40 transition-colors">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">{n}</div>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY OMNIA */}
      <Section eyebrow="Por que a Omnia" title="Agências tradicionais x Omnia">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-card/40 p-8">
            <h3 className="text-xl font-semibold mb-5 text-muted-foreground">Agências tradicionais</h3>
            <CrossList items={["Foco em posts", "Foco em seguidores", "Foco em alcance", "Métricas de vaidade"]} />
          </div>
          <div className="rounded-2xl border border-primary/40 bg-gradient-card p-8 shadow-glow">
            <h3 className="text-xl font-semibold mb-5 text-primary-glow">Omnia</h3>
            <CheckList
              items={[
                "Foco em vendas e crescimento",
                "Foco em indicadores e previsibilidade",
                "IA aplicada ao negócio",
                "CRM e comercial integrados",
                "Estratégia orientada por receita",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* BENEFITS */}
      <Section eyebrow="Benefícios" title="O que muda na sua empresa">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Mais clientes",
            "Mais oportunidades",
            "Mais vendas",
            "Mais previsibilidade",
            "Mais produtividade",
            "Mais controle de indicadores",
            "Menos desperdício de mídia",
            "Menos dependência de indicação",
            "Mais crescimento",
          ].map((b) => (
            <div key={b} className="rounded-xl border border-border bg-gradient-card p-5 flex items-center gap-3">
              <Check className="h-5 w-5 text-primary-glow" strokeWidth={3} />
              <span className="text-foreground/90">{b}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* FORM */}
      <section id="formulario" className="relative py-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.58_0.24_262/0.18),transparent_60%)] pointer-events-none" />
        <div className="relative mx-auto max-w-5xl grid lg:grid-cols-[1.1fr_1fr] gap-12">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.25em] text-primary-glow uppercase mb-4">
              Análise Estratégica Gratuita
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.05]">
              Receba um plano de ação para escalar sua empresa
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">Nossa equipe irá analisar:</p>
            <div className="mt-5">
              <CheckList
                items={[
                  "Marketing",
                  "Funil de vendas",
                  "CRM",
                  "Processo comercial",
                  "Aquisição de clientes",
                  "Conversão",
                  "Oportunidades de crescimento",
                ]}
              />
            </div>
          </div>
          <form
            className="rounded-2xl border border-primary/20 bg-surface-elevated p-8 shadow-elevated backdrop-blur-sm"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto h-14 w-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Check className="h-7 w-7 text-primary-foreground" strokeWidth={3} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">Solicitação recebida!</h3>
                <p className="mt-2 text-muted-foreground">Nossa equipe entrará em contato em até 24h.</p>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  <Field id="nome" label="Nome" placeholder="Seu nome completo" required />
                  <Field id="whatsapp" label="WhatsApp" placeholder="(11) 99999-9999" required />
                  <Field id="email" label="E-mail" placeholder="voce@empresa.com" type="email" required />
                  <Field id="faturamento" label="Faturamento Mensal" placeholder="Ex.: R$ 300 mil" />
                  <Field id="instagram" label="Instagram" placeholder="exemplo: @thiago_batizeli" />
                </div>
                <Button type="submit" size="lg" className="mt-6 w-full bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow h-14 text-base">
                  Quero uma Análise Estratégica Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="mt-3 text-xs text-muted-foreground text-center">Resposta em até 24h úteis.</p>
              </>
            )}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Perguntas frequentes">
        <Accordion type="single" collapsible className="rounded-2xl border border-border/60 bg-surface-elevated shadow-elevated divide-y divide-border/60 overflow-hidden">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-0 px-6">
              <AccordionTrigger className="text-left text-base hover:no-underline py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* FINAL CTA */}
      <section className="relative py-28 px-6">
        <div className="absolute inset-0 bg-hero" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.05]">
            Sua empresa não precisa de mais seguidores.
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Precisa de mais vendas.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Solicite uma análise estratégica gratuita e descubra como a Omnia pode estruturar um sistema previsível de crescimento para o seu negócio.
          </p>
          <Button asChild size="lg" className="mt-10 bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow h-14 px-10 text-base">
            <a href="#formulario">
              Agendar Reunião Estratégica <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/40 px-6 py-14">
        <div className="mx-auto max-w-6xl grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <img src={logo} alt="Omnia" className="h-24 w-auto" />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Funis de Vendas • Inteligência Artificial • Growth Marketing
            </p>
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
        <div className="mx-auto max-w-6xl mt-10 pt-6 border-t border-border text-xs text-muted-foreground">
          © {new Date().getFullYear()} Omnia Inteligência Digital. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-foreground/90">{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="bg-background/70 border-border/80 h-12 focus-visible:border-primary/60 focus-visible:ring-primary/30"
      />
    </div>
  );
}