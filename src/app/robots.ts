import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.artificialwebs.com/sitemap.xml",
    host: "www.artificialwebs.com",
  };
}
