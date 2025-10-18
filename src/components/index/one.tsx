"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function One() {
  const { t } = useLanguage();
  return (
    <section className="flex-1 flex items-center justify-center px-6 lg:px-16 py-16 lg:py-20">
      <div className="max-w-7xl w-full">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="max-w-2xl">
            <div className="mb-5 inline-block">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400/80 border-l-2 border-emerald-500 pl-3">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              {t("hero.title")}
            </h1>

            <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed max-w-xl">
              {t("hero.subtitle")}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-emerald-600 rounded-md transition-colors duration-200 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                {t("hero.getStarted")}
              </button>
              <button className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-slate-200 border border-slate-700 rounded-md transition-colors duration-200 hover:border-slate-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                {t("hero.learnMore")}
              </button>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-800">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl font-bold text-white tracking-tight">+5</p>
                  <p className="mt-1 text-sm text-slate-500 uppercase tracking-wide">{t("hero.yearsExperience")}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white tracking-tight">120+</p>
                  <p className="mt-1 text-sm text-slate-500 uppercase tracking-wide">{t("hero.projectsDelivered")}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white tracking-tight">98%</p>
                  <p className="mt-1 text-sm text-slate-500 uppercase tracking-wide">{t("hero.clientRetention")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:-mt-10">
            <div className="relative overflow-hidden rounded-2xl border border-emerald-500/15 bg-gradient-to-br from-slate-900/85 via-slate-950/90 to-slate-950 shadow-2xl shadow-emerald-500/10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600"></div>
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl"></div>
              <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-teal-500/10 blur-3xl"></div>
              <div className="relative p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {t("hero.serviceOverview")}
                  </h3>
                  <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                    {t("hero.professional")}
                  </span>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-300">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white tracking-tight">{t("hero.feature1Title")}</p>
                      <p className="mt-1 text-xs text-slate-300/80 leading-relaxed">{t("hero.feature1Desc")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-300">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white tracking-tight">{t("hero.feature2Title")}</p>
                      <p className="mt-1 text-xs text-slate-300/80 leading-relaxed">{t("hero.feature2Desc")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-300">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white tracking-tight">{t("hero.feature3Title")}</p>
                      <p className="mt-1 text-xs text-slate-300/80 leading-relaxed">{t("hero.feature3Desc")}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-emerald-500/10">
                  <p className="text-xs text-slate-300/80 leading-relaxed">
                    {t("hero.certifiedNote")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
