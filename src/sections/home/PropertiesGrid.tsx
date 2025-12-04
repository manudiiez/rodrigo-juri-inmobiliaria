'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const properties2 = [
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

const properties = [
  {
    slug: "bodega-sinfin-maipu-mendoza",
    location: "Valle de Uco, Mendoza",
    image: "/images/sinfin/bodega-sinfin.jpg",
    content: {
      "es-AR": {
        title: "Bodega SinFin",
        info: "440 hectáreas",
        info2: "6 M Capacidad total",
      },
      "en-US": {
        title: "SinFin Winery",
        info: "440 hectares",
        info2: "6 M Total Capacity",
      },
      "pt-BR": {
        title: "Vinícola SinFin",
        info: "440 hectares",
        info2: "6 M Capacidade total",
      },
    },
  },
  {
    slug: "bodega-casir-dos-santos-maipu-mendoza",
    location: "Maipú, Mendoza",
    image: "/images/casirdossantos/bodega-casirdossantos-1.jpg",
    content: {
      "es-AR": {
        title: "Bodega Casir dos Santos",
        info: "Vinos de Alta Gama",
        info2: "Fundada en 1862",
      },
      "en-US": {
        title: "Casir dos Santos Winery",
        info: "Premium Wines",
        info2: "Founded in 1862",
      },
      "pt-BR": {
        title: "Vinícola Casir dos Santos",
        info: "Vinhos Premium",
        info2: "Fundação em 1862",
      },
    },
  },
];

export default function PropertiesGrid() {
  const t = useTranslations('HomePage.PropertiesGrid');

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-16 tracking-wide">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Link
              key={property.slug}
              href={`/propiedades/${property.slug}`}
              className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.content["es-AR"].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light text-gray-900 mb-2 group-hover:text-bordeaux transition-colors">
                  {property.content["es-AR"].title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{property.location}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 text-lg font-light">{property.content["es-AR"].info}</span>
                  <span className="text-gray-500 text-sm">{property.content["es-AR"].info2}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/propiedades"
            className="inline-flex items-center gap-3 text-gray-900 hover:gap-5 transition-all group border-b border-gray-900 pb-1"
          >
            <span className="text-sm uppercase tracking-widest font-medium">{t('viewAll')}</span>
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
