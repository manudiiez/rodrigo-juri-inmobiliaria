'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Properties() {
  const t = useTranslations('Properties');

  return (
    <section id="propiedades" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Propiedad 1 */}
          <div className="property-card bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="property-image h-80 rounded-t-2xl relative">
              <Image
                className="w-full h-full object-cover"
                src="/finca1.jpg"
                alt={t('property1AltText')}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('property1Name')}
                  </h3>
                  <p className="text-gray-600">
                    {t('property1Location')} • {t('property1Size')}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-bordeaux">
                    {t('property1PricePerHa')}
                  </div>
                  <div className="text-sm text-gray-500">{t('property1Total')}</div>
                </div>
              </div>

              <div className="space-y-3 mb-6 text-gray-600">
                <div className="flex justify-between">
                  <span>{t('aptitude')}</span>
                  <span className="font-medium">{t('property1Aptitude')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('irrigation')}</span>
                  <span className="font-medium">{t('property1Irrigation')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('energy')}</span>
                  <span className="font-medium">{t('property1Energy')}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/finca"
                  className="flex-1 bg-bordeaux text-white py-3 rounded-lg hover:bg-bordeaux-light transition-colors text-center"
                >
                  {t('viewFull')}
                </Link>
                <a
                  href={`https://wa.me/5492614123456?text=Consulta%20por%20${encodeURIComponent(t('property1Name'))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-bordeaux text-bordeaux rounded-lg hover:bg-bordeaux hover:text-white transition-colors"
                >
                  {t('consult')}
                </a>
              </div>
            </div>
          </div>

          {/* Propiedad 2 */}
          <div className="property-card bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="property-image h-80 rounded-t-2xl relative">
              <Image
                className="w-full h-full object-cover"
                src="/finca2.jpg"
                alt={t('property2AltText')}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('property2Name')}
                  </h3>
                  <p className="text-gray-600">
                    {t('property2Location')} • {t('property2Size')}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-bordeaux">
                    {t('property2PricePerHa')}
                  </div>
                  <div className="text-sm text-gray-500">{t('property2Total')}</div>
                </div>
              </div>

              <div className="space-y-3 mb-6 text-gray-600">
                <div className="flex justify-between">
                  <span>{t('aptitude')}</span>
                  <span className="font-medium">{t('property2Aptitude')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('irrigation')}</span>
                  <span className="font-medium">{t('property2Irrigation')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('energy')}</span>
                  <span className="font-medium">{t('property2Energy')}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/finca"
                  className="flex-1 bg-bordeaux text-white py-3 rounded-lg hover:bg-bordeaux-light transition-colors text-center"
                >
                  {t('viewFull')}
                </Link>
                <a
                  href={`https://wa.me/5492614123456?text=Consulta%20por%20${encodeURIComponent(t('property2Name'))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-bordeaux text-bordeaux rounded-lg hover:bg-bordeaux hover:text-white transition-colors"
                >
                  {t('consult')}
                </a>
              </div>
            </div>
          </div>

          {/* Propiedad 3 */}
          <div className="property-card bg-white rounded-2xl overflow-hidden shadow-lg lg:col-span-2">
            <div className="grid lg:grid-cols-2">
              <div className="property-image h-80 lg:h-full relative">
                <Image
                  className="w-full h-full object-cover"
                  src="/finca2.jpg"
                  alt={t('property3AltText')}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {t('property3Name')}
                    </h3>
                    <p className="text-gray-600">
                      {t('property3Location')} • {t('property3Size')}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-bordeaux">
                      {t('property3PricePerHa')}
                    </div>
                    <div className="text-sm text-gray-500">{t('property3Total')}</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-gray-600">
                  <div className="flex justify-between">
                    <span>{t('aptitude')}</span>
                    <span className="font-medium">{t('property3Aptitude')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('irrigation')}</span>
                    <span className="font-medium">{t('property3Irrigation')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('energy')}</span>
                    <span className="font-medium">{t('property3Energy')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('altitude')}</span>
                    <span className="font-medium">{t('property3Altitude')}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    href="/finca"
                    className="flex-1 bg-bordeaux text-white py-3 rounded-lg hover:bg-bordeaux-light transition-colors text-center"
                  >
                    {t('viewFull')}
                  </Link>
                  <a
                    href={`https://wa.me/5492614123456?text=Consulta%20por%20${encodeURIComponent(t('property3Name'))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-bordeaux text-bordeaux rounded-lg hover:bg-bordeaux hover:text-white transition-colors"
                  >
                    {t('consult')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-16">
          <Link
            href="/propiedades"
            className="border-2 border-bordeaux text-bordeaux px-8 py-4 rounded-lg text-lg hover:bg-bordeaux hover:text-white transition-colors"
          >
            {t('viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
