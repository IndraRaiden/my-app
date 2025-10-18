"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Zap, Users, CheckCircle } from "lucide-react";

export default function Two() {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-6 lg:px-16 bg-slate-100 border border-slate-200 rounded-xl shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left max-w-3xl mb-16 animate-fade-up">
          <h2 className="inline-block text-xs font-semibold uppercase tracking-wider text-emerald-600 border-l-2 border-emerald-500 pl-3 mb-4">
            {t("about.badge")}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6 animate-fade-up-delay">
            {t("about.title")}
          </h3>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed animate-fade-up-delay-2">
            {t("about.description1")}
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-fade-in">
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:border-slate-300 hover:shadow-lg transition-colors duration-200">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 ring-1 ring-emerald-200 text-emerald-600 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">{t("about.innovation")}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{t("about.innovationDesc")}</p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:border-slate-300 hover:shadow-lg transition-colors duration-200">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 ring-1 ring-emerald-200 text-emerald-600 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">{t("about.clientCentered")}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{t("about.clientDesc")}</p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:border-slate-300 hover:shadow-lg transition-colors duration-200">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 ring-1 ring-emerald-200 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">{t("about.quality")}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{t("about.qualityDesc")}</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-12 border-t border-slate-200 text-center">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <p className="text-base text-slate-600 leading-relaxed mb-8">{t("about.description2")}</p>
            <div className="flex gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-emerald-600 rounded-md transition-transform duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                {t("about.ourStory")}
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-800 bg-slate-200 border border-slate-300 rounded-md transition-colors duration-200 hover:bg-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                {t("about.meetTeam")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


