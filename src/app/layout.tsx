import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/overall/navbar";
import CookieConsent from "@/components/overall/CookieConsent";
import bgImage from "@/app/bg.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.artificialwebs.com"),
  title: "Artificial Webs México",
  description: "Desarrollamos sitios web profesionales",
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
      "en-US": "/?lang=en",
    },
  },
  openGraph: {
    title: "Artificial Webs México",
    description: "Desarrollamos sitios web profesionales",
    url: "https://www.artificialwebs.com/",
    siteName: "Artificial Webs",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630 },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Webs México",
    description: "Desarrollamos sitios web profesionales",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-950`}
      >
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JJYNN7JM4S"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JJYNN7JM4S');
            gtag('config', 'AW-17656232046');
          `}
        </Script>
        <Script id="ld-org-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "Artificial Webs",
                "url": "https://www.artificialwebs.com/",
                "logo": "https://www.artificialwebs.com/vercel.svg",
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+52 624 239 2710",
                    "contactType": "sales",
                    "areaServed": "MX",
                    "availableLanguage": ["es", "en"]
                  }
                ]
              },
              {
                "@type": "WebSite",
                "name": "Artificial Webs",
                "url": "https://www.artificialwebs.com/"
              }
            ]
          })}
        </Script>
        <LanguageProvider>
          <div className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-950">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <Image
                src={bgImage}
                alt=""
                fill
                priority
                className="object-cover object-center opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent dark:from-emerald-500/20 dark:via-teal-500/10 dark:to-transparent"></div>
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-transparent dark:bg-emerald-500/30 rounded-full blur-[120px] dark:animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-transparent dark:bg-teal-400/20 rounded-full blur-[100px]"></div>

            <div className="relative z-10 flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 pt-0 md:pt-4">
                {children}
              </main>
              <footer className="mt-16 mb-10 px-6">
                <div className="max-w-6xl mx-auto rounded-2xl border border-emerald-500/20 bg-slate-950/80 text-slate-200 px-6 py-5 text-center shadow-lg shadow-emerald-500/10">
                  <p className="text-sm sm:text-base">
                    No tenemos footer, gracias por leer, contactanos!{" "}
                    <Link href="/contact" className="text-emerald-300 font-semibold hover:text-emerald-200 transition-colors">
                      Aquí
                    </Link>
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </LanguageProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
