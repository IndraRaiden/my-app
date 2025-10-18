"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/overall/navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import bgImage from "@/app/bg.png";
import { Rocket, Eye, Sparkles, Award, UsersRound } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/90" />
      </div>

      <Navbar />

      <div className="relative z-10 flex flex-col pt-24">
        <section className="pb-24 px-8 md:px-12">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
                {t("aboutPage.badge")}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                {t("aboutPage.title")}{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  {t("aboutPage.titleHighlight")}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300/85 max-w-2xl mx-auto">
                {t("aboutPage.subtitle")}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950/80 p-8 shadow-2xl shadow-emerald-500/10 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-300/90">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white tracking-tight">
                    {t("aboutPage.missionTitle")}
                  </h3>
                </div>
                <p className="text-slate-300/85 leading-relaxed">
                  {t("aboutPage.missionDesc")}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950/80 p-8 shadow-2xl shadow-emerald-500/10 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-300/90">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white tracking-tight">
                    {t("aboutPage.visionTitle")}
                  </h3>
                </div>
                <p className="text-slate-300/85 leading-relaxed">
                  {t("aboutPage.visionDesc")}
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t("aboutPage.valuesTitle")}{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                    {t("aboutPage.valuesHighlight")}
                  </span>
                </h2>
                <p className="text-slate-300/85 max-w-2xl mx-auto text-base md:text-lg">
                  {t("aboutPage.valuesSubtitle")}
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950/80 p-6 shadow-xl shadow-emerald-500/10 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-300/90 mb-5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {t("aboutPage.innovationTitle")}
                  </h4>
                  <p className="text-slate-400/90 text-sm leading-relaxed">
                    {t("aboutPage.innovationDesc")}
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950/80 p-6 shadow-xl shadow-emerald-500/10 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-300/90 mb-5">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {t("aboutPage.excellenceTitle")}
                  </h4>
                  <p className="text-slate-400/90 text-sm leading-relaxed">
                    {t("aboutPage.excellenceDesc")}
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950/80 p-6 shadow-xl shadow-emerald-500/10 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-300/90 mb-5">
                    <UsersRound className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {t("aboutPage.collaborationTitle")}
                  </h4>
                  <p className="text-slate-400/90 text-sm leading-relaxed">
                    {t("aboutPage.collaborationDesc")}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 rounded-2xl border border-emerald-500/20 bg-slate-950/85 shadow-lg shadow-emerald-500/10">
                <div className="text-center sm:text-left space-y-2">
                  <h2 className="text-2xl font-semibold text-white">
                    {t("aboutPage.teamTitle")}{" "}
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                      {t("aboutPage.teamHighlight")}
                    </span>
                  </h2>
                  <p className="text-slate-300/85 text-sm md:text-base max-w-xl">
                    {t("aboutPage.teamDesc")}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/30"
                >
                  {t("aboutPage.joinTeam")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
