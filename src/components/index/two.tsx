"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Zap, Users, CheckCircle } from "lucide-react";
import bg2 from "@/app/bg2.png";

export default function Two() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden py-20 px-6 lg:px-16">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-100"></div>
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-teal-100/40 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="pointer-events-none absolute -right-16 top-16 hidden lg:block w-[520px] opacity-100 rotate-3">
          <Image
            src={bg2}
            alt="Decorative"
            className="w-full h-auto rounded-3xl border border-emerald-200/50 shadow-xl shadow-emerald-100/50"
            priority
          />
        </div>

        {/* Header */}
        <div className="text-left max-w-3xl mb-16 animate-fade-up">
          <h2 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500/80">
            {t("about.badge")}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6 animate-fade-up-delay">
            {t("about.title")}
          </h3>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed animate-fade-up-delay-2">
            {t("about.description1")}
          </p>
        </div>

        <div className="relative mb-12 flex justify-center lg:hidden">
          <Image
            src={bg2}
            alt="Decorative"
            className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl rounded-3xl border border-emerald-200/50 shadow-xl shadow-emerald-100/50 rotate-2"
            priority
          />
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-fade-in">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-200/40 bg-white p-7 shadow-lg shadow-emerald-100/40 transition-transform duration-200 hover:-translate-y-1">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 opacity-60"></div>
            <div className="w-12 h-12 rounded-xl bg-emerald-100 ring-1 ring-emerald-200 text-emerald-600 flex items-center justify-center mb-5">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">{t("about.innovation")}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{t("about.innovationDesc")}</p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-emerald-200/40 bg-white p-7 shadow-lg shadow-emerald-100/40 transition-transform duration-200 hover:-translate-y-1">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 opacity-60"></div>
            <div className="w-12 h-12 rounded-xl bg-emerald-100 ring-1 ring-emerald-200 text-emerald-600 flex items-center justify-center mb-5">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">{t("about.clientCentered")}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{t("about.clientDesc")}</p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-emerald-200/40 bg-white p-7 shadow-lg shadow-emerald-100/40 transition-transform duration-200 hover:-translate-y-1">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 opacity-60"></div>
            <div className="w-12 h-12 rounded-xl bg-emerald-100 ring-1 ring-emerald-200 text-emerald-600 flex items-center justify-center mb-5">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">{t("about.quality")}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{t("about.qualityDesc")}</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-12 border-t border-emerald-200/40 text-center">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <p className="text-base text-slate-600 leading-relaxed mb-8">{t("about.description2")}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40"
              >
                {t("about.ourStory")}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-700 border border-emerald-200/60 rounded-full bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-400/70 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30"
              >
                {t("about.meetTeam")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


