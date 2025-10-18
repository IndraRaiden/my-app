export function gaEvent(action: string, params: Record<string, any> = {}) {
  const w = typeof window !== "undefined" ? (window as any) : undefined;
  if (w && typeof w.gtag === "function") {
    w.gtag("event", action, params);
  }
}

export function adsConversion(
  sendTo?: string,
  extra?: { value?: number; currency?: string }
) {
  const w = typeof window !== "undefined" ? (window as any) : undefined;
  if (w && typeof w.gtag === "function" && sendTo) {
    w.gtag("event", "conversion", { send_to: sendTo, ...(extra || {}) });
  }
}

export function makeAdsSendTo(adsId: string, label?: string) {
  if (!adsId || !label) return undefined;
  return `${adsId}/${label}`;
}
