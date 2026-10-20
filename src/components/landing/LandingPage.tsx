import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import thiago from "@/assets/thiago-hero.png";
import expCaio from "@/assets/experts/caio.webp";
import expCris from "@/assets/experts/cris.webp";
import expBacteria from "@/assets/experts/bacteria.webp";
import expMari from "@/assets/experts/mari.webp";
import expSamuel from "@/assets/experts/samuel.webp";
import expAtalla from "@/assets/experts/atalla.webp";
import clientA9 from "@/assets/a9-massey.webp.asset.json";
import clientCiao from "@/assets/ciao-logo.webp.asset.json";
import clientSpirit from "@/assets/spirit-new.png.asset.json";
import clientMsBrazil from "@/assets/ms-brazil-new.webp.asset.json";
import clientMjHome from "@/assets/mj-home.jpeg.asset.json";
import clientMeruoca from "@/assets/meruoca-crop.png.asset.json";
import clientLuna from "@/assets/luna-e-cafe-clean2.png.asset.json";
import clientNextt from "@/assets/nextt-house.webp.asset.json";
import clientCampevo from "@/assets/campevo.webp.asset.json";
import clientAtoba from "@/assets/atoba.jpg.asset.json";
import clientVersollato from "@/assets/clinica-versollato.webp.asset.json";
import { trackLead, TRACK_KEYS } from "@/lib/tracking";
import {
  ArrowRight, Check, X, TrendingUp, Target, Brain, Users, BarChart3, Megaphone, Workflow,
  Sparkles, Phone, ChevronDown, Mail, MapPin, Play, Lock, Clock, Plus, DollarSign, Wallet,
  Receipt, CalendarCheck, LineChart,
} from "lucide-react";

type Logo = { src: string; alt: string; h?: string };
const clientLogos: Logo[] = [
  { src: clientA9.url, alt: "A9 Máquinas Agrícolas — Massey Ferguson", h: "max-h-[58px] max-w-[128px]" },
  { src: clientCiao.url, alt: "Ciao" },
  { src: clientSpirit.url, alt: "Spirit Ventiladores", h: "max-h-[34px] max-w-[126px]" },
  { src: clientMsBrazil.url, alt: "MS Brazil", h: "max-h-[52px] max-w-[142px]" },
  { src: clientMjHome.url, alt: "MJ Home", h: "max-h-[58px] max-w-[142px]" },
  { src: clientMeruoca.url, alt: "Meruoca", h: "max-h-[58px] max-w-[128px]" },
  { src: clientLuna.url, alt: "Luna e Café" },
  { src: clientNextt.url, alt: "Nextt House", h: "max-h-[52px] max-w-[142px]" },
  { src: clientCampevo.url, alt: "Campevo" },
  { src: clientAtoba.url, alt: "Átoba", h: "max-h-[58px] max-w-[142px]" },
  { src: clientVersollato.url, alt: "Clínica Versollato", h: "max-h-[52px] max-w-[142px]" },
];

const experts = [
  { src: expCaio, name: "Caio Castro" },
  { src: expCris, name: "Cris Arcangeli" },
  { src: expBacteria, name: "Dr. Bactéria" },
  { src: expMari, name: "Mari Saad" },
  { src: expSamuel, name: "Samuel Procópio" },
  { src: expAtalla, name: "Marcio Atalla" },
];

const CTA_LABEL = "Quero minha análise estratégica";

function goToForm(e?: React.MouseEvent) {
  e?.preventDefault();
  const form = document.getElementById("formulario");
  form?.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => (document.getElementById("nome") as HTMLInputElement | null)?.focus({ preventScroll: true }), 600);
}

const btnBase =
  "group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-[16px] font-semibold text-primary-foreground shadow-cta-blue transition-all duration-200 hover:bg-primary-hover hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 disabled:opacity-70 disabled:hover:scale-100";

function CTAButton({ className = "", label = CTA_LABEL }: { className?: string; label?: string }) {
  return (
    <a href="#formulario" onClick={goToForm} className={`${btnBase} ${className}`}>
      {label}
      <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Eyebrow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-block rounded-full px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] ${
        dark ? "bg-navy-foreground/10 text-navy-foreground" : "bg-primary-soft text-primary"
      }`}
    >
      {children}
    </span>
  );
}

type Tone = "white" | "off" | "navy";
const toneCls: Record<Tone, string> = {
  white: "bg-background text-foreground",
  off: "bg-offwhite text-foreground",
  navy: "bg-navy text-navy-foreground",
};

function Section({
  id, eyebrow, title, intro, children, tone = "white", cta = false, ctaLabel,
}: {
  id?: string; eyebrow?: string; title?: string; intro?: string; children: React.ReactNode;
  tone?: Tone; cta?: boolean; ctaLabel?: string;
}) {
  const dark = tone === "navy";
  return (
    <section id={id} data-reveal className={`py-[76px] md:py-[120px] px-5 md:px-8 ${toneCls[tone]}`}>
      <div className="mx-auto max-w-[1200px]">
        {(eyebrow || title || intro) && (
          <div className="mb-12 md:mb-16 max-w-[760px] mx-auto text-center">
            {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
            {title && (
              <h2 className="mt-5 text-[28px] md:text-[42px] leading-[1.15] tracking-[-0.02em] text-balance">{title}</h2>
            )}
            {intro && (
              <p className={`mt-5 mx-auto max-w-[680px] text-[17px] md:text-[18px] leading-[1.6] ${dark ? "text-navy-foreground/75" : "text-muted-foreground"}`}>
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
        {cta && (
          <div className="mt-14 text-center">
            <CTAButton label={ctaLabel} />
          </div>
        )}
      </div>
    </section>
  );
}

const card = "rounded-[18px] border border-border bg-card shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-form";

type IconT = React.ComponentType<{ className?: string; strokeWidth?: number }>;
function IconBox({ icon: Icon, dark }: { icon: IconT; dark?: boolean }) {
  return (
    <div className={`h-11 w-11 shrink-0 rounded-xl flex items-center justify-center ${dark ? "bg-navy-foreground/10" : "bg-primary/8"}`}>
      <Icon className={`h-5 w-5 ${dark ? "text-navy-foreground" : "text-primary"}`} strokeWidth={1.6} />
    </div>
  );
}

function CheckList({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-3.5">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3">
          <span className={`mt-0.5 h-6 w-6 shrink-0 rounded-md flex items-center justify-center ${dark ? "bg-navy-foreground/12" : "bg-primary/8"}`}>
            <Check className={`h-4 w-4 ${dark ? "text-navy-foreground" : "text-primary"}`} strokeWidth={2.2} />
          </span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function CrossList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3 text-muted-foreground">
          <span className="mt-0.5 h-6 w-6 shrink-0 rounded-md bg-destructive/8 flex items-center justify-center">
            <X className="h-4 w-4 text-destructive/70" strokeWidth={2.2} />
          </span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Animated counter ---------- */
function Counter({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const m = value.match(/^(\D*?)([\d.,]+)(.*)$/);
  const [shown, setShown] = useState(value);
  useEffect(() => {
    if (!m || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, pre, num, suf] = m;
    const decimals = num.includes(",") ? num.split(",")[1].length : 0;
    const target = parseFloat(num.replace(/\./g, "").replace(",", "."));
    const fmt = (n: number) =>
      n.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    setShown(`${pre}${fmt(0)}${suf}`);
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / 1400);
        const eased = 1 - Math.pow(1 - p, 3);
        setShown(`${pre}${fmt(target * eased)}${suf}`);
        if (p < 1) requestAnimationFrame(tick);
        else setShown(value);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return <span ref={ref} className={`tabular-nums ${className}`}>{shown}</span>;
}

/* ---------- Data ---------- */
const services = [
  { icon: Workflow, title: "Funil de Vendas", desc: "Estruturação completa da jornada do cliente." },
  { icon: Megaphone, title: "Tráfego Pago", desc: "Meta Ads, Google Ads e campanhas de aquisição." },
  { icon: Brain, title: "IA Aplicada", desc: "Automações, produtividade e aceleração comercial." },
  { icon: Users, title: "CRM", desc: "Organização e gestão de oportunidades." },
  { icon: Target, title: "Processos Comerciais", desc: "SDR, closers, follow-up e pipeline." },
  { icon: TrendingUp, title: "Growth Marketing", desc: "Estratégias orientadas por crescimento." },
  { icon: BarChart3, title: "Dashboards & KPIs", desc: "Gestão baseada em dados reais." },
  { icon: Sparkles, title: "Consultoria Estratégica", desc: "Planejamento e acompanhamento executivo." },
  { icon: CalendarCheck, title: "Acompanhamento", desc: "Reuniões periódicas com foco em receita." },
];

const metrics = [
  { icon: Users, t: "Leads", d: "Contatos com perfil real de compra" },
  { icon: Target, t: "Oportunidades", d: "Leads qualificados no pipeline do comercial" },
  { icon: TrendingUp, t: "Conversões", d: "Oportunidades que viram vendas" },
  { icon: Receipt, t: "Ticket médio", d: "Quanto cada cliente deixa por compra" },
  { icon: DollarSign, t: "Receita", d: "O faturamento gerado pelo funil" },
  { icon: Wallet, t: "Lucro", d: "O que sobra depois do investimento" },
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

const benefits = [
  { t: "Mais clientes", i: Users }, { t: "Mais oportunidades", i: Target }, { t: "Mais vendas", i: TrendingUp },
  { t: "Mais previsibilidade", i: LineChart }, { t: "Mais produtividade", i: Sparkles },
  { t: "Mais controle de indicadores", i: BarChart3 }, { t: "Menos desperdício de mídia", i: Megaphone },
  { t: "Menos dependência de indicação", i: Workflow },
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

/* ---------- Form ---------- */
function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

type FieldKey = "nome" | "email" | "whatsapp" | "empresa" | "faturamento";
type FormState = Record<FieldKey, string>;

export function validate(k: FieldKey, val: string): string | undefined {
  if (k === "nome" && val.trim().length < 2) return "Informe seu nome.";
  if (k === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val.trim())) return "Digite um e-mail válido.";
  if (k === "whatsapp" && val.replace(/\D/g, "").length !== 11) return "Informe o WhatsApp com DDD (11 dígitos).";
  if (k === "empresa" && val.trim().length < 2) return "Informe o nome da empresa.";
  if (k === "faturamento" && !val) return "Selecione o faturamento mensal.";
  return undefined;
}

const KEYS: FieldKey[] = ["nome", "email", "whatsapp", "empresa", "faturamento"];

function LeadForm() {
  const navigate = useNavigate();
  const [v, setV] = useState<FormState>({ nome: "", email: "", whatsapp: "", empresa: "", faturamento: "" });
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [tracking, setTracking] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const t: Record<string, string> = {};
    TRACK_KEYS.forEach((k) => { const x = p.get(k); if (x) t[k] = x; });
    setTracking(t);
  }, []);

  const set = (k: FieldKey, val: string) => setV((s) => ({ ...s, [k]: val }));
  const err = (k: FieldKey) => (touched[k] ? validate(k, v[k]) : undefined);
  const blur = (k: FieldKey) => () => setTouched((t) => ({ ...t, [k]: true }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ nome: true, email: true, whatsapp: true, empresa: true, faturamento: true });
    const firstBad = KEYS.find((k) => validate(k, v[k]));
    if (firstBad) { document.getElementById(firstBad)?.focus(); return; }
    setSending(true);
    trackLead({ ...v, ...tracking });
    setTimeout(() => {
      navigate({ to: "/obrigado", search: { nome: v.nome.trim().split(" ")[0], ...tracking } as never });
    }, 500);
  };

  const fe = err("faturamento");

  return (
    <form
      id="formulario"
      noValidate
      onSubmit={submit}
      className="scroll-mt-28 relative w-full h-full rounded-[20px] border border-primary/25 bg-card p-6 md:p-6 shadow-form ring-4 ring-primary/5"
    >
      <h2 className="text-[22px] md:text-[24px] leading-tight">Solicite sua Análise Estratégica</h2>
      <p className="mt-1.5 text-[15px] text-muted-foreground leading-snug">
        Analisamos seu marketing, funil, CRM e comercial e devolvemos um plano de ação.
      </p>
      {Object.entries(tracking).map(([k, val]) => <input key={k} type="hidden" name={k} value={val} />)}
      <div className="mt-4 flex flex-col gap-3">
        <FloatField id="nome" label="Nome" value={v.nome} error={err("nome")} onBlur={blur("nome")} onChange={(x) => set("nome", x)} autoComplete="name" />
        <FloatField id="email" label="E-mail" type="email" value={v.email} error={err("email")} onBlur={blur("email")} onChange={(x) => set("email", x)} autoComplete="email" />
        <FloatField id="whatsapp" label="WhatsApp" type="tel" inputMode="numeric" value={v.whatsapp} error={err("whatsapp")} onBlur={blur("whatsapp")} onChange={(x) => set("whatsapp", maskPhone(x))} autoComplete="tel" />
        <FloatField id="empresa" label="Nome da empresa" value={v.empresa} error={err("empresa")} onBlur={blur("empresa")} onChange={(x) => set("empresa", x)} autoComplete="organization" />
        <div>
          <div className="relative">
            <select
              id="faturamento"
              name="faturamento"
              aria-label="Faturamento mensal"
              value={v.faturamento}
              onChange={(e) => { set("faturamento", e.target.value); setTouched((t) => ({ ...t, faturamento: true })); }}
              onBlur={blur("faturamento")}
              aria-invalid={!!fe}
              className={`h-[52px] w-full appearance-none truncate whitespace-nowrap rounded-xl border bg-card pl-4 pr-10 text-[16px] outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15 ${fe ? "border-destructive" : "border-input"} ${v.faturamento ? "text-foreground" : "text-muted-foreground"}`}
            >
              <option value="" disabled hidden>Faturamento mensal</option>
              {revenueOptions.map((o) => <option key={o} value={o} className="text-foreground">{o}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
          {fe && <p className="mt-1 text-[13px] text-destructive">{fe}</p>}
        </div>
      </div>
      <button type="submit" disabled={sending} className={`${btnBase} mt-5 w-full`}>
        {sending ? "Enviando..." : CTA_LABEL}
        {!sending && <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />}
      </button>
      <div className="mt-4 space-y-1.5 text-[13px] text-muted-foreground">
        <p className="flex items-center justify-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Leva menos de 1 minuto. Resposta em até 24h úteis.</p>
        <p className="flex items-center justify-center gap-1.5"><Lock className="h-3.5 w-3.5" /> Seus dados estão seguros.</p>
      </div>
    </form>
  );
}

function FloatField({
  id, label, value, onChange, onBlur, error, type = "text", autoComplete, inputMode,
}: {
  id: string; label: string; value: string; onChange: (v: string) => void; onBlur?: () => void;
  error?: string; type?: string; autoComplete?: string; inputMode?: "numeric";
}) {
  return (
    <div>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          inputMode={inputMode}
          value={value}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder=" "
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
          className={`peer h-[52px] w-full rounded-xl border bg-card px-4 pt-4 text-[16px] text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15 ${error ? "border-destructive" : "border-input"}`}
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[16px] text-muted-foreground transition-all duration-150 peer-focus:top-[13px] peer-focus:text-[12px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-[13px] peer-[:not(:placeholder-shown)]:text-[12px]"
        >
          {label}
        </label>
      </div>
      {error && <p id={`${id}-err`} className="mt-1 text-[13px] text-destructive">{error}</p>}
    </div>
  );
}

function VSL() {
  return (
    <button
      type="button"
      aria-label="Assistir vídeo"
      className="group relative block w-full max-w-[380px] mx-auto md:mx-0 aspect-[9/16] md:aspect-auto md:h-full md:max-w-none rounded-[20px] overflow-hidden bg-navy shadow-form"
    >
      <img src={thiago} alt="Thiago Batizeli, fundador da Omnia, apresentando a metodologia" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[78%_center]" />
      <span className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[72px] w-[72px] rounded-full bg-card flex items-center justify-center shadow-form transition-transform group-hover:scale-110">
        <Play className="h-7 w-7 ml-1 text-primary" fill="currentColor" />
      </span>
    </button>
  );
}

/* ---------- Logo marquee ---------- */
function LogoCard({ l }: { l: Logo }) {
  return (
    <div className="group/logo h-[84px] w-[186px] shrink-0 rounded-2xl border border-border bg-card flex items-center justify-center px-7">
      <img
        src={l.src}
        alt={l.alt}
        loading="lazy"
        className={`${l.h ?? "max-h-[46px] max-w-[128px]"} w-auto h-auto object-contain grayscale opacity-70 transition duration-300 group-hover/logo:grayscale-0 group-hover/logo:opacity-100`}
      />
    </div>
  );
}

function MarqueeRow({ items, dir, className = "" }: { items: Logo[]; dir: "l" | "r"; className?: string }) {
  return (
    <div className={`marquee-wrap marquee-mask overflow-hidden ${className}`}>
      <div className={`marquee-track flex w-max gap-4 ${dir === "l" ? "marquee-l" : "marquee-r"}`}>
        {[...items, ...items].map((l, i) => <LogoCard key={i} l={l} />)}
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
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

  const half = Math.ceil(clientLogos.length / 2);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden text-[17px] md:text-[18px] leading-[1.6]">
      <header className="fixed top-0 inset-x-0 z-50 h-[68px] bg-background/90 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-[1200px] h-full flex items-center justify-between px-5 md:px-8">
          <a href="#" className="text-[34px] font-bold lowercase tracking-tight text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            omnia
          </a>
          <a href="#formulario" onClick={goToForm} className="inline-flex min-h-11 items-center rounded-lg bg-primary hover:bg-primary-hover px-4 text-sm font-semibold text-primary-foreground transition-colors">
            Análise estratégica
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-[92px] md:pt-[88px] pb-12 md:pb-16 px-5 md:px-8 bg-gradient-to-b from-primary-soft via-background to-background">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mx-auto max-w-[1120px]">
            <Eyebrow>Onde inteligência vira faturamento</Eyebrow>
            <h1 className="mt-3 text-[34px] md:text-[42px] lg:text-[46px] leading-[1.08] tracking-[-0.03em] text-balance">
              Como dobrar ou triplicar as vendas da sua empresa com previsibilidade usando{" "}
              <span className="text-primary">Funil de Vendas + IA</span>
            </h1>
            <p className="mt-3 mx-auto max-w-[680px] text-[17px] md:text-[18px] text-muted-foreground">
              Assista ao vídeo abaixo e entenda como funciona a nossa estratégia e metodologia.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,320px)_minmax(0,440px)] md:justify-center md:items-stretch md:gap-10">
            <VSL />
            <div ref={formWrap} className="w-full">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <div className="bg-offwhite border-y border-border">
        <div className="mx-auto max-w-5xl grid grid-cols-3 divide-x divide-border">
          {[["R$ 1 Bi+", "gerados em vendas"], ["342", "empresas atendidas"], ["13 anos", "de experiência"]].map(([n, l]) => (
            <div key={l} className="py-10 md:py-14 px-3 text-center">
              <div className="text-[28px] md:text-[52px] font-bold leading-none text-primary tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                <Counter value={n} />
              </div>
              <div className="mt-3 text-[13px] md:text-[15px] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* AUTORIDADE */}
      <Section eyebrow="Autoridade" title="Empresas que confiam na Omnia" cta>
        <div className="motion-marquee space-y-4 -mx-5 md:mx-0">
          <MarqueeRow items={clientLogos} dir="l" className="md:hidden" />
          <MarqueeRow items={clientLogos.slice(0, half)} dir="l" className="hidden md:block" />
          <MarqueeRow items={clientLogos.slice(half)} dir="r" className="hidden md:block" />
        </div>
        <div className="motion-static hidden grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
          {clientLogos.map((l) => <LogoCard key={l.alt} l={l} />)}
        </div>

        <div className="mt-24 text-center max-w-[680px] mx-auto">
          <h3 className="text-[24px] md:text-[32px] leading-tight">Experts que lançamos na Hotmart</h3>
          <p className="mt-3 text-muted-foreground">
            Em sociedade e coprodução, criamos e gerenciamos a estratégia de marketing e vendas de grandes nomes:
          </p>
        </div>
        <div className="mt-10 -mx-5 px-5 md:mx-0 md:px-0 flex md:grid md:grid-cols-6 gap-4 overflow-x-auto snap-x snap-mandatory md:overflow-visible pb-2 [scrollbar-width:none]">
          {experts.map((e) => (
            <figure key={e.name} className="group relative snap-start shrink-0 w-[58%] sm:w-[36%] md:w-auto overflow-hidden rounded-[18px] aspect-[4/5] bg-muted">
              <img src={e.src} alt={`${e.name}, expert lançado pela Omnia na Hotmart`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/85 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3.5 text-[15px] font-semibold text-navy-foreground">{e.name}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CASE */}
      <section data-reveal className="py-[76px] md:py-[120px] px-5 md:px-8 bg-navy text-navy-foreground">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center max-w-[760px] mx-auto">
            <Eyebrow dark>Case de lançamento</Eyebrow>
            <h2 className="mt-5 text-[30px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-balance">29 máquinas agrícolas vendidas em 48 horas</h2>
            <p className="mt-5 mx-auto max-w-[680px] text-navy-foreground/75">
              A Nove Máquinas Agrícolas queria vender máquinas de alto valor em um formato que o agro ainda pouco usa: um lançamento digital. Estruturamos o funil completo, 15 dias de captação de leads e uma janela de vendas de 48 horas. Saíram tratores, plantadeiras e colheitadeiras.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {[["R$ 40 mil", "investidos em tráfego pago"], ["15 dias", "de captação"], ["48 horas", "de vendas"], ["29", "máquinas vendidas"], ["R$ 12 mi", "faturados"]].map(([n, l], i) => {
              const hero = i === 4;
              return (
                <div key={l} className={`rounded-[18px] border p-6 text-center ${hero ? "col-span-2 md:col-span-1 order-first md:order-none border-cta/40 bg-cta/10" : "border-navy-foreground/12 bg-navy-foreground/5"}`}>
                  <div className={`font-bold tracking-tight ${hero ? "text-[40px] md:text-[38px] text-cta" : "text-[26px] md:text-[30px]"}`} style={{ fontFamily: "var(--font-display)" }}>
                    <Counter value={n} />
                  </div>
                  <div className="mt-1 text-[14px] text-navy-foreground/70">{l}</div>
                </div>
              );
            })}
          </div>
          <p className="mt-12 text-center text-[24px] md:text-[34px] font-semibold leading-tight text-balance" style={{ fontFamily: "var(--font-display)" }}>
            Cada R$ 1 investido em mídia voltou <span className="text-cta">R$ 300 em vendas.</span>
          </p>
          <div className="mt-10 text-center"><CTAButton label="Quero um resultado assim" /></div>
        </div>
      </section>

      {/* PROBLEMA */}
      <Section
        eyebrow="O problema"
        title="O que está limitando o crescimento da sua empresa"
        intro="Na maioria das empresas que chegam até a Omnia, o produto é bom, o mercado existe e o time é competente. O que trava o crescimento é a forma como os clientes chegam e como eles são convertidos."
        cta
      >
        <div className="grid md:grid-cols-2 gap-5 items-stretch">
          <div className="rounded-[18px] border border-border bg-offwhite p-7 md:p-9">
            <h3 className="text-[19px] mb-6">Todos os meses, empresas perdem oportunidades porque:</h3>
            <CrossList items={["Dependem de indicação", "Não têm um funil estruturado", "Não usam o CRM direito", "Não acompanham indicadores", "Não têm previsibilidade de vendas", "Não usam IA para ganhar produtividade"]} />
          </div>
          <div className="rounded-[18px] border border-primary/30 bg-primary-soft p-7 md:p-9 shadow-soft">
            <h3 className="text-[19px] mb-6">Enquanto isso, os concorrentes mais estruturados:</h3>
            <CheckList items={["Crescem com previsibilidade todos os meses", "Têm o pipeline cheio de oportunidades qualificadas", "Convertem mais com menos investimento em mídia", "Tomam decisões com dados em tempo real", "Usam IA para acelerar todo o comercial", "Escalam sem depender de indicação"]} />
          </div>
        </div>
      </Section>

      {/* PROPOSTA — jornada */}
      <Section
        tone="off"
        eyebrow="Proposta única de valor"
        title="Nosso trabalho é medido pelo que entra no caixa"
        intro="Curtidas, alcance e seguidores ficam em segundo plano. A Omnia trabalha nos indicadores que mexem no faturamento:"
      >
        <ol className="relative grid gap-3 md:grid-cols-6 md:gap-0">
          <span aria-hidden className="hidden md:block absolute top-[38px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-cta" />
          <span aria-hidden className="md:hidden absolute top-6 bottom-6 left-[37px] w-0.5 bg-gradient-to-b from-primary/20 via-primary/60 to-cta" />
          {metrics.map(({ icon: Icon, t, d }, i) => (
            <li key={t} className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center md:px-2">
              <span className={`relative z-10 h-[52px] w-[52px] md:h-[76px] md:w-[76px] shrink-0 ml-3 md:ml-0 rounded-2xl border flex items-center justify-center bg-card shadow-soft ${i === 5 ? "border-cta/50" : "border-primary/25"}`}>
                <Icon className={`h-6 w-6 md:h-7 md:w-7 ${i === 5 ? "text-cta" : "text-primary"}`} strokeWidth={1.6} />
              </span>
              <div className="pt-1 md:pt-5">
                <h3 className="text-[18px]">{t}</h3>
                <p className="mt-1 text-[15px] text-muted-foreground leading-snug">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ENTREGAS */}
      <Section eyebrow="O que entregamos" title="Tudo que sua operação comercial precisa para escalar" cta>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {services.map(({ icon, title, desc }) => (
            <div key={title} className={`${card} p-7 hover:border-primary/50`}>
              <IconBox icon={icon} />
              <h3 className="mt-5 text-[19px]">{title}</h3>
              <p className="mt-1.5 text-[15px] text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* IA */}
      <Section tone="navy" eyebrow="IA aplicada ao crescimento" title="Transformamos Inteligência Artificial em faturamento previsível">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-navy-foreground/75 mb-8 max-w-[560px]">
              Muita empresa ainda usa IA só para escrever textos e posts. Na Omnia, a IA trabalha dentro do funil e do comercial:
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
              <CheckList dark items={["Qualificar leads", "Automatizar processos", "Reduzir retrabalho", "Melhorar campanhas"]} />
              <CheckList dark items={["Aumentar conversão", "Gerar insights estratégicos", "Acelerar a tomada de decisão", "Escalar com eficiência"]} />
            </div>
          </div>
          <DashboardMock />
        </div>
      </Section>

      {/* RESULTADOS */}
      <Section eyebrow="Resultados reais" title="Mais de uma década gerando crescimento" cta>
        <div className="hidden md:block overflow-hidden rounded-[18px] border border-border bg-card shadow-soft">
          <table className="w-full text-[15px]">
            <thead>
              <tr className="text-left text-muted-foreground border-b border-border">
                {["Cliente", "Leads", "Vendas", "Investimento", "Faturamento"].map((h) => (
                  <th key={h} className="px-6 py-4 font-semibold uppercase tracking-[0.1em] text-[12px]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cases.map((r, i) => (
                <tr key={r[0]} className={`transition-colors hover:bg-primary-soft ${i % 2 ? "bg-offwhite" : ""}`}>
                  <td className="px-6 py-5 font-semibold">{r[0]}</td>
                  <td className="px-6 py-5 tabular-nums">{r[1]}</td>
                  <td className="px-6 py-5 tabular-nums">{r[2]}</td>
                  <td className="px-6 py-5 tabular-nums text-muted-foreground">{r[3]}</td>
                  <td className="px-6 py-5 tabular-nums font-bold text-cta">{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden space-y-3">
          {cases.map((r) => (
            <div key={r[0]} className="rounded-[18px] border border-border bg-card p-5 shadow-soft">
              <div className="flex items-start justify-between gap-3">
                <div className="font-semibold leading-snug">{r[0]}</div>
              </div>
              <div className="mt-2 text-[22px] font-bold text-cta tabular-nums" style={{ fontFamily: "var(--font-display)" }}>{r[4]}</div>
              <div className="text-[12px] uppercase tracking-wider text-muted-foreground">Faturamento</div>
              <dl className="mt-4 pt-4 border-t border-border grid grid-cols-3 gap-2 text-[14px]">
                {[["Leads", r[1]], ["Vendas", r[2]], ["Investimento", r[3]]].map(([k, val]) => (
                  <div key={k} className="min-w-0">
                    <dt className="text-[12px] text-muted-foreground">{k}</dt>
                    <dd className="font-medium tabular-nums truncate">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <h3 className="mt-20 text-center text-[22px] md:text-[26px]">Segmentos onde já geramos resultados</h3>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5 max-w-[900px] mx-auto">
          {segments.map((s) => (
            <span key={s} className="rounded-full bg-offwhite border border-border px-4 py-2 text-[15px] text-foreground whitespace-nowrap">{s}</span>
          ))}
        </div>
      </Section>

      {/* PARA QUEM */}
      <Section tone="off" eyebrow="Para quem é" title="Empresas que querem crescer com previsibilidade">
        <div className="max-w-[900px] mx-auto">
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3.5">
            <CheckList items={["Faturam acima de R$ 200 mil por mês", "Têm produto ou serviço validado", "Querem escalar"]} />
            <CheckList items={["Buscam previsibilidade", "Entendem marketing como investimento", "Querem estruturar vendas de forma profissional"]} />
          </div>
          <div className="mt-10 rounded-[18px] border-l-4 border-primary bg-card p-7 md:p-8 shadow-soft">
            <p className="text-foreground text-[18px]">
              Também avaliamos empresas <span className="text-primary font-semibold">acima de R$ 100 mil por mês</span> com forte potencial de crescimento e mentalidade de expansão.
            </p>
          </div>
        </div>
      </Section>

      {/* COMO FUNCIONA */}
      <Section eyebrow="Como funciona" title="Um método em 6 etapas">
        <ol className="relative grid gap-8 md:grid-cols-6 md:gap-4">
          <span aria-hidden className="hidden md:block absolute top-7 left-[8%] right-[8%] h-0.5 bg-primary/20" />
          <span aria-hidden className="md:hidden absolute top-4 bottom-4 left-7 w-0.5 bg-primary/20" />
          {steps.map(([n, t, d]) => (
            <li key={n} className="relative flex md:flex-col md:items-center md:text-center gap-5 md:gap-4">
              <span className="relative z-10 h-14 w-14 shrink-0 rounded-full bg-card border-2 border-primary text-primary text-[20px] font-bold flex items-center justify-center" style={{ fontFamily: "var(--font-display)" }}>{n}</span>
              <div>
                <h3 className="text-[17px]">{t}</h3>
                <p className="mt-1 text-[15px] text-muted-foreground">{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* COMPARAÇÃO */}
      <Section tone="off" eyebrow="Por que a Omnia" title="Agências tradicionais x Omnia">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-[960px] mx-auto items-stretch">
          <div className="rounded-[18px] border border-border bg-card/60 p-7 md:p-9">
            <h3 className="text-[20px] mb-6 text-muted-foreground">Agências tradicionais</h3>
            <CrossList items={comparison.map((c) => c[0])} />
          </div>
          <div className="rounded-[18px] bg-navy text-navy-foreground p-7 md:p-9 shadow-form md:-translate-y-2">
            <h3 className="text-[20px] mb-6">Omnia</h3>
            <CheckList dark items={comparison.map((c) => c[1])} />
          </div>
        </div>
        <h3 className="mt-20 text-center text-[22px] md:text-[26px]">O que muda na sua empresa</h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 max-w-[1000px] mx-auto">
          {benefits.map(({ t, i: Icon }) => (
            <div key={t} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-[15px] font-medium">
              <span className="h-9 w-9 shrink-0 rounded-lg bg-primary/8 flex items-center justify-center"><Icon className="h-4.5 w-4.5 text-primary" strokeWidth={1.7} /></span>
              {t}
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Perguntas frequentes">
        <FAQ />
      </Section>

      {/* CTA FINAL */}
      <section data-reveal className="py-[76px] md:py-[120px] px-5 md:px-8 bg-navy text-navy-foreground">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[30px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-balance">Vamos colocar inteligência no seu faturamento?</h2>
          <p className="mt-5 mx-auto max-w-[620px] text-navy-foreground/75">
            Solicite uma análise estratégica e descubra como a Omnia pode estruturar um sistema previsível de crescimento para o seu negócio.
          </p>
          <div className="mt-10"><CTAButton /></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-offwhite border-t border-border px-5 md:px-8 pt-16 pb-28 md:pb-14">
        <div className="mx-auto max-w-[1200px] grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-[40px] font-bold lowercase tracking-tight leading-none" style={{ fontFamily: "var(--font-display)" }}>omnia</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">Inteligência Digital</div>
            <p className="mt-4 text-sm text-muted-foreground">Funis de Vendas • Inteligência Artificial • Growth Marketing</p>
            <p className="mt-2 text-sm text-primary font-medium">Onde Inteligência Vira Faturamento.</p>
          </div>
          <div className="text-sm text-muted-foreground space-y-3">
            <h4 className="text-foreground text-base mb-3">Contato</h4>
            <p className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-primary" /><span>(11) 99897-8018</span></p>
            <p className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-primary" /><span>thiago@omniadigital.com.br</span></p>
          </div>
          <div className="text-sm text-muted-foreground">
            <h4 className="text-foreground text-base mb-3">Endereço</h4>
            <p className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <span>The Square Open Mall, Bloco E, Sala 605, Rodovia Raposo Tavares, km 22 — Lageadinho, Cotia/SP, CEP 06709-015</span>
            </p>
          </div>
        </div>
        <div id="privacidade" className="mx-auto max-w-[1200px] mt-12 pt-6 border-t border-border text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© 2026 Omnia Inteligência Digital. Todos os direitos reservados.</span>
          <a href="#privacidade" className="underline hover:text-foreground">Política de privacidade</a>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className={`fixed bottom-0 inset-x-0 z-50 p-3 bg-background/95 backdrop-blur border-t border-border md:hidden transition-transform duration-300 ${showSticky ? "translate-y-0" : "translate-y-full"}`}>
        <CTAButton className="w-full" />
      </div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-[760px] mx-auto border-t border-border">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-border">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full min-h-14 items-center justify-between gap-6 py-5 text-left text-[17px] font-semibold"
              >
                {f.q}
                <Plus className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
              </button>
            </h3>
            <div id={`faq-${i}`} className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="pb-6 pr-10 text-muted-foreground">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="rounded-[20px] border border-navy-foreground/15 bg-navy-foreground/[0.06] backdrop-blur-xl p-6 md:p-7 shadow-form" aria-hidden>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-navy-foreground/60">Receita do funil</div>
          <div className="text-[32px] font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            <Counter value="R$ 1,08 mi" />
          </div>
        </div>
        <span className="rounded-full bg-cta/15 px-3 py-1 text-sm font-semibold text-cta">+<Counter value="212%" /></span>
      </div>
      <svg viewBox="0 0 300 120" className="mt-6 w-full h-36" preserveAspectRatio="none">
        <defs>
          <linearGradient id="dm-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[30, 60, 90].map((y) => <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="currentColor" strokeOpacity="0.08" />)}
        <path d="M0 105 L50 92 L100 96 L150 70 L200 58 L250 34 L300 12 L300 120 L0 120 Z" fill="url(#dm-fill)" />
        <path d="M0 105 L50 92 L100 96 L150 70 L200 58 L250 34 L300 12" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="draw-line" />
        <circle cx="300" cy="12" r="4" fill="var(--cta)" />
      </svg>
      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        {[["865", "Leads"], ["51", "Vendas"], ["5,9%", "Conversão"]].map(([n, l]) => (
          <div key={l} className="rounded-xl bg-navy-foreground/[0.07] py-3.5">
            <div className="text-[20px] font-semibold"><Counter value={n} /></div>
            <div className="text-xs text-navy-foreground/60">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
