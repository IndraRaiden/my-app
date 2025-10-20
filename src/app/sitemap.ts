import type { MetadataRoute } from "next";

const base = "https://www.artificialwebs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/portfolio",
    "/faqs",
    "/contact",
    "/careers",
    "/blog",
    "/privacy-policy",
    "/terms",
  ];
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
