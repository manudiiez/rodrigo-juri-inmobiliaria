'use client';

import { useState } from 'react';
import Link from 'next/link';

const featuredProperties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'Finca Premium con Viñedo',
    location: 'Tupungato, Mendoza',
    price: '$12.500.000',
    beds: 5,
    baths: 4,
    area: '500 ha',
    type: 'Finca'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    title: 'Campo premium con Casa de Campo',
    location: 'San Carlos, Mendoza',
    price: '$1.800.000',
    beds: 4,
    baths: 3,
    area: '3500m²',
    type: 'Campo'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    title: 'Estancia con Vista a Los Andes',
    location: 'Tunuyán, Mendoza',
    price: '$3.200.000',
    beds: 6,
    baths: 5,
    area: '8000m²',
    type: 'Estancia'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: 'Villa Moderna con Bodega',
    location: 'Valle de Uco, Mendoza',
    price: '$4.500.000',
    beds: 5,
    baths: 4,
    area: '6500m²',
    type: 'Villa'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    title: 'Terreno en la Montaña',
    location: 'Potrerillos, Mendoza',
    price: '$950.000',
    beds: 3,
    baths: 2,
    area: '2200m²',
    type: 'Terreno'
  }
];

export default function PropertyCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('property-carousel');
    if (!container) return;

    const scrollAmount = 400;
    const newPosition = direction === 'left'
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);

    container.scrollTo({ left: newPosition, behavior: 'smooth' });
    setScrollPosition(newPosition);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-2">
              Fincas Destacadas
            </h2>
            <p className="text-gray-600">Descubre las fincas más exclusivas del Valle de Uco</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-bordeaux-dark hover:bg-bordeaux-dark hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Previous properties"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border-2 border-bordeaux-dark hover:bg-bordeaux-dark hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Next properties"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          id="property-carousel"
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredProperties.map((property) => (
            <Link
              key={property.id}
              href={`/propuestas/design-b/propiedades/${property.id}`}
              className="group flex-shrink-0 w-[350px] lg:w-[420px]"
            >
              {/* Image Container */}
              <div className="relative h-[280px] lg:h-[320px] overflow-hidden rounded-t-lg mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${property.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 px-4 py-2 rounded-full text-xs font-medium text-[#0D2B3E] uppercase tracking-wider">
                    {property.type}
                  </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-2xl font-light text-white">{property.price}</p>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-serif text-[#0D2B3E] group-hover:text-[#D4AF37] transition-colors duration-300">
                  {property.title}
                </h3>

                <p className="text-gray-600 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {property.location}
                </p>

                {/* Features */}
                <div className="flex items-center gap-6 text-sm text-gray-600 pt-2 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>{property.beds} Hab.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    <span>{property.baths} Baños</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/propuestas/design-b/propiedades"
            className="px-8 py-4 bg-bordeaux-dark text-white hover:bg-bordeaux transition-all duration-300 rounded-full font-medium"
          >
            Ver Todas las Propiedades
          </Link>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
