import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Artificial Webs México",
  description: "Conoce cómo protegemos tus datos personales y el uso de cookies en nuestro sitio.",
  alternates: {
    canonical: "/privacy-policy",
    languages: {
      "es-MX": "/privacy-policy",
      "en-US": "/privacy-policy?lang=en",
    },
  },
  openGraph: {
    title: "Política de Privacidad | Artificial Webs México",
    description: "Conoce cómo protegemos tus datos personales y el uso de cookies en nuestro sitio.",
    url: "https://www.artificialwebs.com/privacy-policy",
    siteName: "Artificial Webs",
    images: [{ url: "/privacy-policy/opengraph-image", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidad | Artificial Webs México",
    description: "Conoce cómo protegemos tus datos personales y el uso de cookies en nuestro sitio.",
    images: ["/privacy-policy/opengraph-image"],
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
