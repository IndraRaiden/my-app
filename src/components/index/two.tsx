"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Two() {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-sm font-semibold text-emerald-400 mb-4 tracking-wider uppercase">
              {t("about.badge")}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {t("about.title")}
            </h3>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              {t("about.description1")}
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {t("about.description2")}
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                {t("about.ourStory")}
              </button>
              <button className="px-6 py-3 bg-white/5 backdrop-blur-sm text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all duration-300">
                {t("about.meetTeam")}
              </button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid gap-6">
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{t("about.innovation")}</h4>
              <p className="text-gray-400">
                {t("about.innovationDesc")}
              </p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{t("about.clientCentered")}</h4>
              <p className="text-gray-400">
                {t("about.clientDesc")}
              </p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{t("about.quality")}</h4>
              <p className="text-gray-400">
                {t("about.qualityDesc")}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">150+</div>
              <div className="text-sm text-gray-500">{t("about.projects")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">75+</div>
              <div className="text-sm text-gray-500">{t("about.clients")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">5+</div>
              <div className="text-sm text-gray-500">{t("about.years")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">98%</div>
              <div className="text-sm text-gray-500">{t("about.satisfaction")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
