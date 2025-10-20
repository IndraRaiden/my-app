"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/overall/navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import Websites from "@/components/portfolio/Websites";
import bg2 from "@/app/bg2.png";
import baby1 from "@/app/assets/gallery/baby/Captura de pantalla 2025-10-17 234935.webp";
import baby2 from "@/app/assets/gallery/baby/Captura de pantalla 2025-10-17 235012 - copia.webp";
import baby3 from "@/app/assets/gallery/baby/Captura de pantalla 2025-10-17 235032 - copia.webp";
import baby4 from "@/app/assets/gallery/baby/Captura de pantalla 2025-10-17 235043 - copia.webp";
import gaby1 from "@/app/assets/gallery/gaby/Captura de pantalla 2025-10-17 233125.webp";
import gaby2 from "@/app/assets/gallery/gaby/Captura de pantalla 2025-10-17 233148.webp";
import gaby3 from "@/app/assets/gallery/gaby/Captura de pantalla 2025-10-17 233328.webp";
import oma1 from "@/app/assets/gallery/oma/Captura de pantalla 2025-10-17 233823.webp";
import oma2 from "@/app/assets/gallery/oma/Captura de pantalla 2025-10-17 233914.webp";
import oma3 from "@/app/assets/gallery/oma/Captura de pantalla 2025-10-17 233931.webp";
import piedras1 from "@/app/assets/gallery/piedras/Captura de pantalla 2025-10-17 235941 - copia (2).webp";
import piedras2 from "@/app/assets/gallery/piedras/Captura de pantalla 2025-10-18 000001 - copia - copia.webp";
import piedras3 from "@/app/assets/gallery/piedras/Captura de pantalla 2025-10-18 000029 - copia - copia.webp";
import piedras4 from "@/app/assets/gallery/piedras/Captura de pantalla 2025-10-18 000238 - copia - copia.webp";
import piedras5 from "@/app/assets/gallery/piedras/Captura de pantalla 2025-10-18 000251 - copia - copia.webp";
import transparencia1 from "@/app/assets/gallery/transparencia/Captura de pantalla 2025-10-17 235243 - copia.webp";
import transparencia2 from "@/app/assets/gallery/transparencia/Captura de pantalla 2025-10-17 235318 - copia.webp";
import transparencia3 from "@/app/assets/gallery/transparencia/Captura de pantalla 2025-10-17 235326 - copia.webp";
import transparencia4 from "@/app/assets/gallery/transparencia/Captura de pantalla 2025-10-17 235335 - copia.webp";
import idealAdapt1 from "@/app/assets/gallery/ideal adapt/Captura-de-pantalla-2025-10-18-004519-copia-copia-copia.webp";
import idealAdapt2 from "@/app/assets/gallery/ideal adapt/Captura-de-pantalla-2025-10-18-004538-copia-copia-copia.webp";
import idealAdapt3 from "@/app/assets/gallery/ideal adapt/Captura-de-pantalla-2025-10-18-004607-copia.webp";

export default function PortfolioPage() {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      category: "Healthcare",
      technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
      galleryFolder: "baby",
      images: [baby1, baby2, baby3, baby4],
    },
    {
      id: 2,
      category: "Landing Page",
      technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
      galleryFolder: "gaby",
      images: [gaby1, gaby2, gaby3],
    },
    {
      id: 3,
      category: "Web Platform",
      technologies: ["Next.js", "Strapi CMS", "React"],
      galleryFolder: "oma",
      images: [oma1, oma2, oma3],
    },
    {
      id: 4,
      category: "Government Portal",
      technologies: ["Nuxt.js", "Payload CMS", "Supabase"],
      galleryFolder: "piedras",
      images: [piedras1, piedras2, piedras3, piedras4, piedras5],
    },
    {
      id: 5,
      category: "Transparency Portal",
      technologies: ["Next.js", "PostgreSQL", "React"],
      galleryFolder: "transparencia",
      images: [transparencia1, transparencia2, transparencia3, transparencia4],
    },
    {
      id: 6,
      category: "Education Platform",
      technologies: ["Next.js", "AI Integration", "Tailwind CSS"],
      galleryFolder: "ideal adapt",
      images: [idealAdapt1, idealAdapt2, idealAdapt3],
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-100"></div>
      <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl"></div>

      <Navbar />

      <div className="relative z-10 flex flex-col pt-28 pb-24 px-6 md:px-12">
        <section className="max-w-6xl mx-auto w-full">
          <div className="relative">
            <div className="pointer-events-none absolute -right-24 -top-20 hidden xl:block w-[520px] opacity-90 rotate-3">
              <Image
                src={bg2}
                alt="Decorative"
                className="w-full h-auto rounded-3xl border border-emerald-200/50 shadow-xl shadow-emerald-100/50"
                priority
              />
            </div>

            <div className="text-left max-w-3xl mb-16 animate-fade-up">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500/80">
                {t("portfolio.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                {t("portfolio.title")} {" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  {t("portfolio.titleHighlight")}
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {t("portfolio.subtitle")}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <Websites
                key={project.id}
                id={project.id}
                category={project.category}
                technologies={project.technologies}
                title={t(`portfolio.project${project.id}Title`)}
                description={t(`portfolio.project${project.id}Desc`)}
                images={project.images}
              />
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-emerald-200/40 text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
              <h2 className="text-3xl font-bold text-slate-900">
                {t("portfolio.ctaTitle")}
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {t("portfolio.ctaDesc")}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                {t("portfolio.ctaButton")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
