'use client';

import { useTranslations } from 'next-intl';

export default function AboutEcosystem() {
  const t = useTranslations('AboutPage.ecosystem');

  const experts = [
    {
      icon: '🌱',
      title: t('card1.title'),
      description: t('card1.description'),
    },
    {
      icon: '🍷',
      title: t('card2.title'),
      description: t('card2.description'),
    },
    {
      icon: '📋',
      title: t('card3.title'),
      description: t('card3.description'),
    },
    {
      icon: '💼',
      title: t('card4.title'),
      description: t('card4.description'),
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-5 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-gray-50 p-11 rounded-2xl border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-5xl block mb-5">{expert.icon}</span>
              <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 tracking-tight">
                {expert.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {expert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
