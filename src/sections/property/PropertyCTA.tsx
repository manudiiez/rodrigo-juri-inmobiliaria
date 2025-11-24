'use client';

import { useTranslations } from 'next-intl';
import type { Property } from '@/data/properties';

interface PropertyCTAProps {
  property: Property;
}

export default function PropertyCTA({ property }: PropertyCTAProps) {
  const t = useTranslations('PropertyPage.cta');

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900">{t('title')}</h2>
        <p className="text-xl text-gray-600 mb-12">{t('description')}</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href={`https://wa.me/5492614123456?text=${encodeURIComponent(t('requestReport', { property: property.nombre }))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bordeaux text-white px-8 py-4 rounded-lg text-lg hover:bg-bordeaux-light transition-colors"
          >
            {t('requestTechnicalReport')}
          </a>
          <a
            href={`https://wa.me/5492614123456?text=${encodeURIComponent(t('scheduleVisit', { property: property.nombre }))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-bordeaux text-bordeaux px-8 py-4 rounded-lg text-lg hover:bg-bordeaux hover:text-white transition-colors"
          >
            {t('scheduleVisitButton')}
          </a>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4 text-bordeaux">{t('directContact')}</h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-600">
            <div>
              <div className="text-2xl mb-2">📱</div>
              <p className="font-semibold">+54 9 261 412-3456</p>
              <p className="text-sm">{t('whatsappAvailable')}</p>
            </div>
            <div>
              <div className="text-2xl mb-2">✉️</div>
              <p className="font-semibold">rodrigo@fincasmendoza.com</p>
              <p className="text-sm">{t('response24h')}</p>
            </div>
            <div>
              <div className="text-2xl mb-2">👨‍💼</div>
              <p className="font-semibold">Rodrigo Juri</p>
              <p className="text-sm">{t('credentials')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
