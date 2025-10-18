"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/app/logo.png";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", key: "nav.about" as const },
    { href: "/faqs", key: "nav.faqs" as const },
    { href: "/contact", key: "nav.contact" as const },
  ];

  const desktopLinkClasses = (href: string) =>
    `px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-200 focus-visible:outline-none ${
      pathname === href
        ? "text-emerald-600 border-emerald-500"
        : "text-slate-600 border-transparent hover:text-emerald-600 hover:border-emerald-500 focus-visible:text-emerald-600 focus-visible:border-emerald-500"
    }`;

  const mobileLinkClasses = (href: string) =>
    `block rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
      pathname === href
        ? "text-emerald-600 bg-emerald-50"
        : "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
    }`;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between gap-6 py-3">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <Image
              src={logo}
              alt="Artificial Webs"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="text-xl font-semibold tracking-tight text-emerald-700">
              Artificial Webs
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={desktopLinkClasses(link.href)}>
                {t(link.key)}
              </Link>
            ))}
            <div className="ml-4 flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg transition-colors duration-200 hover:text-emerald-600 hover:border-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 flex items-center gap-2"
                title={language === "es" ? "Switch to English" : "Cambiar a Español"}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {language === "es" ? "EN" : "ES"}
              </button>
              <button className="px-5 py-2 text-sm font-semibold text-white bg-emerald-500 rounded-lg shadow-sm transition-all duration-200 hover:bg-emerald-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40">
                {t("nav.getStarted")}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-500 rounded-lg transition-colors hover:text-emerald-600 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64" : "max-h-0"
          }`}
        >
          <div className="flex flex-col rounded-xl border border-slate-200 bg-white/95 shadow-sm backdrop-blur px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={mobileLinkClasses(link.href)}>
                {t(link.key)}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-emerald-600 hover:border-emerald-400"
              title={language === "es" ? "Switch to English" : "Cambiar a Español"}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              {language === "es" ? "EN" : "ES"}
            </button>
            <button className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-600">
              {t("nav.getStarted")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
