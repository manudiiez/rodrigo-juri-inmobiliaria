"use client";

import { useTranslations } from "next-intl";

interface InstalacionesYMejoras {
  label: string;
  fields: { label: string; value: string; subText?: string }[];
}

interface PropertyInfrastructureProps {
  instalaciones: InstalacionesYMejoras;
}


export default function PropertyInfrastructure({
  instalaciones,
}: PropertyInfrastructureProps) {
  const t = useTranslations("PropertyDetailPage.infrastructure");

  return (
    <section id="infraestructura" className="mb-20 scroll-mt-24">
      <h2 className="text-3xl font-light text-gray-900 mb-8 pb-4 border-b-2 border-secondary">
        {instalaciones.label}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {instalaciones.fields.map((instalacion, index) => (
          <div className="bg-gray-50 p-6" key={`${index}-field-infrastructure`}>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {instalacion.label}
            </p>
            <p className="text-lg text-gray-900 mb-1">{instalacion.value}</p>
            {instalacion.subText && (
              <p className="text-sm text-gray-600">
                {instalacion.subText}
              </p>
            )}
          </div>
        ))}
        
      </div>
    </section>
  );
}
