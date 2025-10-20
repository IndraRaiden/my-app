import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Artificial Webs México",
  description: "Recursos y artículos sobre desarrollo web, e-commerce y aplicaciones web.",
  alternates: {
    canonical: "/blog",
    languages: {
      "es-MX": "/blog",
      "en-US": "/blog?lang=en",
    },
  },
  openGraph: {
    title: "Blog | Artificial Webs México",
    description: "Recursos y artículos sobre desarrollo web, e-commerce y aplicaciones web.",
    url: "https://www.artificialwebs.com/blog",
    siteName: "Artificial Webs",
    images: [{ url: "/blog/opengraph-image", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Artificial Webs México",
    description: "Recursos y artículos sobre desarrollo web, e-commerce y aplicaciones web.",
    images: ["/blog/opengraph-image"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
