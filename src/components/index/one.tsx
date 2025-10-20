"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/app/hero.png";
import bgImage from "@/app/bg.png";
import teamImage from "@/app/assets/team.webp";

export default function One() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden flex-1 flex items-center justify-center px-6 lg:px-16 py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80"></div>
      </div>
      <div className="max-w-7xl w-full">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="max-w-2xl space-y-6 animate-fade-up">
            <div className="mb-5 inline-block animate-fade-up">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400/80 border-l-2 border-emerald-500 pl-3">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight animate-fade-up-delay">
              {t("hero.title")}
            </h1>

            <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed max-w-xl animate-fade-up-delay-2">
              {t("hero.subtitle")}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-emerald-600 rounded-md transition-transform duration-200 hover:-translate-y-1 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {t("hero.getStarted")}
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-slate-200 border border-slate-700 rounded-md transition-colors duration-200 hover:border-slate-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {t("hero.learnMore")}
              </Link>
            </div>
          </div>

          <div className="mt-12 lg:-mt-2 animate-fade-in">
            <div className="relative">
              <div className="hero-overlay absolute -top-24 -right-16 w-[360px] h-[220px] rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl shadow-emerald-500/25 ring-1 ring-emerald-500/30 backdrop-blur-sm">
                <Image
                  src={heroImage}
                  alt="Artificial Webs dashboard"
                  className="h-full w-full object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/25 to-slate-950/70"></div>
              </div>

              <div className="relative mt-12 overflow-hidden rounded-2xl border border-emerald-500/30 bg-slate-950/92 shadow-2xl shadow-black/40 animate-fade-up">
                <Image
                  src={teamImage}
                  alt="Equipo Artificial Webs"
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
