import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio | Artificial Webs México",
  description: "Proyectos y casos de éxito en desarrollo web y e-commerce.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portafolio | Artificial Webs México",
    description: "Proyectos y casos de éxito en desarrollo web y e-commerce.",
    url: "https://www.artificialwebs.com/portfolio",
    siteName: "Artificial Webs",
    images: [{ url: "/portfolio/opengraph-image", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio | Artificial Webs México",
    description: "Proyectos y casos de éxito en desarrollo web y e-commerce.",
    images: ["/portfolio/opengraph-image"],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
