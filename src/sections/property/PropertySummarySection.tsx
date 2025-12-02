"use client";

import { useTranslations } from "next-intl";

interface PropertySummarySectionProps {
  propertyRef: string;
  title: string;
  location: string;
  price: {
    value: number | null;
    currency: string | null;
    pricePerHectare?: number | null;
  };
  resumenGeneral: {
    label: string;
    value: string;
    extra?: string;
    class?: string;
    border?: string;
  }[];
  descripcion: { text: string; callout?: { label: string; value: string } } | string;
}

export default function PropertySummarySection({
  propertyRef,
  title,
  location,
  price,
  resumenGeneral,
  descripcion,
}: PropertySummarySectionProps) {
  const t = useTranslations("PropertyDetailPage.summary");

  // Normalizar descripcion si es string
  const normalizedDescripcion = typeof descripcion === 'string'
    ? { text: descripcion, callout: undefined }
    : descripcion;

  return (
    <section id="resumen" className="mb-20 scroll-mt-24">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
          {propertyRef}
        </p>
        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
          {title}
        </h1>
        <div className="flex items-center gap-2 text-gray-600 mb-6">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span>{location}</span>
        </div>
        <div className="flex items-baseline gap-4 mb-8">
          {price.value !== null ? (
            <>
              <p className="text-4xl font-light text-gray-900">
                {price.value.toLocaleString()} {price.currency}
              </p>
              {(price.pricePerHerctare || price.pricePerHectare) && (
                <p className="text-lg text-gray-600">
                  ({(price.pricePerHerctare || price.pricePerHectare)!.toLocaleString()} {price.currency}/ha)
                </p>
              )}
            </>
          ) : (
            <p className="text-4xl font-light text-gray-900">
              Consultar precio
            </p>
          )}
        </div>
      </div>

      {/* Resumen General Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b border-gray-200">
        {resumenGeneral.map((item, index) => (
          <div
            key={`${index}-field-summary`}
            className={`bg-gray-50 p-6 ${item.border || ''}`}
          >
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {item.label}
            </p>
            <p className={item.class || 'text-3xl font-light text-gray-900'}>
              {item.value}{" "}
            </p>
            {item.extra && (
              <p className="text-xs text-gray-600">{item.extra}</p>
            )}
          </div>
        ))}
      </div>

      {/* Descripción */}
      <div>
        <h3 className="text-2xl font-light text-gray-900 mb-4">
          {t("generalDescription")}
        </h3>
        <p className="whitespace-pre-line text-base leading-relaxed text-gray-700">
          {normalizedDescripcion.text}
        </p>
      </div>

      {/* Aptitud Productiva */}
      {normalizedDescripcion.callout && (
        <div className="mt-8 bg-[#0A1628] text-white p-8">
          <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
            {normalizedDescripcion.callout.label}
          </h4>
          <p className="text-2xl font-light">{normalizedDescripcion.callout.value}</p>
        </div>
      )}
    </section>
  );
}
