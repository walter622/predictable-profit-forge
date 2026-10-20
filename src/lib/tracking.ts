// Preencha com os IDs reais das contas. Vazio = evento não é disparado.
export const TRACKING = {
  META_PIXEL_ID: "",
  GOOGLE_ADS_ID: "", // ex.: "AW-123456789"
  GOOGLE_ADS_LEAD_LABEL: "", // ex.: "AbCdEfGh"
};

type W = Window & { fbq?: (...a: unknown[]) => void; gtag?: (...a: unknown[]) => void };

export function trackLead(data: Record<string, string>) {
  const w = window as W;
  if (TRACKING.META_PIXEL_ID && w.fbq) w.fbq("track", "Lead", { faturamento: data.faturamento });
  if (TRACKING.GOOGLE_ADS_ID && TRACKING.GOOGLE_ADS_LEAD_LABEL && w.gtag)
    w.gtag("event", "conversion", { send_to: `${TRACKING.GOOGLE_ADS_ID}/${TRACKING.GOOGLE_ADS_LEAD_LABEL}` });
}

export const TRACK_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid"] as const;
