"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CareersPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent" />
      <div className="relative z-10 flex flex-col pt-28 pb-20 px-6 md:px-12">
        <section className="max-w-5xl mx-auto w-full">
          <div className="text-center space-y-4 mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Trabaja con nosotros</h1>
            <p className="text-slate-300/85 text-base md:text-lg max-w-2xl mx-auto">
              Buscamos desarrolladores(as) Frontend/Fullstack, diseñadores(as) UI/UX y especialistas en
              marketing digital. Si te apasiona crear productos de alto impacto, queremos conocerte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-emerald-500/20 bg-slate-950/80 p-6">
              <h2 className="text-white font-semibold mb-2">Roles abiertos</h2>
              <ul className="list-disc list-inside text-slate-300/85 text-sm space-y-1">
                <li>Frontend Developer (React/Next.js)</li>
                <li>Fullstack Developer (Node.js/DB)</li>
                <li>UI/UX Designer</li>
                <li>Digital Marketing Specialist</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-slate-950/80 p-6">
              <h2 className="text-white font-semibold mb-2">Beneficios</h2>
              <ul className="list-disc list-inside text-slate-300/85 text-sm space-y-1">
                <li>Trabajo remoto</li>
                <li>Horario flexible</li>
                <li>Proyectos con tecnologías modernas</li>
                <li>Plan de crecimiento profesional</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              {t("nav.getStarted")}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
