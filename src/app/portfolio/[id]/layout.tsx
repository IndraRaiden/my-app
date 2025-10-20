import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params?.id;
  const title = `Proyecto ${id} | Portafolio | Artificial Webs México`;
  const description = `Detalle del proyecto ${id} de nuestro portafolio. Sitios corporativos, tiendas en línea y aplicaciones web.`;
  const url = `https://www.artificialwebs.com/portfolio/${id}`;
  return {
    title,
    description,
    alternates: {
      canonical: `/portfolio/${id}`,
      languages: {
        "es-MX": `/portfolio/${id}`,
        "en-US": `/portfolio/${id}?lang=en`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Artificial Webs",
      images: [{ url: `/portfolio/opengraph-image`, width: 1200, height: 630 }],
      locale: "es_MX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/portfolio/opengraph-image"],
    },
  };
}

export default function PortfolioDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
