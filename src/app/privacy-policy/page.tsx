export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="relative z-10 flex flex-col pt-28 pb-20 px-6 md:px-12">
        <section className="max-w-5xl mx-auto w-full">
          <div className="text-center space-y-4 mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Política de Privacidad</h1>
            <p className="text-slate-300/85 text-base md:text-lg max-w-2xl mx-auto">
              Explicamos cómo recopilamos, usamos y protegemos tus datos personales, y cómo utilizamos cookies.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2>1. Datos que recopilamos</h2>
            <p>
              Recopilamos la información que nos proporcionas voluntariamente a través del formulario de contacto,
              así como datos técnicos anónimos para analítica (por ejemplo, tipo de dispositivo o navegador).
            </p>

            <h2>2. Uso de la información</h2>
            <p>
              Utilizamos tus datos para responder a tus consultas, brindarte nuestros servicios y mejorar la experiencia del sitio.
              No vendemos tus datos personales.
            </p>

            <h2>3. Cookies</h2>
            <p>
              Empleamos cookies para fines funcionales, analíticos y publicitarios. Puedes aceptarlas o rechazarlas
              desde el banner de cookies en cualquier momento.
            </p>

            <h2>4. Seguridad</h2>
            <p>
              Aplicamos medidas técnicas y organizativas razonables para proteger tus datos. El sitio utiliza conexión segura (SSL).
            </p>

            <h2>5. Derechos</h2>
            <p>
              Puedes solicitar acceso, rectificación o eliminación de tus datos escribiendo a nuestro correo de contacto.
            </p>

            <h2>6. Contacto</h2>
            <p>
              Si tienes dudas sobre esta política, contáctanos en contacto@artificialwebs.com
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
