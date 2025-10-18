import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Artificial Webs México",
  description: "Respuestas a dudas sobre servicios, proceso, tiempos y costos.",
  alternates: {
    canonical: "/faqs",
    languages: {
      "es-MX": "/faqs",
      "en-US": "/faqs?lang=en",
    },
  },
  openGraph: {
    title: "Preguntas Frecuentes | Artificial Webs México",
    description: "Respuestas a dudas sobre servicios, proceso, tiempos y costos.",
    url: "https://www.artificialwebs.com/faqs",
    siteName: "Artificial Webs",
    images: [{ url: "/faqs/opengraph-image", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preguntas Frecuentes | Artificial Webs México",
    description: "Respuestas a dudas sobre servicios, proceso, tiempos y costos.",
    images: ["/faqs/opengraph-image"],
  },
};

export default function FAQsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
