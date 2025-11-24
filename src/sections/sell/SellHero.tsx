'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function SellHero() {
  const t = useTranslations('SellPage.hero');

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-200 py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
          {t('title')}
        </h1>
        <p className="text-xl lg:text-2xl text-bordeaux font-semibold mb-10 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href="#formulario"
            className="bg-bordeaux text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-bordeaux-light transition-colors"
          >
            {t('ctaPrimary')}
          </a>
          <a
            href="https://wa.me/5492614123456"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-10 py-4 rounded-lg text-lg font-semibold border-2 border-black hover:bg-black hover:text-white transition-all"
          >
            {t('ctaSecondary')}
          </a>
        </div>
      </div>
    </section>
  );
}
