"use client";

import Link from "next/link";
import Navbar from "@/components/overall/navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import Websites from "@/components/portfolio/Websites";

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
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
                {t("portfolio.badge")}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {t("portfolio.title")}{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  {t("portfolio.titleHighlight")}
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t("portfolio.subtitle")}
              </p>
            </div>

            {/* Portfolio Grid */}
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

            {/* CTA Section */}
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                {t("portfolio.ctaTitle")}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                {t("portfolio.ctaDesc")}
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
                {t("portfolio.ctaButton")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
