'use client';

import Image from 'next/image';
import Link from 'next/link';

const properties = [
  {
    id: 1,
    title: 'Finca Los Álamos',
    location: 'Luján de Cuyo, Mendoza',
    price: '$777,000',
    image: '/finca1.jpg',
    size: '42 hectáreas',
  },
  {
    id: 2,
    title: 'Estancia La Merced',
    location: 'San Rafael, Mendoza',
    price: '$1,176,000',
    image: '/finca2.jpg',
    size: '120 hectáreas',
  },
  {
    id: 3,
    title: 'Campo El Retiro',
    location: 'Tunuyán, Mendoza',
    price: '$988,000',
    image: '/finca1.jpg',
    size: '65 hectáreas',
  },
];

export default function PropertiesGrid() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-16 tracking-wide">
          Fincas y Campos destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Link
              key={property.id}
              href={`/propuestas/design-a/propiedades/${property.id}`}
              className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light text-gray-900 mb-2 group-hover:text-bordeaux transition-colors">
                  {property.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{property.location}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 text-lg font-light">{property.price}</span>
                  <span className="text-gray-500 text-sm">{property.size}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/propuestas/design-a/propiedades"
            className="inline-flex items-center gap-3 text-gray-900 hover:gap-5 transition-all group border-b border-gray-900 pb-1"
          >
            <span className="text-sm uppercase tracking-widest font-medium">Ver todas las propiedades rurales</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
