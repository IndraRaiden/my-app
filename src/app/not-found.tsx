import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-200">Página no encontrada</h1>
        <p className="text-slate-400">La página que buscas no existe o fue movida.</p>
        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
