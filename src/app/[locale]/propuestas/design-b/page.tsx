import Hero from '@/sections/home/Hero';
import Presentation from '@/sections/home/Presentation';
import Properties from '@/sections/home/Properties';
import Contact from '@/sections/home/Contact';
import NavbarPremium from '@/components/propuestas/NavbarPremium';
import Footer from '@/components/Footer';

export default function DesignBPage() {
  return (
    <>
      <NavbarPremium />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black pt-32">
        {/* Banner informativo */}
        <div className="bg-yellow-50 border-b border-yellow-200 py-3">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-sm text-yellow-900 text-center">
              <span className="font-semibold">💎 Diseño B - Premium:</span> Estilo elegante y sofisticado con fondo oscuro.
            </p>
          </div>
        </div>

        {/* Contenido con estilo premium */}
        <div className="max-w-7xl mx-auto py-16 space-y-16 pb-20">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <Hero />
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <Presentation />
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <Properties />
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
