'use client';

import { useTranslations } from 'next-intl';
import type { Property } from '@/data/properties';

interface PropertyLocationProps {
  property: Property;
}

export default function PropertyLocation({ property }: PropertyLocationProps) {
  const t = useTranslations('PropertyPage.location');

  return (
    <section id="ubicacion" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t('title')}</h2>

        <div className="bg-white p-8 rounded-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-100 h-80 rounded-xl flex flex-col items-center justify-center text-gray-500 mb-6">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-lg font-semibold">{t('interactiveMap')}</p>
                <p className="text-sm">Luján de Cuyo, Mendoza</p>
              </div>
              <div className="text-center text-sm text-gray-600">
                <p>
                  <strong>{t('coordinates')}:</strong> {property.coordenadas}
                </p>
                <p>
                  <strong>{t('access')}:</strong> RP 15 + 2 km {t('gravel')}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-bordeaux">{t('advantages')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-bordeaux rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t('advantage1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-bordeaux rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t('advantage2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-bordeaux rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t('advantage3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-bordeaux rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t('advantage4')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-bordeaux rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t('advantage5')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
