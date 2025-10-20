"use client";

import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { gaEvent, adsConversion, makeAdsSendTo } from "@/lib/gtag";

export default function PersistentCTA() {
  const { t } = useLanguage();
  const whatsappNumber = "526242392710";
  const emailAddress = "contacto@artificialwebs.com";
  const ADS_ID = "AW-17656232046";
  const ADS_LABEL_WHATSAPP = process.env.NEXT_PUBLIC_ADS_CONV_LABEL_WHATSAPP;
  const SEND_TO_WHATSAPP = makeAdsSendTo(ADS_ID, ADS_LABEL_WHATSAPP);

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <div className="flex flex-col gap-2 items-end">
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          gaEvent("persistent_whatsapp_click", { location: "global_floating", number: whatsappNumber });
          adsConversion(SEND_TO_WHATSAPP, { value: 1.0, currency: "MXN" });
        }}
        className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40"
        aria-label={t("cta.whatsapp")}
      >
        <svg className="w-4 h-4" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
          <path d="M256 8C119 8 8 119 8 256c0 49.6 14.6 95.8 39.6 134.5L0 504l116.7-44.1C154.3 486.9 204 504 256 504c137 0 248-111 248-248S393 8 256 8zm115.7 308.6c-2 14.5-22.9 26.3-31.9 28.3-7.8 1.6-17.8 2.9-59.1-12.7-49.5-19.4-81.2-56.2-83.7-58.8-2.4-2.6-20-26.5-20-50.5s12.3-35.7 16.6-40.7c4.3-5 9.3-6.3 12.4-6.3 3.1 0 6.2 0 8.9.2 2.9.1 6.7-.9 10.5 8 4 9.6 13.5 33.2 14.7 35.6 1.2 2.4 2 5.2.4 8.3-1.6 3.1-2.4 5.2-4.7 8-2.4 2.6-5 5.9-7.1 7.9-2.4 2.6-5 5.4-2.1 10.6 2.9 5.2 12.8 21.1 27.4 34.2 18.9 16.8 34.8 22.1 40 24.5 5.2 2.4 8.3 2 11.4-1.2 3.1-3.1 13.3-15.5 16.9-20.8 3.5-5.4 7.1-4.5 11.9-2.6 4.8 1.9 30.5 14.4 35.7 17 5.2 2.6 8.6 3.8 9.8 5.9 1.2 2.1 1.2 12.1-1.2 26.6z" />
        </svg>
        {t("cta.whatsapp")}
      </a>
      <a
        href={`mailto:${emailAddress}`}
        onClick={() => {
          gaEvent("persistent_email_click", { location: "global_floating", email: emailAddress });
        }}
        className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white bg-slate-900/95 border border-emerald-500/30 shadow-lg shadow-emerald-500/20 transition-transform duration-200 hover:-translate-y-0.5 hover:border-emerald-400/60 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40"
        aria-label={emailAddress}
      >
        <Mail className="w-4 h-4" />
        {emailAddress}
      </a>
      </div>
    </div>
  );
}
