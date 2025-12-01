"use client";

import { useTranslations } from "next-intl";

interface SueloYClima {
  tipoDeSuelo: string;
  textura: string;
  phSuelo: {
    valor: number;
    descripcion: string;
  };
  materiaOrganicaPorc: number;
  pendiente: string;
  drenaje: string;
  gradosDia: {
    valor: number;
    descripcion: string;
  };
  heladas: string;
}

interface AguaYRiego {
  derechoDeAgua: string;
  caudalTotal: string;
  fuente: string;
  turnoDeRiego: string;
  ceAgua: {
    valor: number;
    unidad: string;
    descripcion: string;
  };
  phAgua: number;
  sistemaDeRiego: string;
  anioInstalacion: number;
}

interface PropertyTechnicalSheetProps {
  sueloYClima: SueloYClima;
  aguaYRiego: AguaYRiego;
}

export default function PropertyTechnicalSheet({
  sueloYClima,
  aguaYRiego,
}: PropertyTechnicalSheetProps) {
  const t = useTranslations('PropertyDetailPage.technical');

  return (
    <section id="ficha-tecnica" className="mb-20 scroll-mt-24">
      <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-[#E2B34C]">
        {t('title')}
      </h2>

      {/* Suelo y Clima */}
      <div className="mb-10">
        <h3 className="text-2xl font-light text-gray-900 mb-6">
          {t('soilAndClimate')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-gray-200 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t('soilType')}
            </p>
            <p className="text-lg text-gray-900">
              {sueloYClima.tipoDeSuelo}
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t('texture')}
            </p>
            <p className="text-lg text-gray-900">
              {sueloYClima.textura}
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t('soilPh')}
            </p>
            <p className="text-lg text-gray-900">
              {sueloYClima.phSuelo.valor} (
              {sueloYClima.phSuelo.descripcion})
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t('organicMatter')}
            </p>
            <p className="text-lg text-gray-900">
              {sueloYClima.materiaOrganicaPorc}%
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t('slope')}
            </p>
            <p className="text-lg text-gray-900">
              {sueloYClima.pendiente}
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t('drainage')}
            </p>
            <p className="text-lg text-gray-900">
              {sueloYClima.drenaje}
            </p>
          </div>
          <div className="border-l-4 border-[#E2B34C] pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t('degreeDays')}
            </p>
            <p className="text-lg text-gray-900">
              {sueloYClima.gradosDia.valor} (
              {sueloYClima.gradosDia.descripcion}
              )
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t('frost')}
            </p>
            <p className="text-lg text-gray-900">
              {sueloYClima.heladas}
            </p>
          </div>
        </div>
      </div>

      {/* Agua y Riego */}
      <div>
        <h3 className="text-2xl font-light text-gray-900 mb-6">
          {t('waterAndIrrigation')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t('waterRight')}
            </p>
            <p className="text-lg text-gray-900">
              {aguaYRiego.derechoDeAgua}
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t('totalFlow')}
            </p>
            <p className="text-lg text-gray-900">
              {aguaYRiego.caudalTotal}
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t('source')}
            </p>
            <p className="text-lg text-gray-900">
              {aguaYRiego.fuente}
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t('irrigationTurn')}
            </p>
            <p className="text-lg text-gray-900">
              {aguaYRiego.turnoDeRiego}
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t('waterConductivity')}
            </p>
            <p className="text-lg text-gray-900">
              {aguaYRiego.ceAgua.valor}{" "}
              {aguaYRiego.ceAgua.unidad}
              <span className="text-sm text-gray-600">
                {" "}
                ({aguaYRiego.ceAgua.descripcion}
                )
              </span>
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t('waterPh')}
            </p>
            <p className="text-lg text-gray-900">
              {aguaYRiego.phAgua}
            </p>
          </div>
          <div className="border-l-4 border-[#E2B34C] pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t('irrigationSystem')}
            </p>
            <p className="text-lg text-gray-900">
              {aguaYRiego.sistemaDeRiego}
            </p>
          </div>
          <div className="border-l-4 border-gray-200 pl-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t('installationYear')}
            </p>
            <p className="text-lg text-gray-900">
              {aguaYRiego.anioInstalacion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
