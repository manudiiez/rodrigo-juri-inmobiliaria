'use client';

import { useTranslations } from 'next-intl';
import type { Property } from '@/data/properties';

interface PropertyTechnicalSheetProps {
  property: Property;
}

export default function PropertyTechnicalSheet({ property }: PropertyTechnicalSheetProps) {
  const t = useTranslations('PropertyPage.technical');

  return (
    <section id="ficha-tecnica" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t('title')}</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Suelo y Clima */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 text-bordeaux">{t('soilClimate')}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-gray-600 text-sm">{t('soilType')}:</span>
                <div className="font-semibold">Franco-arcilloso</div>
              </div>
              <div>
                <span className="text-gray-600 text-sm">{t('ph')}:</span>
                <div className="font-semibold">{property.ph === 'neutro' ? '7.2 (neutro)' : property.ph}</div>
              </div>
              <div>
                <span className="text-gray-600 text-sm">{t('slope')}:</span>
                <div className="font-semibold">2-5% ({t('gentle')})</div>
              </div>
              <div>
                <span className="text-gray-600 text-sm">{t('drainage')}:</span>
                <div className="font-semibold">{t('good')}</div>
              </div>
            </div>
          </div>

          {/* Agua y Riego */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 text-bordeaux">{t('waterIrrigation')}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-gray-600 text-sm">{t('waterSource')}:</span>
                <div className="font-semibold">Canal de riego</div>
              </div>
              <div>
                <span className="text-gray-600 text-sm">{t('irrigationSystem')}:</span>
                <div className="font-semibold">Goteo</div>
              </div>
            </div>
          </div>

          {/* Instalaciones */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 text-bordeaux">{t('installations')}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-gray-600 text-sm">Casa:</span>
                <div className="font-semibold">{t('available')}</div>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Galpón:</span>
                <div className="font-semibold">{t('available')}</div>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Sala de riego:</span>
                <div className="font-semibold">{t('available')}</div>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Cercos:</span>
                <div className="font-semibold">{t('available')}</div>
              </div>
            </div>
          </div>

          {/* Energía y Productividad */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 text-bordeaux">{t('energyProductivity')}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-gray-600 text-sm">{t('energyType')}:</span>
                <div className="font-semibold">Trifásica</div>
              </div>
              <div>
                <span className="text-gray-600 text-sm">{t('productivity')}:</span>
                <div className="font-semibold">12.000 kg/ha</div>
              </div>
              <div>
                <span className="text-gray-600 text-sm">{t('plantationAge')}:</span>
                <div className="font-semibold">Joven (6-15 años)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Documentación Legal y Servicios */}
        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 text-bordeaux">{t('legalDocs')}</h3>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Escritura:</span>
                <span className="font-semibold text-green-600">{t('upToDate')}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Apto crédito:</span>
                <span className="font-semibold text-green-600">{t('upToDate')}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Libre de deudas:</span>
                <span className="font-semibold text-green-600">{t('upToDate')}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 text-bordeaux">{t('nearbyServices')}</h3>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Centro urbano:</span>
                <span className="font-semibold">5 km</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Bodegas:</span>
                <span className="font-semibold">3-8 km</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Escuela:</span>
                <span className="font-semibold">4 km</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Hospital:</span>
                <span className="font-semibold">12 km</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
