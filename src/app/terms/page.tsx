export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="relative z-10 flex flex-col pt-28 pb-20 px-6 md:px-12">
        <section className="max-w-5xl mx-auto w-full">
          <div className="text-center space-y-4 mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Términos y Condiciones</h1>
            <p className="text-slate-300/85 text-base md:text-lg max-w-2xl mx-auto">
              Condiciones de uso del sitio y contratación de servicios de Artificial Webs México.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2>1. Alcance</h2>
            <p>Estos términos rigen el uso del sitio y la contratación de nuestros servicios.</p>

            <h2>2. Servicios</h2>
            <p>Los servicios, alcances, precios y tiempos se acordarán por escrito en cada propuesta.</p>

            <h2>3. Propiedad intelectual</h2>
            <p>El código y entregables se rigen por lo estipulado en el contrato o propuesta aprobada.</p>

            <h2>4. Pagos y facturación</h2>
            <p>Los pagos, hitos de facturación y políticas de reembolso se definen en la propuesta.</p>

            <h2>5. Privacidad y datos</h2>
            <p>El tratamiento de datos personales se detalla en nuestra Política de Privacidad.</p>

            <h2>6. Contacto</h2>
            <p>Para consultas sobre estos términos, contáctanos en contacto@artificialwebs.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}
