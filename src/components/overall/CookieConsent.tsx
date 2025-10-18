"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cookie_consent");
      if (!saved) setVisible(true);
    } catch {}
  }, []);

  const updateConsent = (granted: boolean) => {
    try {
      localStorage.setItem("cookie_consent", granted ? "granted" : "denied");
    } catch {}
    const w = window as any;
    if (typeof w !== "undefined" && typeof w.gtag === "function") {
      w.gtag("consent", "update", {
        ad_storage: granted ? "granted" : "denied",
        analytics_storage: granted ? "granted" : "denied",
        ad_user_data: granted ? "granted" : "denied",
        ad_personalization: granted ? "granted" : "denied",
      });
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100]">
      <div className="mx-auto max-w-3xl m-4 rounded-2xl border border-emerald-500/30 bg-slate-950/95 text-slate-200 p-4 shadow-lg shadow-emerald-500/20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <div className="text-sm leading-relaxed">
            Usamos cookies para análisis y anuncios. Puedes aceptar o rechazar.
          </div>
          <div className="flex gap-3 md:ml-auto">
            <button onClick={() => updateConsent(false)} className="rounded-xl border border-emerald-500/40 px-4 py-2 text-sm">
              Rechazar
            </button>
            <button onClick={() => updateConsent(true)} className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-sm text-white">
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
