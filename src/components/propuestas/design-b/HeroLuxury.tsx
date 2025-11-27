'use client';

import { useState, useEffect } from 'react';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80',
    location: 'Finca en Tunuyán, Mendoza, Argentina',
    price: '$850.000',
    title: "Finca de Lujo en el Valle de Uco"
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    location: 'Terreno en Tupungato, Mendoza, Argentina',
    price: '$1.200.000',
    title: "Tu Hogar en las Montañas"
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    location: 'Viñedo en San Carlos, Mendoza, Argentina',
    price: '$2.500.000',
    title: "Inversión Premium en Viñedos"
  }
];

export default function HeroLuxury() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full max-w-[1920px] mx-auto px-6 lg:px-12 flex flex-col justify-center items-start text-white">
        {/* Main Title */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-serif mb-6 leading-tight">
            El Mercado de Lujo
            <br />
            <span className="italic font-light">del Valle de Uco</span>
          </h1>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-4 text-sm lg:text-base">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
              <span className="uppercase tracking-wider">UNA BÚSQUEDA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
              <span className="uppercase tracking-wider">150+ FINCAS</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
              <span className="uppercase tracking-wider">25+ AÑOS DE EXPERIENCIA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
              <span className="uppercase tracking-wider">TODO MENDOZA</span>
            </div>
          </div>
        </div>

        {/* Current Property Info */}
        <div className="flex items-center gap-6 mb-8">
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/40 hover:bg-white/10 flex items-center justify-center transition-all duration-300"
              aria-label="Previous property"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/40 hover:bg-white/10 flex items-center justify-center transition-all duration-300"
              aria-label="Next property"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div>
            <p className="text-2xl font-light mb-1">{heroSlides[currentSlide].location}</p>
            <p className="text-lg text-white/70">{heroSlides[currentSlide].price}</p>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 transition-all duration-300 ${
                index === currentSlide ? 'w-12 bg-[#D4AF37]' : 'w-8 bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-xs uppercase tracking-wider">Explorar</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
