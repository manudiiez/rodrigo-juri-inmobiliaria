'use client';

import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
          {t('title')}
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href="https://wa.me/5492614123456"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bordeaux text-white px-8 py-4 rounded-lg text-lg hover:bg-bordeaux-light transition-colors"
          >
            {t('whatsappButton')}
          </a>
          <a
            href={`mailto:${t('email')}`}
            className="border-2 border-bordeaux text-bordeaux px-8 py-4 rounded-lg text-lg hover:bg-bordeaux hover:text-white transition-colors"
          >
            {t('emailButton')}
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-gray-600">
          <div>
            <div className="text-bordeaux text-2xl mb-2">📱</div>
            <p>{t('phone')}</p>
          </div>
          <div>
            <div className="text-bordeaux text-2xl mb-2">✉️</div>
            <p>{t('email')}</p>
          </div>
          <div>
            <div className="text-bordeaux text-2xl mb-2">📍</div>
            <p>{t('location')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
