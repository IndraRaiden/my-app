import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Artificial Webs México",
  description: "Consulta las condiciones de uso y contratación de nuestros servicios.",
  alternates: {
    canonical: "/terms",
    languages: {
      "es-MX": "/terms",
      "en-US": "/terms?lang=en",
    },
  },
  openGraph: {
    title: "Términos y Condiciones | Artificial Webs México",
    description: "Consulta las condiciones de uso y contratación de nuestros servicios.",
    url: "https://www.artificialwebs.com/terms",
    siteName: "Artificial Webs",
    images: [{ url: "/terms/opengraph-image", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos y Condiciones | Artificial Webs México",
    description: "Consulta las condiciones de uso y contratación de nuestros servicios.",
    images: ["/terms/opengraph-image"],
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
