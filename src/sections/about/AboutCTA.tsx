'use client';

import { useTranslations } from 'next-intl';

export default function AboutCTA() {
  const t = useTranslations('AboutPage.cta');

  return (
    <section className="py-24 bg-gradient-to-br from-bordeaux to-[#600018] text-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          {t('title')}
        </h2>
        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          {t('description')}
        </p>
        <a
          href="https://wa.me/5492614123456"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-bordeaux px-12 py-5 rounded-full text-lg font-bold transition-all hover:-translate-y-1 hover:shadow-2xl"
        >
          {t('button')}
        </a>
      </div>
    </section>
  );
}
