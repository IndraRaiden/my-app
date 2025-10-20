"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Star } from "lucide-react";

export default function Testimonials() {
  const { t } = useLanguage();
  const testimonials = [
    {
      name: t("testimonials.item1Name"),
      role: t("testimonials.item1Role"),
      quote: t("testimonials.item1Quote"),
    },
    {
      name: t("testimonials.item2Name"),
      role: t("testimonials.item2Role"),
      quote: t("testimonials.item2Quote"),
    },
    {
      name: t("testimonials.item3Name"),
      role: t("testimonials.item3Role"),
      quote: t("testimonials.item3Quote"),
    },
  ];

  // logos removed per request

  return (
    <section className="relative overflow-hidden py-20 px-6 lg:px-16 bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-100"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600/80">
            {t("testimonials.badge")}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mt-2">
            {t("testimonials.title")}
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10 animate-fade-in">
          {testimonials.map((tst, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-emerald-200/40 bg-white p-7 shadow-lg shadow-emerald-100/40"
            >
              <div className="flex items-center gap-1 mb-3 text-emerald-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">“{tst.quote}”</p>
              <div className="text-sm font-semibold text-slate-900">{tst.name}</div>
              <div className="text-xs text-slate-500">{tst.role}</div>
            </div>
          ))}
        </div>

        {/* brand logos removed */}
      </div>
    </section>
  );
}
