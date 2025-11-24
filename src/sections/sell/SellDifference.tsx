'use client';

import { useTranslations } from 'next-intl';

export default function SellDifference() {
  const t = useTranslations('SellPage.difference');

  const cards = [
    {
      icon: '🌎',
      title: t('card1Title'),
      description: t('card1Description'),
    },
    {
      icon: '📸',
      title: t('card2Title'),
      description: t('card2Description'),
    },
    {
      icon: '💼',
      title: t('card3Title'),
      description: t('card3Description'),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-5">
          {t('title')}
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="text-center p-10 bg-gray-50 rounded-xl hover:-translate-y-1 transition-transform"
            >
              <div className="w-20 h-20 bg-bordeaux rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
