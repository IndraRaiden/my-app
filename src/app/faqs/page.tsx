"use client";

import { useState } from "react";
import Navbar from "@/components/overall/navbar";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQsPage() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t("faqs.q1"),
      answer: t("faqs.a1"),
    },
    {
      question: t("faqs.q2"),
      answer: t("faqs.a2"),
    },
    {
      question: t("faqs.q3"),
      answer: t("faqs.a3"),
    },
    {
      question: t("faqs.q4"),
      answer: t("faqs.a4"),
    },
    {
      question: t("faqs.q5"),
      answer: t("faqs.a5"),
    },
    {
      question: t("faqs.q6"),
      answer: t("faqs.a6"),
    },
    {
      question: t("faqs.q7"),
      answer: t("faqs.a7"),
    },
    {
      question: t("faqs.q8"),
      answer: t("faqs.a8"),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-[100px]"></div>

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col pt-20">
        <section className="py-24 px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
                {t("faqs.badge")}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {t("faqs.title")}{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  {t("faqs.titleHighlight")}
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t("faqs.subtitle")}
              </p>
            </div>

            {/* FAQs List */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-emerald-400 transition-transform duration-300 flex-shrink-0 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
{t("faqs.ctaTitle")}
              </h3>
              <p className="text-gray-400 mb-6">
{t("faqs.ctaDesc")}
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
              >
                {t("faqs.ctaButton")}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
