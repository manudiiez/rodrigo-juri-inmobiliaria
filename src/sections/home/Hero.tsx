'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section
      id="inicio"
      className="hero-gradient flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-black leading-tight">
            {t('title')}{' '}
            <span className="text-bordeaux">{t('titleHighlight')}</span>
          </h1>
          <p className="text-xl lg:text-2xl text-black mb-12 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>

          {/* Credenciales */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-bordeaux mb-2">
                {t('credential1Value')}
              </div>
              <p className="text-black">{t('credential1Text')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-bordeaux mb-2">
                {t('credential2Value')}
              </div>
              <p className="text-black">{t('credential2Text')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-bordeaux mb-2">
                {t('credential3Value')}
              </div>
              <p className="text-black">{t('credential3Text')}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/propiedades"
              className="bg-bordeaux text-white px-8 py-4 rounded-lg text-lg hover:bg-bordeaux-light transition-colors font-semibold"
            >
              {t('ctaPrimary')}
            </Link>
            <a
              href="#contacto"
              className="border-2 border-bordeaux text-bordeaux px-8 py-4 rounded-lg text-lg hover:bg-bordeaux hover:text-white transition-colors"
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
