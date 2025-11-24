'use client';

import { useTranslations } from 'next-intl';

interface PropertiesHeroProps {
  totalProperties: number;
}

export default function PropertiesHero({ totalProperties }: PropertiesHeroProps) {
  const t = useTranslations('PropertiesPage');

  return (
    <section className="pt-24 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('subtitle')}
          </p>
          <div className="bg-bordeaux text-white px-6 py-3 rounded-lg inline-block">
            <span className="font-bold">{totalProperties}</span> {t('available')}
          </div>
        </div>
      </div>
    </section>
  );
}
