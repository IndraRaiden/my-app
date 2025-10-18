"use client";

import Link from 'next/link';
import Image from 'next/image';
import bgImage from '@/app/bg.png';
import bg3 from '@/app/bg3.png';
import { Zap, Users, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Three() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden py-20 px-8 md:px-12 bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-40 [transform:scaleX(-1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/90"></div>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
            {t("services.badge")}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {t("services.title")}
          </h3>
          <p className="text-lg text-slate-300/85 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="relative mb-16">
          <div className="pointer-events-none absolute inset-x-4 sm:inset-x-6 -top-6 sm:-top-10 bottom-[-40px] z-0">
            <div className="relative h-full overflow-hidden rounded-3xl border border-emerald-500/20 shadow-[0_25px_80px_-40px_rgba(16,185,129,0.45)]">
              <Image
                src={bg3}
                alt="Decorative"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-950/20 to-slate-950/45"></div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="relative z-10 grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950/55 backdrop-blur-lg p-7 shadow-2xl shadow-emerald-500/10 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-300/90">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-2xl font-semibold text-white tracking-tight">{t("services.webDev")}</h4>
              </div>
              <p className="text-slate-300/85 mb-6">
                {t("services.webDevDesc")}
              </p>
              <ul className="space-y-2 text-sm text-slate-400/90">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  React & Next.js
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  SEO Optimized
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Mobile Responsive
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950/55 backdrop-blur-lg p-7 shadow-2xl shadow-emerald-500/10 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-300/90">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-2xl font-semibold text-white tracking-tight">{t("services.mobileApps")}</h4>
              </div>
              <p className="text-slate-300/85 mb-6">
                {t("services.mobileAppsDesc")}
              </p>
              <ul className="space-y-2 text-sm text-slate-400/90">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Payment Integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Product Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Secure Checkout
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950/55 backdrop-blur-lg p-7 shadow-2xl shadow-emerald-500/10 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-300/90">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-2xl font-semibold text-white tracking-tight">{t("services.uiux")}</h4>
              </div>
              <p className="text-slate-300/85 mb-6">
                {t("services.uiuxDesc")}
              </p>
              <ul className="space-y-2 text-sm text-slate-400/90">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Custom Features
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Database Design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  API Integration
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl border border-emerald-500/20 bg-slate-950/80 shadow-lg shadow-emerald-500/10">
            <p className="text-slate-100 font-medium tracking-tight">{t("services.cta")}</p>
            <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-emerald-500/30 transition-transform duration-300 hover:-translate-y-0.5">
              {t("services.getStarted")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
