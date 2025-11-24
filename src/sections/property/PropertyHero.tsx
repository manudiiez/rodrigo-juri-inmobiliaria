'use client';

import { useTranslations } from 'next-intl';
import type { Property } from '@/data/properties';

interface PropertyHeroProps {
  property: Property;
}

export default function PropertyHero({ property }: PropertyHeroProps) {
  const t = useTranslations('PropertyPage');

  const getLocation = () => {
    return "Luján de Cuyo, Mendoza";
  };

  const getProductType = () => {
    return "Viñedos Premium";
  };

  return (
    <section className="pt-24 pb-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            {property.nombre}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8">
            {getLocation()} • {getProductType()}
          </p>
          <a
            href={`https://wa.me/5492614123456?text=${encodeURIComponent(t('whatsappConsult', { property: property.nombre }))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-bordeaux text-white px-8 py-4 rounded-lg text-lg hover:bg-bordeaux-light transition-colors"
          >
            {t('consultWhatsApp')}
          </a>
        </div>
      </div>
    </section>
  );
}
