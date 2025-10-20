"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/overall/navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import Websites from "@/components/portfolio/Websites";
import ImageGalleryModal from "@/components/portfolio/ImageGalleryModal";
import { useState } from "react";
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
  const [isFeaturedOpen, setIsFeaturedOpen] = useState(false);
  
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

  const featuredProject = projects.find((p) => p.id === 4);
  const restProjects = featuredProject ? projects.filter((p) => p.id !== 4) : projects;

  return (
    <div className="relative overflow-hidden min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent"></div>
      <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-emerald-500/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl"></div>

      <Navbar />

      <div className="relative z-10 flex flex-col pt-28 pb-24 px-6 md:px-12">
        <section className="max-w-6xl mx-auto w-full">
          <div className="relative">
            <div className="pointer-events-none absolute -right-24 -top-20 hidden xl:block w-[520px] opacity-90 rotate-3">
              <Image
                src={bg2}
                alt="Decorative"
                className="w-full h-auto rounded-3xl border border-emerald-500/20 shadow-xl shadow-emerald-500/20"
                priority
              />
            </div>

            <div className="text-left max-w-3xl mb-16 animate-fade-up">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500/80">
                {t("portfolio.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight mb-6">
                {t("portfolio.title")} {" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  {t("portfolio.titleHighlight")}
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {t("portfolio.subtitle")}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs font-semibold text-emerald-200/90 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  Proyectos destacados recientes
                </span>
                <span className="text-[11px] text-emerald-200/90 bg-emerald-600/20 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                  Último mes
                </span>
              </div>
            </div>
          </div>

          {featuredProject && (
            <>
            <div className="mb-14 animate-fade-up">
              <div className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-slate-900/70 shadow-2xl shadow-emerald-500/20">
                <div className="absolute inset-0">
                  <Image
                    src={featuredProject.images[0]}
                    alt={t(`portfolio.project${featuredProject.id}Title`)}
                    fill
                    className="object-cover opacity-30"
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent" />
                </div>
                <div className="relative p-8 md:p-10 lg:p-12">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-semibold text-emerald-200 bg-emerald-600/20 border border-emerald-500/40 px-3 py-1 rounded-full">
                      Destacado
                    </span>
                    <span className="text-xs text-emerald-200/90 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                      {featuredProject.category}
                    </span>
                    <span className="text-[11px] text-emerald-200/90 bg-emerald-600/20 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                      Último mes
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    {t(`portfolio.project${featuredProject.id}Title`)}
                  </h3>
                  <p className="text-slate-300 max-w-3xl mb-6">
                    {t(`portfolio.project${featuredProject.id}Desc`)}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                    <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-slate-900/50 px-4 py-3 text-slate-200">
                      <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                      <div>
                        <div className="text-sm font-semibold">1.2M+ vistas</div>
                        <div className="text-xs text-slate-400">últimos 12 meses</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-slate-900/50 px-4 py-3 text-slate-200">
                      <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V7a2 2 0 012-2h7l2 2h5a2 2 0 012 2v9a2 2 0 01-2 2z"/></svg>
                      <div>
                        <div className="text-sm font-semibold">Diario de noticias</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-slate-900/50 px-4 py-3 text-slate-200">
                      <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m4-4H8m13-4v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                      <div>
                        <div className="text-sm font-semibold">Gestión de archivos</div>
                        <div className="text-xs text-slate-400">300+ archivos</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {featuredProject.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs font-medium text-emerald-200 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2">
                    <button
                      onClick={() => setIsFeaturedOpen(true)}
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors"
                    >
                      Ver galería
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 7h7v10H6z"/></svg>
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
            <ImageGalleryModal
              isOpen={isFeaturedOpen}
              onClose={() => setIsFeaturedOpen(false)}
              images={featuredProject.images}
              projectTitle={t(`portfolio.project${featuredProject.id}Title`)}
            />
            </>
          )}

          <div className="mb-4">
            <span className="text-xs font-semibold text-emerald-200/90 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
              Proyectos del último mes
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {restProjects.map((project) => (
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

          <div className="mt-16 pt-16 border-t border-emerald-500/20 text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
              <h2 className="text-3xl font-bold text-slate-100">
                {t("portfolio.ctaTitle")}
              </h2>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
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
