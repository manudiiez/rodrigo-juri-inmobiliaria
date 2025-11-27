import Hero from '@/sections/home/Hero';
import Presentation from '@/sections/home/Presentation';
import Properties from '@/sections/home/Properties';
import Contact from '@/sections/home/Contact';
import NavbarModerno from '@/components/propuestas/NavbarModerno';
import Footer from '@/components/Footer';

export default function DesignCPage() {
  return (
    <>
      <NavbarModerno />
      <main className="min-h-screen bg-white pt-28">
        {/* Banner informativo */}
        <div className="bg-green-50 border-b border-green-200 py-3">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-sm text-green-900 text-center">
              <span className="font-semibold">🎨 Diseño C - Moderno:</span> Layout dinámico con colores vibrantes y elementos visuales destacados.
            </p>
          </div>
        </div>

        {/* Contenido con estilo moderno */}
        <div className="relative">
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-bordeaux/5 to-purple-500/5 -z-10"></div>

          <div className="max-w-6xl mx-auto py-12 space-y-20 pb-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-bordeaux/20 to-purple-500/20 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <Hero />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform hover:scale-105 transition-transform">
                <Presentation />
              </div>
              <div className="bg-gradient-to-br from-bordeaux to-purple-600 rounded-2xl shadow-lg overflow-hidden flex items-center justify-center p-12">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-4">Diseño Moderno</h3>
                  <p className="text-lg opacity-90">Layout dinámico con elementos visuales impactantes</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <Properties />
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <Contact />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
