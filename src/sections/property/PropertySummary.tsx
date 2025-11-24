'use client';

import { useTranslations } from 'next-intl';
import type { Property } from '@/data/properties';

interface PropertySummaryProps {
  property: Property;
}

export default function PropertySummary({ property }: PropertySummaryProps) {
  const t = useTranslations('PropertyPage.summary');

  return (
    <section id="resumen" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t('title')}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-bordeaux mb-2">{property.superficie} ha</div>
            <p className="text-gray-600">{t('totalSurface')}</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-bordeaux mb-2">USD {property.precio.toLocaleString()}</div>
            <p className="text-gray-600">{t('pricePerHa')}</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-bordeaux mb-2">USD {property.precioTotal.toLocaleString()}</div>
            <p className="text-gray-600">{t('totalValue')}</p>
          </div>
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-bordeaux mb-2">950 msnm</div>
            <p className="text-gray-600">{t('altitude')}</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">{t('productiveAptitude')}:</span>
                <span className="font-semibold">Viñedos premium / Olivos</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">{t('currentState')}:</span>
                <span className="font-semibold">En producción</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">{t('mainAccess')}:</span>
                <span className="font-semibold">RP 15 + 2 km ripio</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">{t('coordinates')}:</span>
                <span className="font-semibold">{property.coordenadas}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">{t('distanceToCity')}:</span>
                <span className="font-semibold">35 km</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-600">{t('nearbyServices')}:</span>
                <span className="font-semibold">5 km</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
