'use client';

import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'Campos',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    count: '45+ Propiedades',
    href: '/propuestas/design-b/propiedades?type=casa',
    gradient: 'from-black/60 to-black/30'
  },
  {
    id: 2,
    name: 'Fincas & Viñedos',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    count: '32+ Propiedades',
    href: '/propuestas/design-b/propiedades?type=finca',
    gradient: 'from-black/60 to-black/30'
  },
 
  {
    id: 3,
    name: 'Terrenos Exclusivos',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    count: '56+ Propiedades',
    href: '/propuestas/design-b/propiedades?type=terreno',
    gradient: 'from-black/60 to-black/30'
  }
];

export default function FeaturedCategories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-[#0D2B3E] mb-4">
            Categorías Destacadas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora nuestra selección curada de propiedades exclusivas en el Valle de Uco
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative h-[400px] overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient}`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-serif mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-sm text-white/80 mb-4">{category.count}</p>

                {/* Arrow Icon */}
                <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </Link>
          ))}
        </div>

        {/* Large Featured Categories - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <Link
            href="/propuestas/design-b/propiedades?type=comercial"
            className="group relative h-[300px] overflow-hidden rounded-lg"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

            <div className="absolute inset-0 flex flex-col justify-center p-8 lg:p-12 text-white">
              <h3 className="text-3xl lg:text-4xl font-serif mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                Propiedades Comerciales
              </h3>
              <p className="text-lg text-white/80 mb-6">Inversiones estratégicas en ubicaciones premium en Valle de Uco</p>

              <div className="flex items-center gap-3 text-sm">
                <span>Explorar Oportunidades</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          <Link
            href="/propuestas/design-b/propiedades?type=inversion"
            className="group relative h-[300px] overflow-hidden rounded-lg"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

            <div className="absolute inset-0 flex flex-col justify-center p-8 lg:p-12 text-white">
              <h3 className="text-3xl lg:text-4xl font-serif mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                Oportunidades de Inversión
              </h3>
              <p className="text-lg text-white/80 mb-6">Proyectos exclusivos con alto potencial de retorno</p>

              <div className="flex items-center gap-3 text-sm">
                <span>Ver Proyectos</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
