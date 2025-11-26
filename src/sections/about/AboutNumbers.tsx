'use client';

import { useTranslations } from 'next-intl';

export default function AboutNumbers() {
  const t = useTranslations('AboutPage.numbers');

  const stats = [
    {
      number: '5+',
      label: t('stat1.label'),
      sublabel: t('stat1.sublabel'),
    },
    {
      number: '100+',
      label: t('stat2.label'),
      sublabel: t('stat2.sublabel'),
    },
    {
      number: '30+',
      label: t('stat3.label'),
      sublabel: t('stat3.sublabel'),
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8">
              <div className="text-6xl lg:text-7xl font-extrabold text-bordeaux mb-4 tracking-tight">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-base text-gray-600">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
