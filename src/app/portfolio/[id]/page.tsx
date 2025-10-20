"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Script from "next/script";
import Navbar from "@/components/overall/navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import ImageGalleryModal from "@/components/portfolio/ImageGalleryModal";
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

export default function PortfolioDetailPage() {
  const params = useParams<{ id: string }>();
  const id = Number(params?.id);
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const projects = [
    { id: 1, images: [baby1, baby2, baby3, baby4] },
    { id: 2, images: [gaby1, gaby2, gaby3] },
    { id: 3, images: [oma1, oma2, oma3] },
    { id: 4, images: [piedras1, piedras2, piedras3, piedras4, piedras5] },
    { id: 5, images: [transparencia1, transparencia2, transparencia3, transparencia4] },
    { id: 6, images: [idealAdapt1, idealAdapt2, idealAdapt3] },
  ];

  const project = projects.find((p) => p.id === id);
  const imagesForLd = project ? project.images.map((i) => (typeof i === 'string' ? i : (i as any).src)) : [];

  return (
    <div className="relative overflow-hidden min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent"></div>
      <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-emerald-500/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl"></div>

      <Navbar />

      <div className="relative z-10 flex flex-col pt-28 pb-24 px-6 md:px-12">
        <Script id="ld-portfolio-detail" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.artificialwebs.com/" },
                  { "@type": "ListItem", position: 2, name: "Portafolio", item: "https://www.artificialwebs.com/portfolio" },
                  { "@type": "ListItem", position: 3, name: (t(`portfolio.project${id}Title`) || "Proyecto"), item: `https://www.artificialwebs.com/portfolio/${id}` },
                ],
              },
              {
                "@type": "CreativeWork",
                name: (t(`portfolio.project${id}Title`) || "Proyecto"),
                description: (t(`portfolio.project${id}Desc`) || "Descripción del proyecto"),
                url: `https://www.artificialwebs.com/portfolio/${id}`,
                image: imagesForLd,
              }
            ],
          })}
        </Script>
        <section className="max-w-6xl mx-auto w-full">
          <div className="relative">
            <div className="pointer-events-none absolute -right-24 -top-20 hidden xl:block w-[520px] opacity-90 rotate-3">
              <Image src={bg2} alt="Decorative" className="w-full h-auto rounded-3xl border border-emerald-500/20 shadow-xl shadow-emerald-500/20" priority />
            </div>

            <div className="text-left max-w-3xl mb-10">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500/80">
                {t("portfolio.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight mb-4">
                {t(`portfolio.project${id}Title`) || "Proyecto"}
              </h1>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {t(`portfolio.project${id}Desc`) || "Descripción del proyecto."}
              </p>
            </div>
          </div>

          {project && (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.images.map((img, idx) => (
                  <div key={idx} className="relative aspect-video overflow-hidden rounded-xl border border-emerald-500/25 bg-slate-900/70">
                    <Image src={img} alt={t(`portfolio.project${id}Title`) || ""} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button
                  onClick={() => setIsOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors"
                >
                  {t("portfolio.viewProject")}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 7h7v10H6z"/></svg>
                </button>
              </div>
              <ImageGalleryModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                images={project.images}
                projectTitle={t(`portfolio.project${id}Title`) || "Proyecto"}
              />
            </>
          )}
        </section>
      </div>
    </div>
  );
}
