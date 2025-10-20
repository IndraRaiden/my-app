import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trabaja con nosotros | Artificial Webs México",
  description:
    "Únete a Artificial Webs: buscamos talento en desarrollo web, diseño y marketing digital.",
  alternates: {
    canonical: "/careers",
    languages: {
      "es-MX": "/careers",
      "en-US": "/careers?lang=en",
    },
  },
  openGraph: {
    title: "Trabaja con nosotros | Artificial Webs México",
    description:
      "Únete a Artificial Webs: buscamos talento en desarrollo web, diseño y marketing digital.",
    url: "https://www.artificialwebs.com/careers",
    siteName: "Artificial Webs",
    images: [{ url: "/careers/opengraph-image", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trabaja con nosotros | Artificial Webs México",
    description:
      "Únete a Artificial Webs: buscamos talento en desarrollo web, diseño y marketing digital.",
    images: ["/careers/opengraph-image"],
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
