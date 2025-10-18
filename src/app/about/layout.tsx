import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca de | Artificial Webs México",
  description: "Conoce nuestra misión, visión y valores. Estudio de desarrollo web en México.",
  alternates: {
    canonical: "/about",
    languages: {
      "es-MX": "/about",
      "en-US": "/about?lang=en",
    },
  },
  openGraph: {
    title: "Acerca de | Artificial Webs México",
    description: "Conoce nuestra misión, visión y valores. Estudio de desarrollo web en México.",
    url: "https://www.artificialwebs.com/about",
    siteName: "Artificial Webs",
    images: [{ url: "/about/opengraph-image", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acerca de | Artificial Webs México",
    description: "Conoce nuestra misión, visión y valores. Estudio de desarrollo web en México.",
    images: ["/about/opengraph-image"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
