import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Artificial Webs México",
  description: "Ponte en contacto: correo, teléfono y WhatsApp. Solicita una consultoría.",
  alternates: {
    canonical: "/contact",
    languages: {
      "es-MX": "/contact",
      "en-US": "/contact?lang=en",
    },
  },
  openGraph: {
    title: "Contacto | Artificial Webs México",
    description: "Ponte en contacto: correo, teléfono y WhatsApp. Solicita una consultoría.",
    url: "https://www.artificialwebs.com/contact",
    siteName: "Artificial Webs",
    images: [{ url: "/contact/opengraph-image", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Artificial Webs México",
    description: "Ponte en contacto: correo, teléfono y WhatsApp. Solicita una consultoría.",
    images: ["/contact/opengraph-image"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
