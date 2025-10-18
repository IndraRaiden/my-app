"use client";

import Link from "next/link";
import Navbar from "@/components/overall/navbar";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PortfolioPage() {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      category: "E-Commerce",
      technologies: ["Next.js", "Stripe", "Tailwind CSS"],
    },
    {
      id: 2,
      category: "Corporate Website",
      technologies: ["React", "TypeScript", "Node.js"],
    },
    {
      id: 3,
      category: "Web Application",
      technologies: ["Next.js", "PostgreSQL", "Prisma"],
    },
    {
      id: 4,
      category: "Landing Page",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 5,
      category: "Dashboard",
      technologies: ["React", "Chart.js", "Express"],
    },
    {
      id: 6,
      category: "Portfolio Website",
      technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
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
                <div
                  key={project.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-emerald-400/50 group-hover:text-emerald-400 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-emerald-400 font-medium">
                        {t(`portfolio.project${project.id}Title`)}
                      </span>
                      <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      {t(`portfolio.project${project.id}Desc`)}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
