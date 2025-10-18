"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/overall/navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import Websites from "@/components/portfolio/Websites";
import bg2 from "@/app/bg2.png";

export default function PortfolioPage() {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      category: "E-Commerce",
      technologies: ["Next.js", "Stripe", "Tailwind CSS"],
      galleryFolder: "baby",
      images: [
        "/gallery/baby/Captura de pantalla 2025-10-17 234935.png",
        "/gallery/baby/Captura de pantalla 2025-10-17 234954.png",
        "/gallery/baby/Captura de pantalla 2025-10-17 235012.png",
        "/gallery/baby/Captura de pantalla 2025-10-17 235032.png",
        "/gallery/baby/Captura de pantalla 2025-10-17 235043.png",
      ],
    },
    {
      id: 2,
      category: "Corporate Website",
      technologies: ["React", "TypeScript", "Node.js"],
      galleryFolder: "gaby",
      images: [
        "/gallery/gaby/Captura de pantalla 2025-10-17 233125.png",
        "/gallery/gaby/Captura de pantalla 2025-10-17 233148.png",
        "/gallery/gaby/Captura de pantalla 2025-10-17 233328.png",
      ],
    },
    {
      id: 3,
      category: "Web Application",
      technologies: ["Next.js", "PostgreSQL", "Prisma"],
      galleryFolder: "oma",
      images: [
        "/gallery/oma/Captura de pantalla 2025-10-17 233823.png",
        "/gallery/oma/Captura de pantalla 2025-10-17 233914.png",
        "/gallery/oma/Captura de pantalla 2025-10-17 233931.png",
        "/gallery/oma/Captura de pantalla 2025-10-17 234007.png",
      ],
    },
    {
      id: 4,
      category: "Landing Page",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      galleryFolder: "piedras",
      images: [
        "/gallery/piedras/Captura de pantalla 2025-10-17 235941.png",
        "/gallery/piedras/Captura de pantalla 2025-10-18 000001.png",
        "/gallery/piedras/Captura de pantalla 2025-10-18 000029.png",
        "/gallery/piedras/Captura de pantalla 2025-10-18 000238.png",
        "/gallery/piedras/Captura de pantalla 2025-10-18 000251.png",
      ],
    },
    {
      id: 5,
      category: "Dashboard",
      technologies: ["React", "Chart.js", "Express"],
      galleryFolder: "transparencia",
      images: [
        "/gallery/transparencia/Captura de pantalla 2025-10-17 235243.png",
        "/gallery/transparencia/Captura de pantalla 2025-10-17 235318.png",
        "/gallery/transparencia/Captura de pantalla 2025-10-17 235326.png",
        "/gallery/transparencia/Captura de pantalla 2025-10-17 235335.png",
      ],
    },
    {
      id: 6,
      category: "Portfolio Website",
      technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
      galleryFolder: "",
      images: [],
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
