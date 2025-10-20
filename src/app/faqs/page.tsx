"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/overall/navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import bgImage from "@/app/bg.png";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import Script from "next/script";

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
    {
      question: t("faqs.q9"),
      answer: t("faqs.a9"),
    },
    {
      question: t("faqs.q10"),
      answer: t("faqs.a10"),
    },
    {
      question: t("faqs.q11"),
      answer: t("faqs.a11"),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/90" />
      </div>

      <Navbar />

      <div className="relative z-10 flex flex-col pt-24">
        <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          })}
        </Script>
        <section className="pb-24 px-8 md:px-12">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
                {t("faqs.badge")}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                {t("faqs.title")} {" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  {t("faqs.titleHighlight")}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300/85 max-w-2xl mx-auto">
                {t("faqs.subtitle")}
              </p>
            </div>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950/80 shadow-lg shadow-emerald-500/10 transition-transform duration-300 hover:-translate-y-1"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-300/90">
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <span className="text-lg font-semibold text-white leading-tight">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-emerald-300/90 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 pb-6 transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="text-sm text-slate-300/85 leading-relaxed mb-3">
                      {faq.answer}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-emerald-200 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors"
                    >
                      {t("faqs.contactAdvisor")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <div className="inline-flex flex-col sm:flex-row sm:items-center gap-5 p-6 rounded-2xl border border-emerald-500/20 bg-slate-950/85 shadow-lg shadow-emerald-500/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-300/90">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-center sm:text-left space-y-2">
                  <h3 className="text-2xl font-semibold text-white">
                    {t("faqs.ctaTitle")}
                  </h3>
                  <p className="text-slate-300/85 text-sm md:text-base max-w-xl">
                    {t("faqs.ctaDesc")}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/30"
                >
                  {t("faqs.ctaButton")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
