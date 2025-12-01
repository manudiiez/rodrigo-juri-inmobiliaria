"use client";

import { useTranslations } from "next-intl";

interface InstalacionesYMejoras {
  casaPrincipal: string;
  estadoCasa: string;
  galpon: string;
  salaDeRiego: string;
  cercos: string;
  caminosInternos: string;
  pozoDeAgua: string;
  tanqueAustraliano: string;
}

interface PropertyInfrastructureProps {
  instalacionesYMejoras: InstalacionesYMejoras;
}

export default function PropertyInfrastructure({
  instalacionesYMejoras,
}: PropertyInfrastructureProps) {
  const t = useTranslations('PropertyDetailPage.infrastructure');

  return (
    <section id="infraestructura" className="mb-20 scroll-mt-24">
      <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-secondary">
        {t('title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            {t('mainHouse')}
          </p>
          <p className="text-lg text-gray-900 mb-1">
            {instalacionesYMejoras.casaPrincipal}
          </p>
          <p className="text-sm text-gray-600">
            {t('houseCondition')}: {instalacionesYMejoras.estadoCasa}
          </p>
        </div>
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            {t('shed')}
          </p>
          <p className="text-lg text-gray-900">
            {instalacionesYMejoras.galpon}
          </p>
        </div>
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            {t('irrigationRoom')}
          </p>
          <p className="text-lg text-gray-900">
            {instalacionesYMejoras.salaDeRiego}
          </p>
        </div>
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            {t('fences')}
          </p>
          <p className="text-lg text-gray-900">
            {instalacionesYMejoras.cercos}
          </p>
        </div>
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            {t('internalRoads')}
          </p>
          <p className="text-lg text-gray-900">
            {instalacionesYMejoras.caminosInternos}
          </p>
        </div>
        <div className="bg-gray-50 p-6">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            {t('waterWell')}
          </p>
          <p className="text-lg text-gray-900">
            {instalacionesYMejoras.pozoDeAgua}
          </p>
        </div>
        <div className="bg-gray-50 p-6 md:col-span-2">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            {t('australianTank')}
          </p>
          <p className="text-lg text-gray-900">
            {instalacionesYMejoras.tanqueAustraliano}
          </p>
        </div>
      </div>
    </section>
  );
}
