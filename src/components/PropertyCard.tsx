'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const t = useTranslations('PropertiesPage');

  const getDepartamentoName = (dept: string) => {
    return t(`departamentos.${dept}`);
  };

  const getCultivosName = (cultivos: string[]) => {
    return cultivos.map(c => t(`cultivos.${c}`)).join(', ');
  };

  const getRiegoName = (riego: string[]) => {
    return riego.map(r => t(`riego.${r}`)).join(', ');
  };

  const getEnergiaName = (energia: string) => {
    return t(`energia.${energia}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Imagen */}
        <div className="md:w-72 h-48 md:h-64 relative flex-shrink-0">
          <Image
            src={property.imagen}
            alt={property.nombre}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 288px"
          />
        </div>

        {/* Información */}
        <div className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {property.nombre}
              </h3>
              <p className="text-lg text-bordeaux font-semibold">
                {getDepartamentoName(property.departamento)}, Mendoza
              </p>
            </div>
            <span className="bg-bordeaux text-white px-4 py-2 rounded-full text-lg font-bold whitespace-nowrap">
              {property.superficie} ha
            </span>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {t('propertyDescription', {
              cultivos: getCultivosName(property.cultivos).toLowerCase(),
              tipo: property.cultivos.includes('vinedos') ? t('investment.wine') : t('investment.agricultural')
            })}
          </p>

          {/* Detalles técnicos */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600 font-medium">{t('surface')}</span>
              <span className="font-bold">{property.superficie} {t('hectares')}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600 font-medium">{t('pricePerHa')}</span>
              <span className="font-bold text-bordeaux">USD {property.precio.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600 font-medium">{t('aptitude')}</span>
              <span className="font-bold">{getCultivosName(property.cultivos)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600 font-medium">{t('irrigation')}</span>
              <span className="font-bold">{getRiegoName(property.riego)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600 font-medium">{t('energy')}</span>
              <span className="font-bold">{getEnergiaName(property.energia)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600 font-medium">{t('access')}</span>
              <span className="font-bold">{t('pavedRoad')}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/propiedades/${property.id}`}
              className="bg-bordeaux text-white px-6 py-3 rounded-lg hover:bg-bordeaux-light transition-colors font-semibold text-center"
            >
              {t('viewComplete')}
            </Link>
            <a
              href={`https://wa.me/5492614123456?text=${encodeURIComponent(t('whatsappMessage', { property: property.nombre }))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-bordeaux text-bordeaux px-6 py-3 rounded-lg hover:bg-bordeaux hover:text-white transition-colors font-semibold text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
