'use client';

export default function HeroVender() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Valle de Uco"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
          Venda su Finca o Campo
          <br />
          <span className="text-[#D4AF37]">Con Confianza</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
          Comience a vender su finca hoy.
        </p>
        <a
          href="#formulario-valuacion"
          className="inline-block bg-white text-bordeaux-dark px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-xl"
        >
          SOLICITAR SERVICIOS
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/80 animate-bounce">
          <span className="text-sm uppercase tracking-wider">Descubra más</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
