"use client";

import Link from "next/link";
import { Mail, Phone, MessageCircle, MapPin, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const whatsappNumber = "526242392710";
  const phoneNumbers = [
    { display: "+52 624 239 2710", href: "tel:+526242392710" },
    { display: "+52 56 63 95 4818", href: "tel:+525663954818" },
  ];
  const emails = [
    { label: "contacto@artificialwebs.com", href: "mailto:contacto@artificialwebs.com" },
    { label: "ventas@artificialwebs.com", href: "mailto:ventas@artificialwebs.com" },
  ];

  return (
    <footer className="mt-16 px-6">
      <div className="max-w-6xl mx-auto rounded-2xl border border-emerald-500/20 bg-slate-950/80 text-slate-200 px-6 py-8 shadow-lg shadow-emerald-500/10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-baseline gap-1 text-lg font-semibold tracking-tight">
              <span className="text-emerald-200">{t("footer.companyName")}</span>
              <span className="text-slate-300">{t("footer.country")}</span>
            </div>
            <div className="text-sm text-slate-300/85">{t("footer.tagline")}</div>
            <div className="flex items-center gap-2 text-sm text-slate-300/85">
              <MapPin className="w-4 h-4" /> {t("footer.location")}
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-white">{t("footer.contact")}</div>
            <div className="space-y-2 text-sm">
              {emails.map((e) => (
                <div key={e.label} className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href={e.href} className="hover:text-emerald-200">{e.label}</a>
                </div>
              ))}
              {phoneNumbers.map((p) => (
                <div key={p.href} className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href={p.href} className="hover:text-emerald-200">{p.display}</a>
                </div>
              ))}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-200 hover:bg-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-white">{t("footer.site")}</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/about" className="hover:text-emerald-200">{t("nav.about")}</Link>
              <Link href="/portfolio" className="hover:text-emerald-200">{t("nav.portfolio")}</Link>
              <Link href="/faqs" className="hover:text-emerald-200">{t("nav.faqs")}</Link>
              <Link href="/blog" className="hover:text-emerald-200">{t("footer.insights")}</Link>
              <Link href="/careers" className="hover:text-emerald-200">{t("nav.careers")}</Link>
              <Link href="/contact" className="hover:text-emerald-200">{t("nav.contact")}</Link>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-white">{t("footer.legal")}</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/privacy-policy" className="hover:text-emerald-200">{t("footer.privacy")}</Link>
              <Link href="/terms" className="hover:text-emerald-200">{t("footer.terms")}</Link>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
              <Lock className="w-4 h-4" /> {t("footer.cookiesPrivacy")}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-emerald-500/20 pt-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
