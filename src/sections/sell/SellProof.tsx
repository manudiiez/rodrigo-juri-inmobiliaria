'use client';

import { useTranslations } from 'next-intl';

export default function SellProof() {
  const t = useTranslations('SellPage.proof');

  return (
    <section className="py-16 bg-bordeaux text-center">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-white opacity-90">
          {t('subtitle')}
        </p>
      </div>
    </section>
  );
}
