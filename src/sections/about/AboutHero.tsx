'use client';

import { useTranslations } from 'next-intl';

export default function AboutHero() {
  const t = useTranslations('AboutPage.hero');

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700 hero-gradient">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-8">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-bordeaux">
          {t('title')}
        </h1>
        <p className="text-xl lg:text-3xl font-light opacity-95 leading-relaxed text-black">
          {t('subtitle')}
        </p>
      </div>
    </section>
  );
}
 