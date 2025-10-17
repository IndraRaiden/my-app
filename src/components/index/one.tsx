"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function One() {
  const { t } = useLanguage();
  return (
    <main className="flex-1 flex items-center justify-center px-8">
      <div className="max-w-5xl w-full text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
            {t("hero.badge")}
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          {t("hero.title")}
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
            {t("hero.titleHighlight")}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t("hero.subtitle")}
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
            {t("hero.getStarted")}
          </button>
          <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all duration-300">
            {t("hero.learnMore")}
          </button>
        </div>
      </div>
    </main>
  );
}
