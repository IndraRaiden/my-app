export default function BlogPage() {
  const posts = [
    {
      slug: "tendencias-desarrollo-web-2025",
      title: "Tendencias de desarrollo web 2025",
      excerpt: "Frameworks, performance y accesibilidad: lo que debes considerar este año.",
    },
    {
      slug: "como-optimizar-tu-ecommerce",
      title: "Cómo optimizar tu e‑commerce para convertir más",
      excerpt: "SEO, UX y performance aplicados a tiendas en línea modernas.",
    },
    {
      slug: "guia-rapida-schema-structured-data",
      title: "Guía rápida de datos estructurados (Schema)",
      excerpt: "Mejora tu SEO con JSON‑LD en servicios, FAQs y portafolio.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="relative z-10 flex flex-col pt-28 pb-20 px-6 md:px-12">
        <section className="max-w-6xl mx-auto w-full">
          <div className="text-center space-y-4 mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Blog</h1>
            <p className="text-slate-300/85 text-base md:text-lg max-w-2xl mx-auto">
              Recursos y artículos sobre desarrollo web, e‑commerce y aplicaciones web.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.slug} className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950/80 p-6 shadow-xl shadow-emerald-500/10">
                <h2 className="text-white font-semibold text-lg mb-2">{p.title}</h2>
                <p className="text-slate-300/85 text-sm mb-4">{p.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-200 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 hover:bg-emerald-500/20">
                  Leer más
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
